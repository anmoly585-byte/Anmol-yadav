// Joke Generator JavaScript

let currentJoke = '';
let jokeCount = 0;
let selectedCategory = 'any';

// Fetch from Official Joke API (No key required)
async function getJoke() {
    const jokeDisplay = document.getElementById('jokeText');
    const jokeType = document.getElementById('jokeType');
    const loading = document.getElementById('loading');
    const getJokeBtn = document.getElementById('getJokeBtn');
    
    // Show loading
    loading.style.display = 'flex';
    jokeDisplay.style.opacity = '0.5';
    getJokeBtn.disabled = true;
    
    try {
        let joke = await fetchFromOfficialAPI();
        
        if (joke) {
            displayJoke(joke);
        } else {
            showError('Failed to fetch joke');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Unable to fetch joke. Please try again!');
    } finally {
        loading.style.display = 'none';
        jokeDisplay.style.opacity = '1';
        getJokeBtn.disabled = false;
    }
}

// Fetch from Official Joke API (No key required)
async function fetchFromOfficialAPI() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        
        const data = await response.json();
        
        // Format the response
        return {
            text: data.setup + '\n\n' + data.punchline,
            type: data.type || 'general',
            setup: data.setup,
            punchline: data.punchline
        };
    } catch (error) {
        console.error('Error fetching from Official API:', error);
        return null;
    }
}

// Display joke
function displayJoke(joke) {
    const jokeDisplay = document.getElementById('jokeText');
    const jokeTypeDisplay = document.getElementById('jokeType');
    
    currentJoke = joke.text || (joke.setup + '\n' + joke.punchline);
    
    jokeDisplay.innerHTML = '<p>' + escapeHtml(currentJoke) + '</p>';
    jokeTypeDisplay.textContent = joke.type || 'general';
    
    jokeCount++;
    document.getElementById('jokeCount').textContent = jokeCount;
    
    // Add animation
    jokeDisplay.style.animation = 'none';
    setTimeout(function() {
        jokeDisplay.style.animation = 'slideUp 0.5s ease';
    }, 10);
}

// Show error message
function showError(message) {
    const jokeDisplay = document.getElementById('jokeText');
    jokeDisplay.innerHTML = '<p style="color: #e74c3c;">' + message + '</p>';
}

// Set category
function setCategory(category) {
    selectedCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Share joke
function shareJoke() {
    if (!currentJoke) {
        alert('Please get a joke first!');
        return;
    }
    
    const text = 'Check out this joke: ' + currentJoke;
    
    if (navigator.share) {
        navigator.share({
            title: 'Random Joke',
            text: text
        }).catch(function(err) {
            console.log('Share cancelled');
        });
    } else {
        copyToClipboard(text);
        alert('Joke copied to clipboard! Share it with others.');
    }
}

// Copy joke to clipboard
function copyJoke() {
    if (!currentJoke) {
        alert('Please get a joke first!');
        return;
    }
    
    copyToClipboard(currentJoke);
}

// Copy to clipboard helper
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopyNotification();
        }).catch(function(err) {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

// Fallback copy for older browsers
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopyNotification();
}

// Show copy notification
function showCopyNotification() {
    const notification = document.createElement('div');
    notification.textContent = '✓ Copied to clipboard!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #51cf66;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.remove();
    }, 2000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Load initial joke on page load
document.addEventListener('DOMContentLoaded', function() {
    getJoke();
});

// Add keyboard shortcut (Space to get joke)
document.addEventListener('keypress', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        getJoke();
    }
});
