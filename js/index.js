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

// function getResponseEntertainmentValue(response) {
//   entertainmentValue = response.totalHomeScores.entertainment.value
//   entertainmentValue = Math.round(entertainmentValue)
//   return entertainmentValue
// }

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
  // entertainmentScore = makeLabel("Entertainment Score:", getResponseEntertainmentValue(response))
  parent.append(quietScore)
  parent.append(document.createElement("br"))
  parent.append(trafficScore)
  parent.append(document.createElement("br"))
  parent.append(safetyScore)
  parent.append(document.createElement("br"))
  // parent.append(entertainmentScore)
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
  var responses = []
  var newNode1 = document.createElement('div')
  var newNodes = [newNode1]

  for (i = 0; i < referenceNodes.length; i++) {
    console.log("hi"+i)
    var street = document.getElementsByClassName('p-street-address')
    var city = document.getElementsByClassName('p-locality')
    var state = document.getElementsByClassName('p-region')

    var streetText = street[i].textContent.replace(/\u00a0/g, "%20");
    var cityText = city[i].textContent.replace(/\u00a0/g, "%20");
    var stateText = state[i].textContent.replace(/\u00a0/g, "%20");

    streetText = streetText.replace(/ /g, "%20").replace(",", "");
    cityText = cityText.replace(/ /g, "%20").replace(",", "");
    stateText = stateText.replace(/ /g, "").replace(",", "");

    address = streetText + cityText + stateText
    console.log(address)

    var url = "https://apis.solarialabs.com/shine/v1/total-home-scores/reports?address=" + address + "%2C%20USA&apikey=YFYHd0eSblGWUtBTYBIkGCqg9z27nZra"

    fetch(url).then(r => r.json().then(response => appendLabels(newNodes[i], response)))

  }

  //appendLabels(newNodes[0], responses[0].totalHomeScores[0])

  console.log(newNodes)
  console.log(responses)


  // var newNode1 = document.createElement('div');
  // newNode1.classList.add("ShineData")
  // var newNode2 = document.createElement('div');
  // newNode2.classList.add("ShineData")
  // var newNode3 = document.createElement('div');
  // newNode3.classList.add("ShineData")
  // var newNode4 = document.createElement('div');
  // newNode4.classList.add("ShineData")
  // var newNode5 = document.createElement('div');
  // newNode5.classList.add("ShineData")
  // var newNode6 = document.createElement('div');
  // newNode6.classList.add("ShineData")
  // var newNode7 = document.createElement('div');
  // newNode7.classList.add("ShineData")
  // var newNode8 = document.createElement('div');
  // newNode8.classList.add("ShineData")
  // var newNode9 = document.createElement('div');
  // newNode9.classList.add("ShineData")

  // var insertionListener = function(event) {
  //   // Making sure that this is the animation we want.
  //   if (event.animationName === "nodeInserted") {
  //     alert("Node has been inserted: " + event.target);
  //   }
  // }
}

insertDiv()