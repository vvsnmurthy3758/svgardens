// Function to toggle mobile menu
// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-button');

    navLinks.classList.toggle('show');
    closeButton.style.display = closeButton.style.display === 'none' ? 'block' : 'none';
}

// ... rest of your JavaScript remains unchanged


// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
