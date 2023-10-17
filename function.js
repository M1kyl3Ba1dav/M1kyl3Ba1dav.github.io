// JavaScript code for a basic space exploration website

// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
