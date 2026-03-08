const images = document.querySelectorAll(".carousel-images img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

/* Hero Carousel */
const slides = document.querySelectorAll(".hero-slide");
let slideIndex = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}
setInterval(showSlides, 4000);

/* Scroll Fade Animation */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
