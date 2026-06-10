// Registration Page JavaScript

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();
    
    // Validation
    if (fullname === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    if (username.length < 4) {
        alert('Username must be at least 4 characters!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters!');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Check if username already exists (in real app, check with backend)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }
    
    // Create new user
    const newUser = {
        userId: 'USER_' + Date.now(),
        fullname: fullname,
        email: email,
        username: username,
        password: password, // In real app, this should be hashed
        registrationDate: new Date().toLocaleString(),
        accounts: []
    };
    
    // Save user to localStorage
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    console.log('New user registered:', newUser);
    
    alert('Registration successful! Please login with your credentials.');
    window.location.href = 'index.html';
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
