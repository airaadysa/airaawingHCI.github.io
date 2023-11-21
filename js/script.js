document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Navbar hide/show on scroll
    var prevScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    var navbarHeight = navbar.offsetHeight;
  
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
  
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `-${navbarHeight}px`;
      }
  
      prevScrollPos = currentScrollPos;
    };
  });
  