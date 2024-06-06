let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(n) {
    let previousSlideIndex = slideIndex;

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "slide-in-right", "slide-out-left");
    }

    if (previousSlideIndex !== slideIndex) {
        slides[previousSlideIndex].classList.add("slide-out-left");
        slides[slideIndex].classList.add("active", "slide-in-right");
    }
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add("active");
});
