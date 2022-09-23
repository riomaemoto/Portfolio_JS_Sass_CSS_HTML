const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navlinks");
  const navli = document.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");

    navli.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 9 + 0.5
          }s`;
      }
    });
  });
};



navSlide();
