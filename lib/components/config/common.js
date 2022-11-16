let endpoint = '';
let token = '';

function setEndpoint(value) {
  endpoint = value;
}

function getEndpoint() {
  const bConfig = window.ZEle;

  if (bConfig.endpoint) {
    return bConfig.endpoint;
  }

  return endpoint;
}

function setToken(value) {
  token = value;
}

function getToken() {
  return token;
}

export { setEndpoint, getEndpoint, setToken, getToken };