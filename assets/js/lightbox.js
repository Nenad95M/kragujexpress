(()=>{
const images=Array.from (document.getElementById('buss-gallery').querySelectorAll('img'));
const lightboxBg=document.getElementById('lightboxBg');
const modalPhoto=document.getElementById('modalPhoto');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const close=document.getElementById('close');

let currentPhoto = 0;
let maxIteration = images.length - 1;


images.forEach((image, i) => {
image.addEventListener('click', (e)=>{
    currentPhoto=i;
    //prilikom klika, dodajemo active klasu koja u css-u daje flex umesto display-none
    lightboxBg.classList.add('active');
    //pravimo privremeni modal element img, dajemo mu sliku koju ima ona na koju smo kliknuli
    modalPhoto.src=image.src;
    //dodajemo mu id gde smo uredili izgled modala u css-u
    console.log(currentPhoto);
});
});

    prev.addEventListener('click', () => {
        currentPhoto = currentPhoto - 1;
        if (currentPhoto <= 0) {
            currentPhoto = maxIteration;
        }
        modalPhoto.src = images[currentPhoto].src;
      
    })

    next.addEventListener('click', () => {
        currentPhoto = currentPhoto + 1;
        if (currentPhoto >= maxIteration) {
            currentPhoto = 0;
        }
        modalPhoto.src = images[currentPhoto].src;

    })

lightboxBg.addEventListener('click', (e)=>{
    if(e.target !== modalPhoto && e.target !== next && e.target !== prev){
        lightboxBg.classList.remove('active');
    }
});
//zatvaranje modala na esc i prelazak na sledecu i prethodnu sliku na strelice
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightboxBg.classList.remove('active');
    }
    if (e.key === 'ArrowRight') {
        currentPhoto = currentPhoto + 1;
        if (currentPhoto >= maxIteration) {
            currentPhoto = 0;
        }
        modalPhoto.src = images[currentPhoto].src;
    }
    if (e.key === 'ArrowLeft') {
        currentPhoto = currentPhoto - 1;
        if (currentPhoto <= 0) {
            currentPhoto = maxIteration;
        }
        modalPhoto.src = images[currentPhoto].src;
    }
});

//uklanjam active klasu kada se klikne bilo gde na pozadinu
close.addEventListener('click', (e)=>{
    lightboxBg.classList.remove('active');
})

})();