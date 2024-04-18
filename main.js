const header = document.getElementById("header");

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 15) {
    header.style.backgroundColor = "#39289f";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
