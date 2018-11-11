function insertDiv() {
  // Create a new element

  // Get the reference node

    //street[i].textContent
    //$("steven").text(street[i].textContent);

    var referenceNodes = document.getElementsByClassName('pricing resp-module')
    var street = document.getElementsByClassName('p-street-address')
    var city = document.getElementsByClassName('p-locality')
    var state = document.getElementsByClassName('p-region')



    for (i = 0; i < referenceNodes.length; i++)  {

      var streetText = street[i].textContent.replace(/\u00a0/g, "%20");
      var cityText = city[i].textContent.replace(/\u00a0/g, "%20");
      var stateText = state[i].textContent.replace(/\u00a0/g, "%20");

      streetText = streetText.replace(/ /g, "%20");
      cityText = cityText.replace(/ /g, "%20");
      stateText = stateText.replace(/ /g, "");

      streetText = streetText.replace(",", "");
      cityText = cityText.replace(",", "");
      stateText = stateText.replace(",", "");

      address = streetText + cityText + stateText
      // alert("address=" + address + "%2C%20USA")


      // alert(i)

      var newNode = document.createElement('div');
      newNode.id = "steven"
      referenceNodes[i].append(newNode)
      newNode.textContent = address

      let options = {
        "url": "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra",
        "method": "GET",
        "processData": false
      }
      $.ajax(options).done((response) => {
        // alert(i + " INSIDE AJAX")
        // alert(response.totalHomeScores.quiet.value)

        newNode.textContent = response.totalHomeScores.quiet.value.toString()
      })

  }






}

insertDiv()
