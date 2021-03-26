export default ((jsonPath, setJsonObject) => {
  fetch(jsonPath, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function (resp) {
    // console.log(resp)
    return resp.json();
  }).then(function (myJson) {
    console.log(myJson);
    setJsonObject(myJson); // return myJson
  });
});