function getResponseQuietValue(response) {
  quietValue = response.totalHomeScores.quiet.value
  quietValue = Math.round(quietValue)
  return quietValue
}

function getResponseTrafficValue(response) {
  trafficValue = response.totalHomeScores.traffic.value
  trafficValue = Math.round(trafficValue)
  return trafficValue
}

function getResponseSafetyValue(response) {
  safetyValue = response.totalHomeScores.safety.value
  safetyValue = Math.round(safetyValue)
  return safetyValue
}

function getResponseEntertainmentValue(response) {
  entertainmentValue = response.totalHomeScores.entertainment.value
  entertainmentValue = Math.round(entertainmentValue)
  return entertainmentValue
}

// TODO: Change label based on value
function makeLabel(description, value) {
  label = document.createElement("span")
  if (value >= 60) {
    label.className = "label label-success"
  } else if (value >= 30) {
    label.className = "label label-warning"
  } else {
    label.className = "label label-danger"
  }

  label.textContent = description + " " + value
  return label
}

function appendLabels(parent, response) {
  quietScore = makeLabel("Quiet Score:", getResponseQuietValue(response))
  trafficScore = makeLabel("Traffic Score:", getResponseTrafficValue(response))
  safetyScore = makeLabel("Safety Score:", getResponseSafetyValue(response))
  entertainmentScore = makeLabel("Entertainment Score:", getResponseEntertainmentValue(response))
  parent.append(quietScore)
  parent.append(document.createElement("br"))
  parent.append(trafficScore)
  parent.append(document.createElement("br"))
  parent.append(safetyScore)
  parent.append(document.createElement("br"))
  parent.append(entertainmentScore)
}


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
      referenceNodes[0].append(newNode1)
      appendLabels(newNode1,response)
    })
  	$.ajax(options2).done(function(response){
      referenceNodes[1].append(newNode2)
      appendLabels(newNode2,response)
    })
  	$.ajax(options3).done(function(response){
      referenceNodes[2].append(newNode3)
      appendLabels(newNode3,response)
    })
  	$.ajax(options4).done(function(response){
      referenceNodes[3].append(newNode4)
      appendLabels(newNode4,response)
    })
  	$.ajax(options5).done(function(response){
      referenceNodes[4].append(newNode5)
      appendLabels(newNode5,response)
    })
  	$.ajax(options6).done(function(response){
      referenceNodes[5].append(newNode6)
      appendLabels(newNode6,response)
    })
  	$.ajax(options7).done(function(response){
      referenceNodes[6].append(newNode7)
      appendLabels(newNode7,response)
    })
  	$.ajax(options8).done(function(response){
      referenceNodes[7].append(newNode8)
      appendLabels(newNode8,response)
    })
  	$.ajax(options9).done(function(response){
      referenceNodes[8].append(newNode9)
      appendLabels(newNode9,response)
    });

    var insertionListener = function(event) {
      // Making sure that this is the animation we want.
      if (event.animationName === "nodeInserted") {
        alert("Node has been inserted: " + event.target);
      }
    }
}


insertDiv()
