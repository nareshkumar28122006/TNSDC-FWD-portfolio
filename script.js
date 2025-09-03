// This script adds smooth scrolling to the navigation links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add more JavaScript here for other features.
// For example, a simple contact form alert.
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from submitting in the traditional way
    
    // Simulate form submission
    alert('Message sent successfully!');

    // You can add code here to actually handle the form data, e.g., send it to an email service.
    // e.g., using fetch() to post the data to a backend server.
    
    // Clear the form fields after submission
    this.reset();
});