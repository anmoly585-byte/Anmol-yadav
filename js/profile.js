// Profile Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
    loadProfileData();
    setupProfileForm();
    setupPasswordForm();
});

function checkUserLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
    }
}

function loadProfileData() {
    // Load profile data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    
    if (profileData) {
        document.getElementById('fullname').value = profileData.fullname || '';
        document.getElementById('email').value = profileData.email || '';
        document.getElementById('phone').value = profileData.phone || '';
        document.getElementById('address').value = profileData.address || '';
    }
}

function setupProfileForm() {
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const profileData = {
            fullname: document.getElementById('fullname').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim()
        };
        
        // Validation
        if (!profileData.fullname || !profileData.email || !profileData.phone) {
            alert('Please fill in all required fields!');
            return;
        }
        
        if (!isValidEmail(profileData.email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // Save to localStorage
        localStorage.setItem('profileData', JSON.stringify(profileData));
        
        alert('Profile updated successfully!');
        console.log('Profile updated:', profileData);
    });
}

function setupPasswordForm() {
    document.getElementById('passwordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const oldPassword = document.getElementById('old_password').value;
        const newPassword = document.getElementById('new_password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        
        // Validation
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert('Please fill in all password fields!');
            return;
        }
        
        if (newPassword.length < 6) {
            alert('New password must be at least 6 characters!');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        
        if (oldPassword === newPassword) {
            alert('New password must be different from old password!');
            return;
        }
        
        // In real app, verify old password with backend
        alert('Password changed successfully!');
        
        // Reset form
        document.getElementById('passwordForm').reset();
        console.log('Password changed at:', new Date().toLocaleString());
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Security settings (optional)
function enableTwoFactor() {
    alert('Two-Factor Authentication setup started');
    // Implement 2FA logic
}

function updateSecuritySettings() {
    alert('Security settings updated!');
}
