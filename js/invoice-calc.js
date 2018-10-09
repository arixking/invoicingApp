calculate = function()
{
    var resources = document.getElementById('itemQuantity').value;
    var minutes = document.getElementById('itemRate').value;
    document.getElementById('itemTotal').value = parseInt(resources)*parseInt(minutes);

   }
