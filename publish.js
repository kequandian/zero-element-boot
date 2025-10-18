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

function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const tagArg = argv.find((a) => a.startsWith('--tag='));
  const accessArg = argv.find((a) => a.startsWith('--access='));
  const registryArg = argv.find((a) => a.startsWith('--registry='));
  const registry = registryArg ? registryArg.split('=')[1] : 'https://registry.npmjs.org';

  // Prevent infinite recursion: when invoked as npm publish lifecycle
  if (process.env.ZEB_PUBLISH_CHILD === '1') {
    console.log('[publish] Detected npm publish lifecycle, skipping nested invocation.');
    return;
  }

  console.log('[publish] Step 1: Build project');
  run('npm', ['run', 'build']);

  console.log('[publish] Step 2: Verify gateway .mjs exist');
  ensureGatewayFiles();

  console.log('[publish] Step 3: Preview package contents (dry-run pack)');
  run('npm', ['pack', '--dry-run']);

  // Setup auth only when not dry-run
  let userNpmrc = undefined;
  if (!dryRun) {
    const token = process.env.NPM_TOKEN;
    if (!token) {
      console.error('[publish] Missing NPM_TOKEN env var. Set NPM_TOKEN before publishing.');
      process.exit(1);
    }
    userNpmrc = writeTempNpmrc(token, registry);
    console.log(`[publish] Using temp npmrc: ${userNpmrc}`);
  }

  console.log('[publish] Step 4: Publish to npm');
  const publishArgs = ['publish'];
  if (dryRun) publishArgs.push('--dry-run');
  if (tagArg) publishArgs.push(tagArg);
  if (accessArg) publishArgs.push(accessArg);
  if (registryArg) publishArgs.push(registryArg);

  const env = { ...process.env, ZEB_PUBLISH_CHILD: '1' };
  if (userNpmrc) {
    env.NPM_CONFIG_USERCONFIG = userNpmrc; // use temp npmrc for this publish only
  }

  const res = spawnSync('npm', publishArgs, { stdio: 'inherit', shell: true, env });
  if (res.status !== 0) {
    console.error('[publish] npm publish failed');
    process.exit(res.status || 1);
  }

  console.log('[publish] Completed successfully');
}

main();