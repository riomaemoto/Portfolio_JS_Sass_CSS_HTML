emailjs.init("REACT_APP_USER_ID");
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
      .send("REACT_APP_SERVICE_ID", "REACT_APP_TEMPLATE_ID", templateVariables)
      .then(() => console.log("success"));
  });
};

onClick();

