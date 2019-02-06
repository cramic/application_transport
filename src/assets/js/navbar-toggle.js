window.onload = function (e) {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.classList.toggle("active");
  });

}
