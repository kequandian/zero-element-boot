let endpoint = '';

let token = '';

function setEndpoint(value) {
    endpoint = value
}

function getEndpoint() {
  const wZEle = window.ZEle;
  if(wZEle && wZEle.endpoint){
    return wZEle.endpoint
  }
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