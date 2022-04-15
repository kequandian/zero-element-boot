let endpoint = '';

let token = '';

function setEndpoint(value) {
    endpoint = value
}

function getEndpoint() {
  return endpoint;
}

function setToken(value) {
    token = value
}

function getToken() {
  return token;
}

export {
    setEndpoint,
    getEndpoint,
    setToken,
    getToken
}