function calculate() {
  var resources = document.getElementById('itemQuantity').value;
  var minutes = document.getElementById('itemRate').value;
  document.getElementById('itemTotal').value = parseInt(resources)*parseInt(minutes);
}


function addItem() {
    var elmnt = document.getElementById("lineItem");
    var cln = elmnt.cloneNode(true);
    document.getElementById("itemList").appendChild(cln);
}
