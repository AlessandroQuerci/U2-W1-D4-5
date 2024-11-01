window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navBtn = header.querySelector("button");
  const hero = document.querySelector(".hero");

  const altezzaHero = hero.offsetHeight;

  if (window.scrollY > altezzaHero) {
    header.classList.add("scrolled");
    navBtn.classList.add("scrolledBtn");
  } else {
    header.classList.remove("scrolled");
    navBtn.classList.remove("scrolledBtn");
  }
});
