(() => {
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
  //prikazujemo za prikaz godina poslovanja firme
  const godinePoslovanja = year - 1987;
  document.getElementById('godinePoslovanja').innerText = godinePoslovanja;
})();

//phone-menu
(() => {

  const phoneBtn = document.getElementById('phone-menu');
  const verticalMenu = document.getElementById('vertical-menu');

  let active=false;

  phoneBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if (!active) {
      e.target.style.transform = 'rotate(90deg)';
      verticalMenu.style.display = 'flex';
      verticalMenu.style.top=0;
      return active = true;
    }
    if (active) {
      e.target.style.transform = 'rotate(0deg)';
      verticalMenu.style.display = 'none';
      return active = false;
    }
  }
  )

})();


//navbar

(() => {

  let pastScroll = window.scrollY;
  const navbar = document.getElementById("navbar");
  const phoneNavbar = document.getElementById('vertical-menu');

  window.onscroll = function () {
    let newScroll = window.scrollY;
    if (pastScroll > newScroll) {
      navbar.style.top = 0;
      phoneNavbar.style.top = 0;
    } else {
      navbar.style.top = '-1000px';
      phoneNavbar.style.top = '-1000px';
    }
    pastScroll = newScroll;
  };
})();

//Gasimo vertikalni meni prilikom promene velicine ekrana
(() => {
  window.addEventListener("resize", () => {
    const element = document.getElementById("vertical-menu");
    if (window.innerWidth > 650) {
      element.style.display = "none";
    }
  });
})();


