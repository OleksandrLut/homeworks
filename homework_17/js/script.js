
document.addEventListener("click", function (e) {
   const targetElement = e.target;

   if (targetElement.closest('.header__burger-icon')) {
      document.documentElement.classList.toggle('header__menu-open')
      e.preventDefault();
   }

})