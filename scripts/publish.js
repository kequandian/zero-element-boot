#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const npmrcPublishPath = path.join(root, '.npmrc.publish');

function run(cmd, args, options = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: true, ...options });
  if (res.status !== 0) {
    throw new Error(`[publish] Command failed: ${cmd} ${args.join(' ')}`);
  }
}

function ensureGatewayFiles() {
  const files = ['doBind.mjs', 'doChain.mjs', 'doFilter.mjs'];
  const missing = files.filter((f) => !fs.existsSync(path.join(root, 'lib', 'components', 'gateway', f)));
  if (missing.length) {
    throw new Error(`[publish] Missing build outputs: ${missing.join(', ')} \nDid you run gulp copy-mjs and build?`);
  }
}

function writeTempNpmrc(token, registry) {
  const content = `registry=${registry}\n//registry.npmjs.org/:_authToken=${token}\nalways-auth=true\n`;
  fs.writeFileSync(npmrcPublishPath, content, 'utf8');
  return npmrcPublishPath;
}

function checkLogin(registry, userNpmrc) {
  const env = { ...process.env };
  if (userNpmrc) env.NPM_CONFIG_USERCONFIG = userNpmrc;
  const res = spawnSync('npm', ['whoami', '--registry', registry], { stdio: 'pipe', shell: true, env });
  return res.status === 0;
}

function cleanupTempNpmrc(userNpmrc) {
  if (userNpmrc && fs.existsSync(userNpmrc)) {
    try { fs.unlinkSync(userNpmrc); } catch (e) {}
  }
}

function main() {
  const argv = process.argv.slice(2);
  const commit = argv.includes('commit') || argv.includes('--commit');
  const dryRun = argv.includes('--dry-run');
  const tagArg = argv.find((a) => a.startsWith('--tag='));
  const accessArg = argv.find((a) => a.startsWith('--access='));
  const registryArg = argv.find((a) => a.startsWith('--registry='));
  const otpArg = argv.find((a) => a.startsWith('--otp='));
  const registry = registryArg ? registryArg.split('=')[1] : 'https://registry.npmjs.org';

  if (!commit) {
    console.log('[publish] 未提供 commit 参数，当前不会执行 npm publish。');
    console.log('[publish] 可随时执行：\n  npm run publish commit\n或直接执行：\n  npm publish');
    return;
  }

  if (process.env.ZEB_PUBLISH_CHILD === '1') {
    console.log('[publish] Detected npm publish lifecycle, skipping nested invocation.');
    return;
  }

  console.log('[publish] Pre-clean: yarn clean')
  try {
    run('yarn', ['clean']);
  } catch (e) {
    console.warn('[publish] yarn clean failed, fallback to npm run clean');
    try {
      run('npm', ['run', 'clean']);
    } catch (e2) {
      console.warn('[publish] npm run clean failed; continue to build');
    }
  }

  console.log('[publish] Step 1: Build project')
  run('npm', ['run', 'build']);

  console.log('[publish] Step 2: Verify gateway .mjs exist');
  ensureGatewayFiles();

  console.log('[publish] Step 3: Preview package contents (dry-run pack)');
  run('npm', ['pack', '--dry-run']);

  let userNpmrc = undefined;
  if (!dryRun) {
    const token = process.env.NPM_TOKEN;
    if (token) {
      userNpmrc = writeTempNpmrc(token, registry);
      console.log(`[publish] Using temp npmrc: ${userNpmrc}`);
    }

    const loggedIn = checkLogin(registry, userNpmrc);
    if (!loggedIn) {
      console.error('[publish] 未登录 npm 或凭证无效。请先执行:');
      console.error(`  npm login --registry ${registry}`);
      console.error('或设置环境变量 NPM_TOKEN 再尝试发布。');
      cleanupTempNpmrc(userNpmrc);
      process.exit(1);
    }
  }

  console.log('[publish] Step 4: Publish to npm');
  const publishArgs = ['publish'];
  if (dryRun) publishArgs.push('--dry-run');
  if (tagArg) publishArgs.push(tagArg);
  if (accessArg) publishArgs.push(accessArg);
  if (registryArg) publishArgs.push(registryArg);
  const otpEnv = process.env.NPM_OTP;
  if (otpArg) publishArgs.push(otpArg);
  else if (otpEnv) publishArgs.push(`--otp=${otpEnv}`);

  const env = { ...process.env, ZEB_PUBLISH_CHILD: '1' };
  if (userNpmrc) env.NPM_CONFIG_USERCONFIG = userNpmrc;

  const res = spawnSync('npm', publishArgs, { stdio: 'inherit', shell: true, env });
  if (res.status !== 0) {
    console.error('[publish] npm publish failed');
    console.error('常见原因：');
    console.error('1) 未登录或凭证无效（执行 npm login 或设置 NPM_TOKEN）');
    console.error('2) 账号启用 2FA，需要提供 OTP（使用 --otp=<code> 或设置 NPM_OTP）');
    console.error('3) 版本号已存在（修改 package.json version）');
    cleanupTempNpmrc(userNpmrc);
    process.exit(res.status || 1);
  }

  cleanupTempNpmrc(userNpmrc);
  console.log('[publish] Completed successfully');
}

main();