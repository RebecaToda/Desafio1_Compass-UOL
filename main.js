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
  var formData = new FormData(e.target);
  var data = {};
  for (var pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }
  localStorage.setItem("formData", JSON.stringify(data));
}

function set