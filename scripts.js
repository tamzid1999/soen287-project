function expand() {
  var x = document.getElementById("expand");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
  var y = document.getElementById("reverse");
  if (y.innerHTML === "Detailed Description ▼") {
    y.innerHTML = "Detailed Description ▲";
  } else {
    y.innerHTML = "Detailed Description ▼";
  }
  
}
var subtractFromCart = document.getElementsByClassName("subtract")
var addToCart = document.getElementsByClassName("add")
var deleteFromCart = document.getElementsByClassName("delete")
console.log(subtractFromCart)
console.log(addToCart)
console.log(deleteFromCart)

for(var i=0; i<deleteFromCart.length; i++){
    var button = deleteFromCart[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        var row =buttonClicked.parentNode.parentNode.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateCartTotal()
    })
}

for(var i=0; i<subtractFromCart.length; i++){
    var button = subtractFromCart[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target 
        var tdQuantity = parseFloat((this).parentElement.parentElement.childNodes[2].innerText)
        var quantityWrite=(this).parentElement.parentElement.childNodes[2]
        if (tdQuantity==0){
            return
        }
        else {
            tdQuantity--
            quantityWrite.innerText=tdQuantity
            console.log("clicked")
            console.log(tdQuantity)
            updateCartTotal()
        }
    })

}

for(var i=0; i<addToCart.length; i++){
    var button = addToCart[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target 
        var tdQuantity = parseFloat((this).parentElement.parentElement.childNodes[2].innerText)
        var quantityWrite=(this).parentElement.parentElement.childNodes[2]
            tdQuantity++
            quantityWrite.innerText=tdQuantity
            console.log("clicked")
            console.log(tdQuantity)
            updateCartTotal()
        
    })

}

function updateCartTotal(){
    var itemPrice = document.getElementsByClassName("price")
    var itemQuantity = document.getElementsByClassName("itemquantity")
    var subtotal = 0
    for (var i=0; i<itemPrice.length;i++){
        itemPrice[i]
        itemQuantity[i]
        var tempPrice = parseFloat(itemPrice[i].innerText.replace("$",""))
        var tempQuantity = parseFloat(itemQuantity[i].innerText)
        subtotal =subtotal+ (tempPrice*tempQuantity)
    }
    document.getElementsByClassName("cartsubtotal")[0].innerText="$"+subtotal.toFixed(2)
    document.getElementsByClassName("cartgst")[0].innerText="$"+(subtotal*0.05).toFixed(2)
    document.getElementsByClassName("cartqst")[0].innerText="$"+(subtotal*0.1).toFixed(2)
    document.getElementsByClassName("carttotal")[0].innerText="$"+(subtotal*1.15).toFixed(2)
    console.log(subtotal)
}

var x=document.getElementsByClassName("cartsubtotal")
console.log(x)


