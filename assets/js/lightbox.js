(()=>{
const lightboxBg=document.createElement('div');
lightboxBg.id="lightboxBg";
document.body.appendChild(lightboxBg);

const images=Array.from (document.getElementById('buss-gallery').querySelectorAll('img'));
images.forEach(image => {
image.addEventListener('click', (e)=>{
    console.log("?")
    //prilikom klika, dodajemo active klasu koja u css-u daje flex umesto display-none
    lightboxBg.classList.add('active');
    //pravimo privremeni modal element img, dajemo mu sliku koju ima ona na koju smo kliknuli
    const lightboxImg=document.createElement('img');
    lightboxImg.src=image.src;
    //dodajemo mu id gde smo uredili izgled modala u css-u
    lightboxImg.id="lightboxImg";
   
    //postavljamo napravljeni element kao dete
    lightboxBg.appendChild(lightboxImg);
});
});

//uklanjam active klasu kada se klikne bilo gde na pozadinu
lightboxBg.addEventListener('click', (e)=>{
    lightboxBg.classList.remove('active');
 //ako prethodna slika postoji, uklanjamo je 
 if(lightboxBg.firstChild){
    lightboxBg.removeChild(lightboxBg.firstChild);
}
})})();