// toggle 
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function () {
  menutoggle.classList.toggle('active')
}
// PHD studen carousel 
$(document).ready(function () {
  $(".phd_student_carousel").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    margin: 35,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },

      575: {
        items: 2,
      },

      991: {
        items: 3,
      },

      1025: {
        items: 4,
      },
    },
  });
});

// Recent publication carousel
$(document).ready(function () {
  $(".recent_carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    margin: 10,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
  });
});

// accordion Js
function toggleAccordion(element) {
  const parentItem = element.parentElement;
  const isActive = parentItem.querySelector('.acc-body').classList.contains('open');

  // Close all accordion items
  document.querySelectorAll('.acc-body').forEach((body) => {
    body.classList.remove('open');
  });

  document.querySelectorAll('.accordion-title').forEach((title) => {
    title.classList.remove('open');
  });

  // If the clicked item is not active, activate it
  if (!isActive) {
    parentItem.querySelector('.acc-body').classList.add('open');
    parentItem.querySelector('.accordion-title').classList.add('open');
  }
}


// aos
AOS.init();


// banner two image animation

document.addEventListener("DOMContentLoaded", () => {
  const bannerImg = document.querySelector(".banner_two img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bannerImg.style.animation = "none";
          setTimeout(() => {
            bannerImg.style.animation =
              "banner-two-animation 2s linear 1";
          }, 0);
        } else {

          bannerImg.style.animation = "none";
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(bannerImg);
});


// swiper js
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    direction: "vertical", // Horizontal sliding (default)
    mousewheel: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Auto slide every 3 seconds
      disableOnInteraction: false,
    },
  });
});
