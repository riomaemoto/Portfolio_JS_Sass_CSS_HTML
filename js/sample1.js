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
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 9 + 0.5
        }s`;
      }
    });
  });
};

emailjs.init("0s_7wx4fW1c_HW6A7");

const onClick = () => {
  const element = document.querySelector(".pushTheButton");
  const templateVariables = {
    email: "tarou@example.com",
    to_name: "ながとも",
    from_name: "ながとも2",
    content: "テストメッセージです",
  };
  // send mail
  element.addEventListener("click", () => {
    emailjs
      .send("service_jc4webr", "template_rxt65at", templateVariables)
      .then(() => console.log("success"));
  });
};

navSlide();
onClick();
