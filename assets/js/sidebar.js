const SidebarModule = (function() {
    const mainImg = document.getElementById("mainPhoto");
    const next = document.querySelectorAll("[data-next]");
    const prev = document.querySelectorAll('[data-prev]');
    const photos = document.querySelectorAll('[data-img]');
    const circles = document.querySelectorAll('.circle');
    let currentPhoto = 0;
    const maxIteration = photos.length - 1;

    mainImg.addEventListener('touchmove', (e) => {
        console.log(e);
    });

    function removeActive(e) {
        e.forEach(element => {
            element.classList.remove('active');
        });
    }

    function addActive(e, i) {
        e[i].classList.add('active');
    }

    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            mainImg.src = photo.src;
            currentPhoto = index;
            removeActive(circles);
            addActive(circles, currentPhoto);
            return currentPhoto = index;
        });
    });

    prev.forEach(button => {
        button.addEventListener('click', () => {
            currentPhoto = currentPhoto - 1;
            if (currentPhoto <= 0) {
                currentPhoto = 0;
            }
            mainImg.src = photos[currentPhoto].src;
            removeActive(circles);
            addActive(circles, currentPhoto);
        });
    });

    next.forEach(button => {
        button.addEventListener('click', () => {
            currentPhoto = currentPhoto + 1;
            if (currentPhoto >= maxIteration) {
                currentPhoto = maxIteration;
            }
            mainImg.src = photos[currentPhoto].src;
            removeActive(circles);
            addActive(circles, currentPhoto);
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentPhoto = currentPhoto - 1;
            if (currentPhoto < 0) {
                currentPhoto = 0;
            }
            mainImg.src = photos[currentPhoto].src;
            removeActive(circles);
            addActive(circles, currentPhoto);
        } else if (e.key === 'ArrowRight') {
            currentPhoto = currentPhoto + 1;
            if (currentPhoto > maxIteration) {
                currentPhoto = maxIteration;
            }
            mainImg.src = photos[currentPhoto].src;
            removeActive(circles);
            addActive(circles, currentPhoto);
        }
    });
 
})();
