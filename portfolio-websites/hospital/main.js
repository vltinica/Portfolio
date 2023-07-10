const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

// close nav menu when a menu item is cliked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((navItems) => {
    navItems.addEventListener("click", () => {
      closeNav();
    });
  });
}

//  TESTIMONIALS SECTION (swiper js)
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive Breakpoints
  breakpoints: {
    // when window width is >= 600px
    640: {
      slidesPerView: 2,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});
