const header = document.getElementById("header");

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 15) {
    header.style.backgroundColor = "#39289f";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

function sendFormData(e) {
  e.preventDefault();
  const formData = new FormData(e.target); // instanciando formData passando o formulario
  var data = {};
  for (var pair of formData.entries()) {
    // formDate.entries é um array de [nomeInput, valorInput] (array de arrays)
    data[pair[0]] = pair[1]; //pair[0] = nome do input  pair[1]= valor do input
  }

  const nomeRegex = /[A-Z][a-z]*/;

  const emailRegex = /\w+@\w+\.\w+/;

  const errorText = document.getElementById("soloEmailError");
  if (data.soloEmail) {
    errorText.style.display = "inherit";
    if (emailRegex.test(data.soloEmail)) {
      localStorage.setItem("soloEmail", JSON.stringify(data));
      errorText.innerHTML = "E-mail sent sucessfully.";
      errorText.style.color = "white";
      setTimeout(() => {
        errorText.style.display = "none";
      }, 3000);
    } else {
      errorText.innerHTML = "Invalid e-mail.";
      errorText.style.color = "#ff5656";
    }
    return;
  } else {
    errorText.style.display = "none";
  }

  var liberado = true;

  const firstNameError = document.getElementById("firstNameError");
  if (!nomeRegex.test(data.firstName)) {
    firstNameError.style.display = "inherit";
    firstNameError.style.color = "#ff5656";
    liberado = false;
  } else {
    firstNameError.style.display = "none";
  }

  const lastNameError = document.getElementById("lastNameError");
  if (!nomeRegex.test(data.lastName)) {
    lastNameError.style.display = "inherit";
    lastNameError.style.color = "#ff5656";
    liberado = false;
  } else {
    lastNameError.style.display = "none";
  }

  const emailError = document.getElementById("emailError");
  if (!emailRegex.test(data.email)) {
    emailError.style.display = "inherit";
    emailError.style.color = "#ff5656";
    liberado = false;
  } else {
    emailError.style.display = "none";
  }

  const messageError = document.getElementById("messageError");
  if (data.message.length < 20 || data.message.length > 300) {
    messageError.style.display = "inherit";
    messageError.style.color = "#ff5656";
    liberado = false;
  } else {
    messageError.style.display = "none";
  }

  if (liberado) {
    localStorage.setItem("formData", JSON.stringify(data));
    const sucessSent = document.getElementById("sucessSent");
    sucessSent.style.display = "inherit";
    sucessSent.style.color = "white";
    setTimeout(() => {
      sucessSent.style.display = "none";
    }, 3000);
  }
}
