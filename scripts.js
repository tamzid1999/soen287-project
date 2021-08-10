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
