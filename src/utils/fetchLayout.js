
export default (layoutPath, setLayoutJson) => {

    fetch(layoutPath ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(resp){
        // console.log(resp)
        return resp.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setLayoutJson(myJson);
        // return myJson
      });
}