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

// Login page

$(document).ready(function() {
  $(".tabs .tab").click(function() {
    var tab_id = $(this).attr("data-tab");

    $(".tabs .tab").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  $(".input").blur(function() {
    tmpval = $(this).val();
    if (tmpval == "") {
      $(this).addClass("");
      $(this).removeClass("not-empty");
    } else {
      $(this).addClass("not-empty");
      $(this).removeClass("");
    }
  });
});
