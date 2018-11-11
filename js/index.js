function insertDiv() {
  // Create a new element

  // Get the reference node
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
