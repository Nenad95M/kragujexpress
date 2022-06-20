const mainImg = document.getElementById("mainPhoto");
const next = document.querySelectorAll("[data-next]");
const prev = document.querySelectorAll('[data-prev]');
const photos = document.querySelectorAll('[data-img]');


let currentPhoto = 0;

const imgArr = ['assets/img/flota/bus2.webp',
    'assets/img/flota/bus3.webp',
    'assets/img/flota/bus4.webp'
    , 'assets/img/flota/bus5.webp'];

for (const img of photos) {
    img.addEventListener('click', () => {
        mainImg.src = img.src;
    })
}

prev.forEach(button => {
   button.addEventListener('click', () => {
    currentPhoto = currentPhoto - 1;
    if (currentPhoto <= 0) {
        currentPhoto = 0;
    }
    mainImg.src = imgArr[currentPhoto];

})
});

next.forEach(button => {
    button.addEventListener('click', () => {
        currentPhoto = currentPhoto + 1;
        if (currentPhoto >= 3) {
            currentPhoto = 3;
        }
     mainImg.src = imgArr[currentPhoto];
 
 })
 });

