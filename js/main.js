const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}
navSlide();


window.onscroll = function() {myFunction()};
    
var navbar = document.getElementById("navic");
var navLinks = document.querySelector('.nav-links');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navLinks.classList.add("nav-links-top");
  } else {
    navbar.classList.remove("sticky");
    navLinks.classList.remove("nav-links-top");
  }
}

// owl-carousel for school slider
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    singleItem: true,
    margin: 30,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      }
    }
  });
});