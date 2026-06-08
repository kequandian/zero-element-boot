// Shim for `import { history } from 'umi'`
// 单页模式下，history.push 仅更新 URL hash，不真正跳转。
// 提供与 umi history 兼容的 API（push/replace/go/goBack/listen/location）。

const listeners = [];

function parseQuery(search) {
  const q = {};
  new URLSearchParams(search || '').forEach((v, k) => { q[k] = v; });
  return q;
}

function buildUrl(pathname, query) {
  if (!query || !Object.keys(query).length) return pathname;
  const p = new URLSearchParams();
  Object.keys(query).forEach(k => {
    if (query[k] !== undefined) {
      p.append(k, typeof query[k] === 'object' ? JSON.stringify(query[k]) : query[k]);
    }
  });
  return `${pathname}?${p.toString()}`;
}

function toLocation(url) {
  const [pathname, search] = url.split('?');
  return { pathname, search: search || '', query: parseQuery(search) };
}

export const history = {
  push(arg) {
    const url = typeof arg === 'string' ? arg : buildUrl(arg.pathname, arg.query);
    if (typeof window !== 'undefined') window.location.hash = url;
    const loc = toLocation(url);
    listeners.forEach(fn => fn({ location: loc, action: 'PUSH' }));
  },
  replace(arg) {
    const url = typeof arg === 'string' ? arg : buildUrl(arg.pathname, arg.query);
    if (typeof window !== 'undefined') window.location.replace(`#${url}`);
    const loc = toLocation(url);
    listeners.forEach(fn => fn({ location: loc, action: 'REPLACE' }));
  },
  go(n) {
    if (typeof window !== 'undefined') window.history.go(n);
  },
  goBack() {
    if (typeof window !== 'undefined') window.history.back();
  },
  goForward() {
    if (typeof window !== 'undefined') window.history.forward();
  },
  listen(fn) {
    listeners.push(fn);
    return () => {
      const i = listeners.indexOf(fn);
      if (i > -1) listeners.splice(i, 1);
    };
  },
  get location() {
    const hash = (typeof window !== 'undefined' ? window.location.hash : '').slice(1);
    return toLocation(hash || '/');
  },
};

export default { history };
