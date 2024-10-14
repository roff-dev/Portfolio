//typing animation
var typed = new Typed("#typed", {
    strings: [`C:/Users/Kieron Oates>  npm install Web Developer --skills`],
    typeSpeed: 35,
    startDelay: 500,
    backDelay: 1000,
    backSpeed: 35,
    loop: true,
    
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 

    // Check if the menu is active
    if (navLinks.classList.contains('active')) {
        navLinks.style.height = `${navLinks.scrollHeight}px`; //full content height
    } else {
        navLinks.style.height = '0'; // collapse menu
    }
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        navLinks.style.height = '0'; // click outside collapse menu
    }
});

// load dom
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');

    // email regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // clear error messages
        clearErrorMessages();

        // Check all fields
        if (firstNameInput.value.trim() === "") {
            showError(firstNameInput, "Field required, Do not leave blank.");
            isValid = false;
        }

        if (lastNameInput.value.trim() === "") {
            showError(lastNameInput, "Field required, Do not leave blank.");
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Field required, Do not leave blank.");
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, "Please enter a valid email.");
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, "Field required, Do not leave blank.");
            isValid = false;
        }

        // prevent if invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Contact Form Sent! Response will arrive shortly.");
        }
    });
});
