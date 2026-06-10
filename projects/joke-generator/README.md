# Random Joke Generator 😂

A fun and interactive joke generator that fetches random jokes from an external API and displays them in a beautiful, responsive interface.

## Features 🌟

- ✅ **Fetch Random Jokes** - Get unlimited random jokes from an external API
- ✅ **Multiple Categories** - Filter jokes by category (General, Programming, Knock-Knock)
- ✅ **Share Jokes** - Share jokes with friends via native share or clipboard
- ✅ **Copy to Clipboard** - Easily copy jokes to share
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Joke Counter** - Track how many jokes you've loaded
- ✅ **Loading Animation** - Beautiful spinner while fetching
- ✅ **Keyboard Shortcut** - Press Space to get a new joke
- ✅ **Error Handling** - Graceful error messages

## Technology Stack 🛠️

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: Official Joke API (https://official-joke-api.appspot.com/)
- **Features**: Modern ES6, Async/Await, Fetch API, Web Share API

## APIs Used 🌐

### Primary API: Official Joke API
```
https://official-joke-api.appspot.com/random_joke
```

**Response Format:**
```json
{
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "punchline": "Because he was outstanding in his field!",
  "id": 42
}
```

**Features:**
- No API key required
- Free tier available
- Multiple endpoints
- Fast and reliable

## How to Use 📖

### 1. **Get a Joke**
   - Click the "🎭 Get Joke" button
   - Or press the Space bar
   - Wait for the joke to load

### 2. **Filter by Category**
   - Click category buttons: All Jokes, General, Programming, Knock-Knock
   - Get jokes specific to that category

### 3. **Share a Joke**
   - Click "📤 Share" button
   - Choose how to share (native share or clipboard)
   - Share with friends!

### 4. **Copy a Joke**
   - Click "📋 Copy" button
   - Joke is copied to clipboard
   - Paste anywhere you want

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/anmoly585-byte/Anmol-yadav.git
   cd Anmol-yadav/projects/joke-generator
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct
   open index.html
   
   # Option 2: Local server
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

## File Structure 📁

```
joke-generator/
├── index.html       # Main HTML file
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript logic
└── README.md        # This file
```

## Code Examples 💻

### Fetch a Joke
```javascript
async function fetchFromOfficialAPI() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return {
        text: data.setup + '\n' + data.punchline,
        type: data.type
    };
}
```

### Display Joke
```javascript
function displayJoke(joke) {
    const jokeDisplay = document.getElementById('jokeText');
    jokeDisplay.innerHTML = '<p>' + escapeHtml(joke.text) + '</p>';
}
```

### Share Joke
```javascript
function shareJoke() {
    if (navigator.share) {
        navigator.share({
            title: 'Random Joke',
            text: currentJoke
        });
    }
}
```

## Keyboard Shortcuts ⌨️

- **Space** - Get a new joke

## Browser Compatibility 🌐

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ Not supported |

## API Rate Limits 📊

- Official Joke API: Unlimited (Free tier)
- No authentication required
- No rate limiting for public use

## Future Enhancements 🚀

- [ ] Save favorite jokes
- [ ] Dark mode toggle
- [ ] Multiple language support
- [ ] Joke difficulty ratings
- [ ] User-submitted jokes
- [ ] Daily joke email
- [ ] Joke statistics
- [ ] Offline support (Service Worker)
- [ ] PWA (Progressive Web App)

## Troubleshooting 🔧

### Issue: "Failed to fetch joke"
- **Solution**: Check internet connection
- Check if API is accessible
- Try refreshing the page

### Issue: CORS Error
- **Solution**: Official Joke API has CORS enabled
- If issue persists, check browser console

### Issue: Share button not working
- **Solution**: Native share works on mobile browsers
- Desktop browsers show clipboard copy instead

## Credits 🙏

- **API**: [Official Joke API](https://official-joke-api.appspot.com/)
- **Design**: Custom CSS with modern styling
- **Author**: Anmol Yadav

## License 📜

MIT License - Free to use and modify

## Contact 📧

- GitHub: [@anmoly585-byte](https://github.com/anmoly585-byte)
- Email: anmoly585@gmail.com

---

**Made with ❤️ by Anmol Yadav**

Happy Joking! 😂🎉
