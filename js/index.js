function insertDiv() {

    var referenceNodes = document.getElementsByClassName('pricing resp-module')
    var street = document.getElementsByClassName('p-street-address')
    var city = document.getElementsByClassName('p-locality')
    var state = document.getElementsByClassName('p-region')

      var streetText1 = street[0].textContent.replace(/\u00a0/g, "%20");
      var streetText2 = street[1].textContent.replace(/\u00a0/g, "%20");
      var streetText3 = street[2].textContent.replace(/\u00a0/g, "%20");
      var streetText4 = street[3].textContent.replace(/\u00a0/g, "%20");
      var streetText5 = street[4].textContent.replace(/\u00a0/g, "%20");
      var streetText6 = street[5].textContent.replace(/\u00a0/g, "%20");
      var streetText7 = street[6].textContent.replace(/\u00a0/g, "%20");
      var streetText8 = street[7].textContent.replace(/\u00a0/g, "%20");
      var streetText9 = street[8].textContent.replace(/\u00a0/g, "%20");
      var cityText1 = city[0].textContent.replace(/\u00a0/g, "%20");
      var cityText2 = city[1].textContent.replace(/\u00a0/g, "%20");
      var cityText3 = city[2].textContent.replace(/\u00a0/g, "%20");
      var cityText4 = city[3].textContent.replace(/\u00a0/g, "%20");
      var cityText5 = city[4].textContent.replace(/\u00a0/g, "%20");
      var cityText6 = city[5].textContent.replace(/\u00a0/g, "%20");
      var cityText7 = city[6].textContent.replace(/\u00a0/g, "%20");

      var stateText1 = state[0].textContent.replace(/\u00a0/g, "%20");
      var stateText2 = state[1].textContent.replace(/\u00a0/g, "%20");
      var stateText3 = state[2].textContent.replace(/\u00a0/g, "%20");

      streetText1 = streetText1.replace(/ /g, "%20");
      streetText2 = streetText2.replace(/ /g, "%20");
      streetText3 = streetText3.replace(/ /g, "%20");
      cityText1 = cityText1.replace(/ /g, "%20");
      cityText2 = cityText2.replace(/ /g, "%20");
      cityText3 = cityText3.replace(/ /g, "%20");
      stateText1 = stateText1.replace(/ /g, "");
      stateText2 = stateText2.replace(/ /g, "");
      stateText3 = stateText3.replace(/ /g, "");


      streetText1 = streetText1.replace(",", "");
      streetText2 = streetText2.replace(",", "");
      streetText3 = streetText3.replace(",", "");

      cityText1 = cityText1.replace(",", "");
      cityText2 = cityText2.replace(",", "");
      cityText3 = cityText3.replace(",", "");
      stateText1 = stateText1.replace(",", "");
      stateText2 = stateText2.replace(",", "");
      stateText3 = stateText3.replace(",", "");

      address1 = streetText1 + cityText1 + stateText1
      address2 = streetText2 + cityText2 + stateText2
      address3 = streetText3 + cityText3 + stateText3

      // alert("address=" + address + "%2C%20USA")


      // alert(i)

      var newNode1 = document.createElement('div');
      newNode1.id = "steven"
      var newNode2 = document.createElement('div');
      newNode2.id = "steven"
      var newNode3 = document.createElement('div');
      newNode3.id = "steven"

      var url1 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address1 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
      var url2 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address2 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
      var url3 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address3 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"

      let options1 = {
        "url": url1,
        "method": "GET",
        "processData": false
      }
      let options2 = {
        "url": url2,
        "method": "GET",
        "processData": false
      }
      let options3 = {
        "url": url3,
        "method": "GET",
        "processData": false
      }

      $.ajax(options1).done(function(response){
        // alert(response.totalHomeScores.quiet.value)
        //console.log(i)
        newNode1.textContent = response.totalHomeScores.quiet.value.toString()
        referenceNodes[0].append(newNode1)
        //console.log(newNode.textContent)
      })
      $.ajax(options2).done(function(response){
        // alert(response.totalHomeScores.quiet.value)
        //console.log(i)
        newNode2.textContent = response.totalHomeScores.quiet.value.toString()
        referenceNodes[1].append(newNode2)
        //console.log(newNode.textContent)
      })
      $.ajax(options3).done(function(response){
        // alert(response.totalHomeScores.quiet.value)
        //console.log(i)
        newNode3.textContent = response.totalHomeScores.quiet.value.toString()
        referenceNodes[2].append(newNode3)
        //console.log(newNode.textContent)
      })

  }


insertDiv()
