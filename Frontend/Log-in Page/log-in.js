// script.js
document.querySelector("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        event.preventDefault();
    }
});
