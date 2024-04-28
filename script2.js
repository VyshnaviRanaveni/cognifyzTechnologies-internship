document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("myForm");
    const successMessage = document.getElementById("successMessage");
    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
     document.querySelectorAll(".error").forEach(error => error.textContent = "");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        let isValid = true;
        if (name.value
        .trim() === "") {
            document.getElementById("nameError").textContent = "Name is required";
            isValid = false;
        }
        if (email.value.trim() === "") {
            document.getElementById("emailError").textContent = "Email is required";
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            document.getElementById("emailError").textContent = "Please enter a valid email address";
            isValid = false;
        }
        if (message.value.trim() === "") {
            document.getElementById("messageError").textContent = "Message is required";
            isValid = false;
        }
        if (isValid) { 
            myForm.reset();
            successMessage.classList.remove("hidden");
        }
    });
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
