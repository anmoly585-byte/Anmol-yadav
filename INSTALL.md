# Banking System - Installation Guide

## System Requirements

- **OS**: Windows, macOS, or Linux
- **Java Version**: JDK 8 or higher
- **Browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **RAM**: Minimum 2GB
- **Storage**: 100MB

## Step-by-Step Installation

### 1. Install Java

**For Windows:**
```bash
# Download from https://www.oracle.com/java/technologies/downloads/
# Run the installer and follow instructions
java -version  # Verify installation
```

**For macOS:**
```bash
brew install openjdk@11
java -version
```

**For Linux:**
```bash
sudo apt-get install openjdk-11-jdk
java -version
```

### 2. Clone Repository

```bash
git clone https://github.com/anmoly585-byte/Anmol-yadav.git
cd Anmol-yadav
```

### 3. Compile Java Files

```bash
cd src
javac User.java Account.java Transaction.java BankingService.java
cd ..
```

### 4. Start Local Server

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (if installed):**
```bash
npx http-server
```

### 5. Open in Browser

```
http://localhost:8000/web/index.html
```

## Configuration

### Database Setup (Optional)

For production with MySQL:

```sql
-- Create database
CREATE DATABASE banking_system;
USE banking_system;

-- Create users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create accounts table
CREATE TABLE accounts (
    account_number VARCHAR(20) PRIMARY KEY,
    user_id INT NOT NULL,
    account_type VARCHAR(50),
    balance DECIMAL(10, 2),
    created_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create transactions table
CREATE TABLE transactions (
    transaction_id VARCHAR(50) PRIMARY KEY,
    from_account VARCHAR(20),
    to_account VARCHAR(20),
    amount DECIMAL(10, 2),
    transaction_type VARCHAR(50),
    transaction_date TIMESTAMP,
    status VARCHAR(50)
);
```

## Troubleshooting

### Issue: Java not found
```bash
# Solution: Add Java to PATH
# Windows: Set JAVA_HOME environment variable
# Linux/Mac: export JAVA_HOME=/path/to/java
```

### Issue: Port 8000 already in use
```bash
# Use different port
python -m http.server 8001
```

### Issue: CORS errors
```bash
# Ensure you're accessing via localhost, not file://
```

## Verification

1. Open browser console (F12)
2. Check for any JavaScript errors
3. Verify localStorage is enabled
4. Test registration and login

## Next Steps

1. Create user account
2. Explore dashboard
3. Test money transfer
4. Check transaction history
5. Update profile

## Need Help?

- Check README.md for detailed documentation
- Review JavaScript console for errors (F12)
- Ensure all files are in correct directories
- Verify Java compilation was successful
