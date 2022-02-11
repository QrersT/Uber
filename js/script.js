function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu__list-item");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
}

hamburgerMenu();
