// script.js
// Add event listeners to the tool slides
const toolSlides = document.querySelectorAll('.tool-slide');

toolSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
        // Add your own functionality here, e.g., open a modal or navigate to a new page
    });
});
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
  testimonials[index].style.display = 'none';
  index = (index + 1) % testimonials.length;
  testimonials[index].style.display = 'block';
}, 3000);

