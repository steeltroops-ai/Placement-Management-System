document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slideshow-image');
    let currentImageIndex = 0;
  
    setInterval(function() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }, 5000);
  });
  

  /*Header*/

  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    let prevScrollPos = window.pageYOffset;
  
    function toggleHeader() {
      const currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos > prevScrollPos) {
        header.classList.remove('fluent');
      } else {
        header.classList.add('fluent');
      }
  
      prevScrollPos = currentScrollPos;
    }
  
    document.addEventListener('scroll', toggleHeader);
  });
  








// Initialization for ES Users
import {
    Carousel,
    initTE,
  } from "tw-elements";
  
  initTE({ Carousel });