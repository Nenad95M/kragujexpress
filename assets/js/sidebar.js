const mainImg = document.getElementById("mainPhoto");
const next = document.querySelectorAll("[data-next]");
const prev = document.querySelectorAll('[data-prev]');
const photos = document.querySelectorAll('[data-img]');
let currentPhoto = 0;
let maxIteration = photos.length - 1;

mainImg.addEventListener('touchstart',(e)=>{
    console.log(e)
})

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        mainImg.src = photo.src;
        currentPhoto = index;
        console.log(currentPhoto);
        return currentPhoto = index;
    })
});

prev.forEach(button => {
    button.addEventListener('click', () => {
        currentPhoto = currentPhoto - 1;
        if (currentPhoto <= 0) {
            currentPhoto = 0;
            console.log(currentPhoto);
        }
        mainImg.src = photos[currentPhoto].src;
    })
});

next.forEach(button => {
    button.addEventListener('click', () => {
        currentPhoto = currentPhoto + 1;
        if (currentPhoto >= maxIteration) {
            currentPhoto = maxIteration;
            console.log(currentPhoto);
        }
        mainImg.src = photos[currentPhoto].src;
    })
});

