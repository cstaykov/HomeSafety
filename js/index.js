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
  entertainmentScore = makeLabel("Entertainment:", getResponseEntertainmentValue(response))
  parent.append(quietScore)
  parent.append(document.createElement("br"))
  parent.append(trafficScore)
  parent.append(document.createElement("br"))
  parent.append(safetyScore)
  parent.append(document.createElement("br"))
  parent.append(entertainmentScore)
}

function addHotelScores() {
  var referenceNodes = document.getElementsByClassName('pricing resp-module')
  var street = document.getElementsByClassName('p-street-address')
  var city = document.getElementsByClassName('p-locality')
  var state = document.getElementsByClassName('p-region')
  var newNodes = []

  for (let i = 0; i < 9; i++) {
    var streetText = street[i].textContent.replace(/\u00a0/g, "%20");
    var cityText = city[i].textContent.replace(/\u00a0/g, "%20");
    var stateText = state[i].textContent.replace(/\u00a0/g, "%20");

    streetText = streetText.replace(/ /g, "%20").replace(",", "");
    cityText = cityText.replace(/ /g, "%20").replace(",", "");
    stateText = stateText.replace(/ /g, "").replace(",", "");

    address = streetText + cityText + stateText

    var url = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"
    
    var newNode = document.createElement('div')
    newNodes.push(newNode)

    fetch(url).then(r => r.json().then(response => {
      referenceNodes[i].append(newNodes[i])
      appendLabels(newNodes[i], response)}))

  }
}

function installBoostrap() {
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
}

installBoostrap()
addHotelScores()