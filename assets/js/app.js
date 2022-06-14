const year= new Date().getFullYear();
document.getElementById('year').textContent=year;

//phone-menu
function phoneMenu(){
const navbar=document.getElementById('navbar');
const phoneBtn=document.getElementById('phone-menu');

let active;

phoneBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(!active){
  e.target.style.transform=' rotate(35deg)';
  active=true;
}
else{
  e.target.style.transform=' rotate(0deg)';
  active=false;
}
}
)
if (active){

}
}
phoneMenu();
//navbar
let pastScroll = window.pageYOffset;
window.onscroll = function () {
  let newScroll = window.pageYOffset;
  if (pastScroll > newScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  pastScroll = newScroll;
};

const godinePoslovanja= new Date().getFullYear() -1987;
document.getElementById('godinePoslovanja').innerText=godinePoslovanja;
