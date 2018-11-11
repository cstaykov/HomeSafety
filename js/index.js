function insertDiv() {


    var head = document.getElementsByTagName('head')[0];

    var jqScript = document.createElement('script');
    var jsScript = document.createElement('script');
    var bootstrapCSS = document.createElement('link');

    jqScript.type = 'text/javascript';
    jsScript.type = 'text/javascript';
    bootstrapCSS.rel = "stylesheet"

    jqScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    jsScript.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
    bootstrapCSS.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"

    head.appendChild(jqScript);
    head.appendChild(jsScript);
    head.appendChild(bootstrapCSS);

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
    var cityText8 = city[7].textContent.replace(/\u00a0/g, "%20");
    var cityText9 = city[8].textContent.replace(/\u00a0/g, "%20");

    var stateText1 = state[0].textContent.replace(/\u00a0/g, "%20");
    var stateText2 = state[1].textContent.replace(/\u00a0/g, "%20");
    var stateText3 = state[2].textContent.replace(/\u00a0/g, "%20");
    var stateText4 = state[3].textContent.replace(/\u00a0/g, "%20");
    var stateText5 = state[4].textContent.replace(/\u00a0/g, "%20");
    var stateText6 = state[5].textContent.replace(/\u00a0/g, "%20");
    var stateText7 = state[6].textContent.replace(/\u00a0/g, "%20");
    var stateText8 = state[7].textContent.replace(/\u00a0/g, "%20");
    var stateText9 = state[8].textContent.replace(/\u00a0/g, "%20");

    streetText1 = streetText1.replace(/ /g, "%20").replace(",", "");
    streetText2 = streetText2.replace(/ /g, "%20").replace(",", "");
    streetText3 = streetText3.replace(/ /g, "%20").replace(",", "");
    streetText4 = streetText4.replace(/ /g, "%20").replace(",", "");
    streetText5 = streetText5.replace(/ /g, "%20").replace(",", "");
    streetText6 = streetText6.replace(/ /g, "%20").replace(",", "");
    streetText7 = streetText7.replace(/ /g, "%20").replace(",", "");
    streetText8 = streetText8.replace(/ /g, "%20").replace(",", "");
    streetText9 = streetText9.replace(/ /g, "%20").replace(",", "");

    cityText1 = cityText1.replace(/ /g, "%20").replace(",", "");
    cityText2 = cityText2.replace(/ /g, "%20").replace(",", "");
    cityText3 = cityText3.replace(/ /g, "%20").replace(",", "");
    cityText4 = cityText4.replace(/ /g, "%20").replace(",", "");
    cityText5 = cityText5.replace(/ /g, "%20").replace(",", "");
    cityText6 = cityText6.replace(/ /g, "%20").replace(",", "");
    cityText7 = cityText7.replace(/ /g, "%20").replace(",", "");
    cityText8 = cityText8.replace(/ /g, "%20").replace(",", "");
    cityText9 = cityText9.replace(/ /g, "%20").replace(",", "");

    stateText1 = stateText1.replace(/ /g, "").replace(",", "");
    stateText2 = stateText2.replace(/ /g, "").replace(",", "");
    stateText3 = stateText3.replace(/ /g, "").replace(",", "");
    stateText4 = stateText4.replace(/ /g, "").replace(",", "");
    stateText5 = stateText5.replace(/ /g, "").replace(",", "");
    stateText6 = stateText6.replace(/ /g, "").replace(",", "");
    stateText7 = stateText7.replace(/ /g, "").replace(",", "");
    stateText8 = stateText8.replace(/ /g, "").replace(",", "");
    stateText9 = stateText9.replace(/ /g, "").replace(",", "");

    address1 = streetText1 + cityText1 + stateText1
    address2 = streetText2 + cityText2 + stateText2
    address3 = streetText3 + cityText3 + stateText3
    address4 = streetText4 + cityText4 + stateText4
    address5 = streetText5 + cityText5 + stateText5
    address6 = streetText6 + cityText6 + stateText6
    address7 = streetText7 + cityText7 + stateText7
    address8 = streetText8 + cityText8 + stateText8
    address9 = streetText9 + cityText9 + stateText9

    var newNode1 = document.createElement('div');
    newNode1.classList.add("ShineData")
    var newNode2 = document.createElement('div');
    newNode2.classList.add("ShineData")
    var newNode3 = document.createElement('div');
    newNode3.classList.add("ShineData")
    var newNode4 = document.createElement('div');
    newNode4.classList.add("ShineData")
    var newNode5 = document.createElement('div');
    newNode5.classList.add("ShineData")
    var newNode6 = document.createElement('div');
    newNode6.classList.add("ShineData")
    var newNode7 = document.createElement('div');
    newNode7.classList.add("ShineData")
    var newNode8 = document.createElement('div');
    newNode8.classList.add("ShineData")
    var newNode9 = document.createElement('div');
    newNode9.classList.add("ShineData")

    var url1 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address1 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url2 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address2 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url3 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address3 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url4 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address4 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url5 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address5 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url6 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address6 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url7 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address7 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url8 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address8 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    var url9 = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address9 + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"

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
    let options4 = {
      "url": url4,
      "method": "GET",
      "processData": false
    }
    let options5 = {
      "url": url5,
      "method": "GET",
      "processData": false
    }
    let options6 = {
      "url": url6,
      "method": "GET",
      "processData": false
    }
    let options7 = {
      "url": url7,
      "method": "GET",
      "processData": false
    }
    let options8 = {
      "url": url8,
      "method": "GET",
      "processData": false
    }
    let options9 = {
      "url": url9,
      "method": "GET",
      "processData": false
    }

    $.ajax(options1).done(function(response){
      quiet1 = response.totalHomeScores.quiet.value
      traffic1 = response.totalHomeScores.traffic.value
      safety1 = response.totalHomeScores.safety.value
      entertainment1 = response.totalHomeScores.entertainment.value
      quiet1 = Math.round(quiet1)
      traffic1 = Math.round(traffic1)
      safety1 = Math.round(safety1)
      entertainment1 = Math.round(entertainment1)
      newNode1.textContent = "Quiet Score: " + quiet1 + " Traffic Score: " + traffic1 + " Safety Score: " + safety1 + " Entertainment: " + entertainment1
      referenceNodes[0].append(newNode1)
    })
  	$.ajax(options2).done(function(response){
          quiet2 = response.totalHomeScores.quiet.value
          traffic2 = response.totalHomeScores.traffic.value
          safety2 = response.totalHomeScores.safety.value
          entertainment2 = response.totalHomeScores.entertainment.value
          quiet2 = Math.round(quiet2)
          traffic2 = Math.round(traffic2)
          safety2 = Math.round(safety2)
          entertainment2 = Math.round(entertainment2)
          newNode2.textContent = "Quiet Score: " + quiet2 + " Traffic Score: " + traffic2 + " Safety Score: " + safety2 + " Entertainment: " + entertainment2
          referenceNodes[1].append(newNode2)
        })
  	$.ajax(options3).done(function(response){
          quiet3 = response.totalHomeScores.quiet.value
          traffic3 = response.totalHomeScores.traffic.value
          safety3 = response.totalHomeScores.safety.value
          entertainment3 = response.totalHomeScores.entertainment.value
          quiet3 = Math.round(quiet3)
          traffic3 = Math.round(traffic3)
          safety3 = Math.round(safety3)
          entertainment3 = Math.round(entertainment3)
          newNode3.textContent = "Quiet Score: " + quiet3 + " Traffic Score: " + traffic3 + " Safety Score: " + safety3 + " Entertainment: " + entertainment3
          referenceNodes[2].append(newNode3)
        })
  	$.ajax(options4).done(function(response){
          quiet4 = response.totalHomeScores.quiet.value
          traffic4 = response.totalHomeScores.traffic.value
          safety4 = response.totalHomeScores.safety.value
          entertainment4 = response.totalHomeScores.entertainment.value
          quiet4 = Math.round(quiet4)
          traffic4 = Math.round(traffic4)
          safety4 = Math.round(safety4)
          entertainment4 = Math.round(entertainment4)
          newNode4.textContent = "Quiet Score: " + quiet4 + " Traffic Score: " + traffic4 + " Safety Score: " + safety4 + " Entertainment: " + entertainment4
          referenceNodes[3].append(newNode4)
        })
  	$.ajax(options5).done(function(response){
          quiet5 = response.totalHomeScores.quiet.value
          traffic5 = response.totalHomeScores.traffic.value
          safety5 = response.totalHomeScores.safety.value
          entertainment5 = response.totalHomeScores.entertainment.value
          quiet5 = Math.round(quiet5)
          traffic5 = Math.round(traffic5)
          safety5 = Math.round(safety5)
          entertainment5 = Math.round(entertainment5)
          newNode5.textContent = "Quiet Score: " + quiet5 + " Traffic Score: " + traffic5 + " Safety Score: " + safety5 + " Entertainment: " + entertainment5
          referenceNodes[4].append(newNode5)
        })
  	$.ajax(options6).done(function(response){
          quiet6 = response.totalHomeScores.quiet.value
          traffic6 = response.totalHomeScores.traffic.value
          safety6 = response.totalHomeScores.safety.value
          entertainment6 = response.totalHomeScores.entertainment.value
          quiet6 = Math.round(quiet6)
          traffic6 = Math.round(traffic6)
          safety6 = Math.round(safety6)
          entertainment6 = Math.round(entertainment6)
          newNode6.textContent = "Quiet Score: " + quiet6 + " Traffic Score: " + traffic6 + " Safety Score: " + safety6 + " Entertainment: " + entertainment6
          referenceNodes[5].append(newNode6)
        })
  	$.ajax(options7).done(function(response){
          quiet7 = response.totalHomeScores.quiet.value
          traffic7 = response.totalHomeScores.traffic.value
          safety7 = response.totalHomeScores.safety.value
          entertainment7 = response.totalHomeScores.entertainment.value
          quiet7 = Math.round(quiet7)
          traffic7 = Math.round(traffic7)
          safety7 = Math.round(safety7)
          entertainment7 = Math.round(entertainment7)
          newNode7.textContent = "Quiet Score: " + quiet7 + " Traffic Score: " + traffic7 + " Safety Score: " + safety7 + " Entertainment: " + entertainment7
          referenceNodes[6].append(newNode7)
        })
  	$.ajax(options8).done(function(response){
          quiet8 = response.totalHomeScores.quiet.value
          traffic8 = response.totalHomeScores.traffic.value
          safety8 = response.totalHomeScores.safety.value
          entertainment8 = response.totalHomeScores.entertainment.value
          quiet8 = Math.round(quiet8)
          traffic8 = Math.round(traffic8)
          safety8 = Math.round(safety8)
          entertainment8 = Math.round(entertainment8)
          newNode8.textContent = "Quiet Score: " + quiet8 + " Traffic Score: " + traffic8 + " Safety Score: " + safety8 + " Entertainment: " + entertainment8
          referenceNodes[7].append(newNode8)
        })
  	$.ajax(options9).done(function(response){
          quiet9 = response.totalHomeScores.quiet.value
          traffic9 = response.totalHomeScores.traffic.value
          safety9 = response.totalHomeScores.safety.value
          entertainment9 = response.totalHomeScores.entertainment.value
          quiet9 = Math.round(quiet9)
          traffic9 = Math.round(traffic9)
          safety9 = Math.round(safety9)
          entertainment9 = Math.round(entertainment9)
          newNode9.textContent = "Quiet Score: " + quiet9 + " Traffic Score: " + traffic9 + " Safety Score: " + safety9 + " Entertainment: " + entertainment9
          referenceNodes[8].append(newNode9)
    })
}


insertDiv()
