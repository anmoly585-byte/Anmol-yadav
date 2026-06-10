// Transfer Money JavaScript

document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
    setupTransferForm();
});

function checkUserLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
    }
}

function setupTransferForm() {
    document.getElementById('transferForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fromAccount = document.getElementById('from_account').value;
        const toAccount = document.getElementById('to_account').value.trim();
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value.trim();
        
        // Validation
        if (!fromAccount) {
            alert('Please select a source account!');
            return;
        }
        
        if (toAccount === '') {
            alert('Please enter recipient account number!');
            return;
        }
        
        if (toAccount === fromAccount) {
            alert('Cannot transfer to the same account!');
            return;
        }
        
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount!');
            return;
        }
        
        if (amount > 100000) {
            alert('Amount cannot exceed ₹100,000 per transaction!');
            return;
        }
        
        // Process transfer
        processTransfer(fromAccount, toAccount, amount, description);
    });
}

function processTransfer(fromAccount, toAccount, amount, description) {
    // Simulate API call
    console.log('Processing transfer:', {
        from: fromAccount,
        to: toAccount,
        amount: amount,
        description: description,
        timestamp: new Date().toLocaleString()
    });
    
    // Create transaction record
    const transaction = {
        transactionId: 'TXN_' + Date.now(),
        fromAccount: fromAccount,
        toAccount: toAccount,
        amount: amount,
        type: 'Transfer',
        description: description,
        status: 'Success',
        timestamp: new Date().toLocaleString()
    };
    
    // Save to localStorage
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Show success message
    alert(`Transfer of ₹${amount} to ${toAccount} successful!\nTransaction ID: ${transaction.transactionId}`);
    
    // Reset form
    document.getElementById('transferForm').reset();
    
    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
}

// Add OTP verification feature (optional)
function sendOTP(accountNumber) {
    console.log('OTP sent to registered mobile for account: ' + accountNumber);
    // In real app, this would trigger a backend API
}

// Amount input validation
const amountInput = document.getElementById('amount');
if (amountInput) {
    amountInput.addEventListener('input', function() {
        if (this.value < 0) {
            this.value = 0;
        }
    });
}
