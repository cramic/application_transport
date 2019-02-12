window.onload = function (e) {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  let hero = document.getElementById("hero");


  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.classList.toggle("active");
    hero.classList.toggle("active");
  });

  mainNav.addEventListener("click", function () {
    this.classList.remove("active")
    navBarToggle.classList.remove("active")
    hero.classList.remove("active")
  });

}
