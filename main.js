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
  const formData = new FormData(e.target);
  var data = {};
  for (var pair of formData.entries()) {
    //formDate.entries é um array de pairs (array de arrays)
    data[pair[0]] = pair[1]; //pair[0] = nome do input  pair[1]= valor do input
  }

  const nomeRegex = /[A-Z][a-z]+* [A-Z][a-z]*/;

  const emailRegex = /\w+@\w+\.\w+/;

  localStorage.setItem("formData", JSON.stringify(data));
}
