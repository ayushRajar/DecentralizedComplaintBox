// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const userLoginBtn = document.getElementById('user-login');
    const adminLoginBtn = document.getElementById('admin-login');
    const loginForm = document.getElementById('login-form');

    userLoginBtn.addEventListener('click', function() {
        userLoginBtn.classList.add('active');
        adminLoginBtn.classList.remove('active');
        loginForm.setAttribute('data-login-type', 'user');
    });

    adminLoginBtn.addEventListener('click', function() {
        adminLoginBtn.classList.add('active');
        userLoginBtn.classList.remove('active');
        loginForm.setAttribute('data-login-type', 'admin');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginType = loginForm.getAttribute('data-login-type');
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log(`Login Type: ${loginType}, Email: ${email}, Password: ${password}`);
        // Here you can add AJAX call to submit the form data to the server
    });
});
