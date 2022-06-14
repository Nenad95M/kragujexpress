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
}
}
)

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
