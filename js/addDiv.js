function wrapAllPrevious() {
  // this is assigned via the Function.prototype.call()
  // method, later:
  var _self = this,
      // creating a <div> element:
      div = document.createElement('div');
  // assigning an 'id' to that created-<div>:
  div.id = 'test';

  // inserting the created-<div> before the _self/this
  // element, using insertBefore():
  _self.parentNode.insertBefore(div, _self);
  // while the created-<div> has a previousSibling:
  while (div.previousSibling) {
    // we insert that previous-sibling before firstChild
    // of the <div> (effectively prepending the element
    // to the created-<div>):
    div.insertBefore(div.previousSibling, div.firstChild);
  }
}

// calling the function, using (as noted earlier)
// Function.prototype.call() to assign the specified
// <ul> as the 'this' of the function (using
// document.querySelector() to return the specific node:
wrapAllPrevious.call(document.querySelector('ul.newnav.clearfix.animated'));
