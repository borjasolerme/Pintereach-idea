function showNav() {
  console.log("this is working");
  var opennav = document.getElementById("responsive-nav");
  if (opennav.className === "responsive-nav") {
    opennav.className += " unfold";
  } else {
    opennav.className = "responsive-nav";
  }
}
