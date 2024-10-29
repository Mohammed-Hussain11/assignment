let slideIndex = 0;
showSlides(slideIndex);

// Function to navigate slides
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Core function to handle slide display
function showSlides(n) {
    const slides = document.querySelector(".slides");
    const slideItems = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Loop back to first slide if the index exceeds the number of slides
    if (n >= slideItems.length) slideIndex = 0;
    if (n < 0) slideIndex = slideItems.length - 1;

    // Set the transform to slide to the current image
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Reset all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Set the active dot
    dots[slideIndex].classList.add("active");
}
