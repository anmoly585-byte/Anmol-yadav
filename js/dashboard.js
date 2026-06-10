// Dashboard JavaScript

// Load user data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
});

function loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Redirect to login if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Display user name
    document.getElementById('userName').textContent = currentUser.username || 'User';
    
    // You can load more user data here
    console.log('User logged in:', currentUser);
}

// Handle account card clicks
const accountCards = document.querySelectorAll('.account-card');
accountCards.forEach(card => {
    card.addEventListener('click', function() {
        const accountType = this.querySelector('h3').textContent;
        const accountNumber = this.querySelector('.account-number').textContent;
        alert('Viewing details for: ' + accountType + '\n' + accountNumber);
    });
});

// Add logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

// Add real-time balance updates
function updateBalance(accountNumber, newBalance) {
    // This would typically come from a backend API
    console.log('Balance updated for account ' + accountNumber + ': ' + newBalance);
}

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#ff6b6b' : type === 'success' ? '#51cf66' : '#4dabf7'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
