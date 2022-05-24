"use strict";

// Toggle overflow hidden on the body when hamburger is clicked (open) to prevent scrolling
$("#menu-btn").click(function () {
  $("body").toggleClass("overflow-hidden");
  // $('header').toggleClass("border-bottom");
});

// NEW NAV FUNCTION FOR ADDING ACTIVE CLASS
if (getWidth() < "1250") {
  var dropdown2 = document.getElementsByClassName("dropdown-button");
  var i;
  for (i = 0; i < dropdown2.length; i++) {
    dropdown2[i].addEventListener("click", function () {
      let active = false;
      // checks if clicked dropdown element is active
      if (this.classList.contains("active")) {
        active = true;
      }
      // deactivates dropdown buttons
      // If width of browser is less than 1250px, allow multiple dropdowns
      if (getWidth() >= "1250") {
        for (j = 0; j < dropdown2.length; j++) {
          dropdown2[j].classList.remove("active");
        }
      } else {
        this.classList.remove("active");
      }
      // if the element isn't active set it active
      if (!active) {
        this.classList.add("active");
      }
    });
  }
}

// Get width of browser, used to allow multiple dropdowns open for mobile
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// Horizontal tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
