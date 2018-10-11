
var itemCount = 0

function calculate() {
  var resources = document.getElementById('itemQuantity').value;
  var minutes = document.getElementById('itemRate').value;
  document.getElementById('itemTotal').value = parseInt(resources)*parseInt(minutes);
}



function addItem() {
    var elmnt = document.getElementById("lineItem"+itemCount);
    var cln = elmnt.cloneNode(true);
    var itemQuantityTemp = document.getElementById("itemQuantity"+itemCount)
    var itemRateTemp = document.getElementById("itemRate"+itemCount)
    itemCount = itemCount + 1;

    cln.id = ("lineItem"+itemCount);

    document.getElementById("itemList").appendChild(cln);

    itemQuantityTemp.id = "itemQuantity"+itemCount;
    itemRateTemp.id = "itemRate"+itemCount;

}
