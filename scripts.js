function expand() {
  var x = document.getElementById("expand");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
  var y = document.getElementById("reverse");
  if (y.innerHTML === "More Description ▼") {
    y.innerHTML = "More Description ▲";
  } else {
    y.innerHTML = "More Description ▼";
  }
  
}
