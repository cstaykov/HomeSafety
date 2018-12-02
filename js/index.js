function setupObserver() {
    // Select the node that will be observed for mutations
    var targetNode = document.body;

    // Options for the observer (which mutations to observe)
    var config = {
      attributes: true,
      childList: true,
      subtree: true
    };

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (mutation.type == 'childList') {
          console.log('A child node has been added or removed.');
        } else if (mutation.type == 'attributes') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
      }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}

function getResponseQuietValue(response) {
  if (response && response.totalHomeScores && response.totalHomeScores.quiet && response.totalHomeScores.quiet.value) {
    let quietValue = Math.round(response.totalHomeScores.quiet.value)
    return quietValue
  }
  return 'NA'
}

function getResponseTrafficValue(response) {
  if (response && response.totalHomeScores && response.totalHomeScores.traffic && response.totalHomeScores.traffic.value) {
    let trafficValue = Math.round(response.totalHomeScores.traffic.value)
    return trafficValue
  }
  return 'NA'
}

function getResponseSafetyValue(response) {
  if (response && response.totalHomeScores && response.totalHomeScores.safety && response.totalHomeScores.safety.value) {
    let safetyValue = Math.round(response.totalHomeScores.safety.value)
    return safetyValue
  }
  return 'NA'
}

function getResponseEntertainmentValue(response) {
  if (response && response.totalHomeScores && response.totalHomeScores.entertainment && response.totalHomeScores.entertainment.value) {
    let entertainmentValue = Math.round(response.totalHomeScores.entertainment.value)
    return entertainmentValue
  }
  return 'NA'
}

// TODO: Change label based on value
function makeLabel(description, value) {
  label = document.createElement("span")
  if (value >= 60) {
    label.className = "label label-success"
  } else if (value >= 30) {
    label.className = "label label-warning"
  } else if (value >= 0) {
    label.className = "label label-danger"
  } else {
    label.className = "label label-default"
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

  for (let i = 0; i < referenceNodes.length; i++) {
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
      appendLabels(newNodes[i], response)
    }))
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
//setupObserver()
addHotelScores()