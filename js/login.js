// Login Page JavaScript

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validation
    if (username === '' || password === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters!');
        return;
    }
    
    // Simulate login (In real app, this would be a backend call)
    console.log('Login attempt:', { username, password });
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify({
        username: username,
        loginTime: new Date().toLocaleString()
    }));
    
    // Show success message and redirect
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
});

// Add eye icon to show/hide password
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// You can add more features here like:
// - Password show/hide toggle
// - Remember me functionality
// - Forgot password link
