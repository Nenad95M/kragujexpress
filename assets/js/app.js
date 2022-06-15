const year= new Date().getFullYear();
document.getElementById('year').textContent=year;

//phone-menu
function phoneMenu(){
const phoneBtn=document.getElementById('phone-menu');
const verticalMenu=document.getElementById('vertical-menu');

let active;

phoneBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(!active){
  e.target.style.transform='rotate(90deg)';
  verticalMenu.style.display='flex';
 return active=true;
}
if(active){
  e.target.style.transform='rotate(0deg)';
  verticalMenu.style.display='none';
 return active=false;
}}
)}

phoneMenu();
//navbar
let pastScroll = window.pageYOffset;
const navbar=document.getElementById("navbar");
const phoneNavbar=document.getElementById('vertical-menu');
window.onscroll = function () {
  let newScroll = window.pageYOffset;
  if (pastScroll > newScroll) {
    navbar.style.top = "0";
    phoneNavbar.style.top='0';
  } else {
    navbar.style.top = "-200px";
    phoneNavbar.style.top='-1000px';

  }
  pastScroll = newScroll;
};

//Gasimo vertikalni meni prilikom promene velicine ekrana
window.addEventListener("resize", () => {
  const element = document.getElementById("vertical-menu");
  if (window.innerWidth > 650) {
    element.style.display = "none";
  }
});
//prikazujemo za prikaz godina poslovanja firme
const godinePoslovanja= new Date().getFullYear() -1987;
document.getElementById('godinePoslovanja').innerText=godinePoslovanja;
