const tog = document.querySelector(".fa-solid");
const nav = document.querySelector("ul");
tog.addEventListener("click", () => {
  if (nav.style.left == "-200px") {
    nav.style.left = 0;
  } else {
    nav.style.left = "-200px";
  }
});
