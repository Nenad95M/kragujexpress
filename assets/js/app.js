const year= new Date().getFullYear();
document.getElementById('year').textContent=year;

//navbar
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset < 100) {
    navbar.classList.remove('transparent');
    console.log(window.pageXOffset)

  } else if (window.pageYOffset > 100)  {
    navbar.classList.add('transparent');
    console.log(window.pageXOffset)
    scrolled = false;
  }
};