const year= new Date().getFullYear();
document.getElementById('year').textContent=year;

//phone-menu
const navbar=document.getElementById('navbar');
const phoneBtn=document.getElementById('phone-menu').addEventListener('click', ()=>{
  console.log("Sta da radim?")
});



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
