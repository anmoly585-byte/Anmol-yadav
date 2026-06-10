# Online Banking System

A comprehensive web-based online banking application built with **HTML5, CSS3, Java, and JavaScript**.

## 🎯 Features

### User Management
- ✅ User Registration & Login
- ✅ Secure Password Handling
- ✅ Profile Management
- ✅ Change Password Functionality

### Account Operations
- ✅ Multiple Account Support (Savings, Current)
- ✅ Real-time Balance Display
- ✅ Account Details View
- ✅ Account Status Management

### Money Transfer
- ✅ Transfer Between Own Accounts
- ✅ Transfer to Other Accounts
- ✅ Transaction Description
- ✅ Amount Validation (Max ₹100,000/transaction)
- ✅ Transfer Confirmation

### Transaction Management
- ✅ Deposit Money
- ✅ Withdraw Money
- ✅ Complete Transaction History
- ✅ Filter by Date & Type
- ✅ Transaction Status Tracking
- ✅ Export Transactions (CSV)

### Security
- ✅ Secure Login System
- ✅ Session Management
- ✅ Input Validation
- ✅ Account Balance Verification
- ✅ Transaction Limits

## 📁 Project Structure

```
Anmol-yadav/
├── src/
│   ├── User.java                 # User class with properties
│   ├── Account.java              # Account management class
│   ├── Transaction.java          # Transaction tracking class
│   └── BankingService.java       # Business logic layer
│
├── web/
│   ├── index.html                # Login page
│   ├── register.html             # Registration page
│   ├── dashboard.html            # User dashboard
│   ├── transfer.html             # Money transfer page
│   ├── history.html              # Transaction history
│   └── profile.html              # User profile page
│
├── css/
│   ├── style.css                 # Main styling
│   └── responsive.css            # Mobile responsive design
│
├── js/
│   ├── login.js                  # Login functionality
│   ├── register.js               # Registration logic
│   ├── dashboard.js              # Dashboard features
│   ├── transfer.js               # Transfer functionality
│   ├── history.js                # History management
│   └── profile.js                # Profile management
│
└── README.md                      # This file
```

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Backend** | Java (Core Java) |
| **Database** | SQLite/MySQL (for production) |
| **Storage** | LocalStorage (frontend) |
| **UI Framework** | Custom CSS (No framework) |
| **Responsive Design** | Mobile-first approach |

## 🚀 Getting Started

### Prerequisites
- Java 8 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code, IntelliJ IDEA, Eclipse)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anmoly585-byte/Anmol-yadav.git
   cd Anmol-yadav
   ```

2. **Compile Java files** (Optional for frontend-only testing)
   ```bash
   cd src
   javac *.java
   ```

3. **Open in browser**
   - Open `web/index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`
   - Then visit: `http://localhost:8000/web/index.html`

## 📖 How to Use

### 1. **Registration**
   - Click "Register here" on login page
   - Fill in full name, email, username, and password
   - Click "Register" button
   - Redirected to login page

### 2. **Login**
   - Enter username and password
   - Click "Login" button
   - Access dashboard

### 3. **Dashboard**
   - View all your accounts
   - Check account balances
   - Access quick action buttons
   - View account details

### 4. **Transfer Money**
   - Click "Transfer Money" button
   - Select source account
   - Enter recipient account number
   - Enter amount
   - Add optional description
   - Click "Transfer Money" button
   - Confirmation message with Transaction ID

### 5. **View History**
   - Click "View History" in navigation
   - See all transactions
   - Filter by date or transaction type
   - View transaction details
   - Export as CSV

### 6. **Manage Profile**
   - Click "Profile" in navigation
   - Update personal information
   - Change password
   - View security settings

### 7. **Logout**
   - Click "Logout" button
   - Redirected to login page

## 🔒 Security Features

- **Password Validation**: Minimum 6 characters
- **Email Validation**: Proper email format check
- **Account Verification**: Transfer to own account prevention
- **Transaction Limits**: Max ₹100,000 per transaction
- **Session Management**: Auto-login verification
- **Input Sanitization**: All inputs are trimmed and validated
- **Balance Verification**: Sufficient balance check before withdrawal

## 🎨 UI/UX Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Gradient backgrounds and smooth animations
- **User Feedback**: Toast notifications for all actions
- **Dark Mode Support**: Automatic dark mode detection
- **Accessibility**: Proper semantic HTML
- **Print Support**: Transaction history can be printed

## 📊 Java Classes Details

### **User Class**
```java
- userId
- username
- password
- email
- fullName
- phoneNumber
- address
- createdDate
```

### **Account Class**
```java
- accountNumber
- userId
- accountType (Saving, Current)
- balance
- createdDate
- accountStatus (Active, Inactive)

Methods:
- deposit(amount)
- withdraw(amount)
- transfer(recipientAccount, amount)
```

### **Transaction Class**
```java
- transactionId
- fromAccount
- toAccount
- amount
- transactionType (Deposit, Withdrawal, Transfer)
- transactionDate
- description
- status (Success, Failed, Pending)
```

### **BankingService Class**
```java
Methods:
- registerUser()
- loginUser()
- createAccount()
- getBalance()
- deposit()
- withdraw()
- transferMoney()
- getTransactionHistory()
```

## 🧪 Testing

### Test Credentials
```
Username: demo
Password: demo123
Email: demo@banking.com
Full Name: Demo User
```

### Test Transactions
- Deposit: ₹10,000
- Withdraw: ₹2,500
- Transfer: ₹5,000 to another account

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1200px
- **Large Desktop**: > 1200px

## 🔄 Data Storage

Currently uses `localStorage` for demo purposes:
- Users: `localStorage['users']`
- Transactions: `localStorage['transactions']`
- Current User: `localStorage['currentUser']`
- Profile Data: `localStorage['profileData']`

**For production**: Replace with backend database (MySQL, PostgreSQL, MongoDB)

## 🚦 Future Enhancements

- [ ] Backend API Integration (Node.js/Express)
- [ ] Database Integration (MySQL/MongoDB)
- [ ] Two-Factor Authentication (2FA)
- [ ] Email Notifications
- [ ] Mobile App (React Native)
- [ ] Advanced Analytics
- [ ] Loan Management
- [ ] Investment Options
- [ ] Bill Payment
- [ ] QR Code Transfers
- [ ] Blockchain Integration
- [ ] AI Fraud Detection

## 🐛 Known Issues

- LocalStorage data persists across sessions (clear manually if needed)
- No backend encryption (add for production)
- Transaction history not persistent after browser cache clear

## 📝 License

MIT License - Feel free to use and modify

## 👨‍💻 Author

**Anmol Yadav**
- GitHub: [@anmoly585-byte](https://github.com/anmoly585-byte)
- Email: anmoly585@gmail.com

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, issues, or suggestions:
- Open an issue on GitHub
- Email: anmoly585@gmail.com
- Check existing issues for solutions

## 📚 References

- [MDN Web Docs](https://developer.mozilla.org/)
- [Java Documentation](https://docs.oracle.com/javase/)
- [W3C HTML Standards](https://www.w3.org/html/)
- [CSS Tricks](https://css-tricks.com/)

---

**Happy Banking! 🏦💳**

*Last Updated: June 2026*
