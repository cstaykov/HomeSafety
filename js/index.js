function insertDiv() {
  // Create a new element
  var newNode = document.createElement('div');
  newNode.id = "steven"

  // Get the reference node
  var referenceNode = document.getElementById('gac_scont');

  // Insert the new node before the reference node
  referenceNode.after(newNode);
}

insertDiv()
