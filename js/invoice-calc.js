

var itemCount = 0;

function calculate() {
  if (!itemCount) {
    var resources = document.getElementById('itemQuantity').value;
    var minutes = document.getElementById('itemRate').value;
    document.getElementById('itemTotal').value =
      parseInt(resources) * parseInt(minutes);
  } else {
    var resources = document.getElementById('itemQuantity_' + itemCount).value;
    var minutes = document.getElementById('itemRate_' + itemCount).value;
    document.getElementById('itemTotal_' + itemCount).value =
      parseInt(resources) * parseInt(minutes);
  }
}

function addItem() {
  var elmntN = document.getElementById('itemName');
  var elmntQ = document.getElementById('itemQuantity');
  var elmntR = document.getElementById('itemRate');
  var elmntT = document.getElementById('itemTotal');

  var newLI = document.createElement('li');
  newLI.id = 'lineItem_' + ++itemCount;
  var clnN = elmntN.cloneNode(true);
  var clnQ = elmntQ.cloneNode(true);
  var clnR = elmntR.cloneNode(true);
  var clnT = elmntT.cloneNode(true);

  clnN.id = 'itemName_' + itemCount;
  clnQ.id = 'itemQuantity_' + itemCount;
  clnR.id = 'itemRate_' + itemCount;
  clnT.id = 'itemTotal_' + itemCount;

  clnN.value = '';
  clnQ.value = '';
  clnR.value = '';
  clnT.value = '';

  newLI.append(clnN, clnQ, clnR, clnT);

  document.getElementById('itemList').appendChild(newLI);
}
