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

onClick();

