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

ScrollReveal().reveal(".header-image", { delay: 250 });
ScrollReveal().reveal(".right-image_marketing", { delay: 250 });
ScrollReveal().reveal(".feature-card", { delay: 250 });
ScrollReveal().reveal(".left-image_marketing", { delay: 250 });
