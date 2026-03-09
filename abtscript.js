/* HERO IMAGE CAROUSEL (ABOUT PAGE) */
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

/* SCROLL FADE-IN */
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
    faders.forEach(fader => fader.classList.add("visible"));
}
