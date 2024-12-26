// script.js
// Add event listeners to the tool slides
const toolSlides = document.querySelectorAll('.tool-slide');

toolSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
        // Add your own functionality here, e.g., open a modal or navigate to a new page
    });
});
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Initialize first testimonial
showTestimonial(currentIndex);
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth',
  });
}

