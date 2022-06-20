const mainImg=document.getElementById("mainPhoto");
const leftArrow=document.getElementById("leftArrow");
const rightArrow=document.getElementById("rightArrow");
let currentPhoto=0;
const photos=document.querySelectorAll('[data-img]');
const imgArr=['assets/img/flota/bus2.webp',
 'assets/img/flota/bus3.webp',
  'assets/img/flota/bus4.webp'
  ,'assets/img/flota/bus5.webp'];

for (const img of photos) {
    img.addEventListener('click',()=>{
        mainImg.src=img.src;
        })
}
leftArrow.addEventListener('click',()=>{
    currentPhoto=currentPhoto-1;
    if(currentPhoto<=0){
        currentPhoto=0;
    }
    mainImg.src=imgArr[currentPhoto];

})
rightArrow.addEventListener('click',()=>{
    currentPhoto=currentPhoto+1;
    if(currentPhoto>=3){
        currentPhoto=3;
    }
    mainImg.src=imgArr[currentPhoto];

})
