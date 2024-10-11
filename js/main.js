// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');

    // Regex pattern for a valid email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Clear any previous error messages
        clearErrorMessages();

        // Check if all required fields are filled out
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

        // If the form is invalid, prevent submission
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Contact Form Sent! Response will arrive shortly.");
        }
    });

    // Function to show an error message
    // function showError(input, message) {
    //     const errorElement = document.createElement('span');
    //     errorElement.classList.add('error-message');
    //     errorElement.innerText = message;
    //     input.parentNode.insertBefore(errorElement, input.nextSibling);
    //     input.classList.add('error');  // Optionally style the input on error
    // }

    // // Function to clear all error messages
    // function clearErrorMessages() {
    //     const errorMessages = document.querySelectorAll('.error-message');
    //     errorMessages.forEach(function(error) {
    //         error.remove();
    //     });

    //     // Remove error styling from inputs
    //     const errorInputs = document.querySelectorAll('.error');
    //     errorInputs.forEach(function(input) {
    //         input.classList.remove('error');
    //     });
    // }
});
