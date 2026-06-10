// Transaction History JavaScript

document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
    loadTransactionHistory();
});

function checkUserLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
    }
}

function loadTransactionHistory() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionBody = document.getElementById('transactionBody');
    
    if (transactions.length === 0) {
        transactionBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No transactions found</td></tr>';
        return;
    }
    
    // Sort transactions by date (newest first)
    transactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Display transactions
    transactionBody.innerHTML = transactions.map(txn => `
        <tr>
            <td>${new Date(txn.timestamp).toLocaleString()}</td>
            <td><span class="badge ${txn.type.toLowerCase()}">${txn.type}</span></td>
            <td>${txn.fromAccount}</td>
            <td>${txn.toAccount}</td>
            <td>₹${txn.amount.toFixed(2)}</td>
            <td><span class="status-${txn.status.toLowerCase()}">${txn.status}</span></td>
        </tr>
    `).join('');
}

// Filter functionality
document.querySelector('.filter-section').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const dateFilter = document.getElementById('filterDate').value;
        const typeFilter = document.getElementById('filterType').value;
        
        filterTransactions(dateFilter, typeFilter);
    }
});

function filterTransactions(date, type) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // Filter by date
    if (date) {
        transactions = transactions.filter(txn => {
            const txnDate = new Date(txn.timestamp).toLocaleDateString();
            const filterDate = new Date(date).toLocaleDateString();
            return txnDate === filterDate;
        });
    }
    
    // Filter by type
    if (type) {
        transactions = transactions.filter(txn => txn.type === type);
    }
    
    // Display filtered results
    const transactionBody = document.getElementById('transactionBody');
    if (transactions.length === 0) {
        transactionBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No transactions match your filters</td></tr>';
        return;
    }
    
    transactionBody.innerHTML = transactions.map(txn => `
        <tr>
            <td>${new Date(txn.timestamp).toLocaleString()}</td>
            <td><span class="badge ${txn.type.toLowerCase()}">${txn.type}</span></td>
            <td>${txn.fromAccount}</td>
            <td>${txn.toAccount}</td>
            <td>₹${txn.amount.toFixed(2)}</td>
            <td><span class="status-${txn.status.toLowerCase()}">${txn.status}</span></td>
        </tr>
    `).join('');
}

// Export transaction history (optional feature)
function exportTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const csvContent = 'Date,Type,From,To,Amount,Status\n' + 
        transactions.map(t => `${t.timestamp},${t.type},${t.fromAccount},${t.toAccount},${t.amount},${t.status}`).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
}
