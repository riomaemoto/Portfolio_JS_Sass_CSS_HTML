emailjs.init("H-iXD6JCsR5Tqlncl");
const onClick = () => {
  const element = document.querySelector(".pushTheButton");

  // send mail
  element.addEventListener("click", () => {
    const inputName = document.querySelector("#inputName").value;
    const inputEmail = document.querySelector("#inputEmail").value;
    const inputContents = document.querySelector("#inputContents").value;

    const templateVariables = {
      email: inputEmail,
      to_name: "leo",
      from_name: inputName,
      contents: inputContents,
    };
    emailjs
      .send("service_ni3z47a", "template_qt15ukd", templateVariables)
      .then(() => console.log("success"));
  });
};

onClick();

