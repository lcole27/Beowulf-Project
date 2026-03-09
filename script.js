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

/* SAFE HERO CAROUSEL */
const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {
    let slideIndex = 0;
    slides[slideIndex].classList.add("active");

    setInterval(() => {
        slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add("active");
    }, 4000);
}

/* SAFE SCROLL ANIMATIONS */
const faders = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    faders.forEach(fader => appearOnScroll.observe(fader));
} else {
    /* Fallback if browser old */
    faders.forEach(fader => fader.classList.add("visible"));
}
