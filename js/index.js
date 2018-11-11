function insertDiv() {
  // Create a new element
  var newNode = document.createElement('div');
  newNode.id = "steven"

  // Get the reference node
  var referenceNode = document.getElementById('gac_scont');
  let options = {
    "url": "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=65%20Seaport%20Blvd%2C%20Boston%20MA%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra",
    "method": "GET",
    "processData": false
  }
  $.ajax(options).done((response)=>{
    console.log(response)
  })
  // var request = new XMLHTTPRequest()
  // request.open('GET',"https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=65%20Seaport%20Blvd%2C%20Boston%20MA%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra", false );

    console.log(options);
    console.log('done');

  //document.write(options)
  // Insert the new node before the reference node
  referenceNode.after(newNode);
}

insertDiv()
