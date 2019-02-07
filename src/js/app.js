function showNav() {
  console.log("this is working");
  var opennav = document.getElementById("responsive-nav");
  if (opennav.className === "responsive-nav") {
    opennav.className += " unfold";
  } else {
    opennav.className = "responsive-nav";
  }
}

// Scroll Reveal

ScrollReveal().reveal(".header-image");
ScrollReveal().reveal(".right-image_marketing");
ScrollReveal().reveal(".feature-card");
ScrollReveal().reveal(".left-image_marketing");
