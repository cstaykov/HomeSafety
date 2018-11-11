function insertDiv() {
  // Create a new element

  // Get the reference node

  
  let options = {
    "url": "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=65%20Seaport%20Blvd%2C%20Boston%20MA%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra",
    "method": "GET",
    "processData": false
  }
  $.ajax(options).done((response)=>{
    console.log(response)
  })
  

    console.log(options);
    console.log('done');



  var referenceNodes = document.getElementsByClassName('pricing resp-module')
  console.log('a ting:')
  console.log(referenceNodes)

  for (i = 0; i < referenceNodes.length; i++)  {
    var newNode = document.createElement('div');
    newNode.id = "steven"
    referenceNodes[i].append(newNode)
  }


}

insertDiv()
