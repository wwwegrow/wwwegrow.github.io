// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  var headerSection = document.getElementById("header-section");
  var dropdownParent = document.querySelector(".dropdown");

  var navLinks = document.getElementsByClassName("nav-link");

  var activeNavLink = null;

  document.addEventListener("click", function(event) {
    var targetElement = event.target;

    if (targetElement.classList.contains("nav-link")) {
      var clickedNavLink = targetElement;

      if (clickedNavLink === activeNavLink) {
        headerSection.classList.remove("active");
        activeNavLink = null;
      } else {
        headerSection.classList.add("active");

        if (activeNavLink) {
          activeNavLink.classList.remove("active");
        }

        clickedNavLink.classList.add("active");
        activeNavLink = clickedNavLink;
      }
    } else if (!targetElement.closest(".dropdown-menu")) {
      headerSection.classList.remove("active");

      if (activeNavLink) {
        activeNavLink.classList.remove("active");
        activeNavLink = null;
      }
    }
  });

  document.addEventListener("touchend", function(event) {
    var targetElement = event.target;

    if (targetElement.classList.contains("nav-link")) {
      var clickedNavLink = targetElement;

      if (clickedNavLink === activeNavLink) {
        headerSection.classList.remove("active");
        activeNavLink = null;
      } else {
        headerSection.classList.add("active");

        if (activeNavLink) {
          activeNavLink.classList.remove("active");
        }

        clickedNavLink.classList.add("active");
        activeNavLink = clickedNavLink;
      }
    } else if (!targetElement.closest(".dropdown-menu")) {
      headerSection.classList.remove("active");

      if (activeNavLink) {
        activeNavLink.classList.remove("active");
        activeNavLink = null;
      }
    }
  });

  dropdownParent.addEventListener("hide.bs.dropdown", function() {
    headerSection.classList.remove("active");

    if (activeNavLink) {
      activeNavLink.classList.remove("active");
      activeNavLink = null;
    }
  });
});