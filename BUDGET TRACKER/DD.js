const expenseForm = document.getElementById('expenseForm');
const expensesBody = document.getElementById('expensesBody');
const summaryDiv = document.getElementById('summary');

let expenses = [];

// Listen to the form submission
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (date && category && amount) {
        addExpense(date, category, amount);
        updateExpensesTable();
        updateSummary();
    }
});

// Add an expense to the list
function addExpense(date, category, amount) {
    expenses.push({ date, category, amount });
}

// Update the table with expenses
function updateExpensesTable() {
    expensesBody.innerHTML = '';
    expenses.forEach((expense) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${expense.date}</td><td>${expense.category}</td><td>₹${expense.amount.toFixed(2)}</td>`;
        expensesBody.appendChild(row);
    });
}

// Calculate and update the monthly summary
function updateSummary() {
    const summary = {};
    expenses.forEach((expense) => {
        const month = expense.date.slice(0, 7); // Extract year and month
        if (!summary[month]) {
            summary[month] = {
                food: 0,
                transport: 0,
                entertainment: 0,
                utilities: 0,
                miscellaneous: 0,
                total: 0
            };
        }
        summary[month][expense.category] += expense.amount;
        summary[month].total += expense.amount;
    });

    summaryDiv.innerHTML = ''; // Clear the previous summary
    for (const month in summary) {
        const monthSummary = summary[month];
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        summaryItem.innerHTML = `
            <h3>Month: ${month}</h3>
            <p>Food: ₹${monthSummary.food.toFixed(2)}</p>
            <p>Transport: ₹${monthSummary.transport.toFixed(2)}</p>
            <p>Entertainment: ₹${monthSummary.entertainment.toFixed(2)}</p>
            <p>Utilities: ₹${monthSummary.utilities.toFixed(2)}</p>
            <p>Miscellaneous: ₹${monthSummary.miscellaneous.toFixed(2)}</p>
            <p><strong>Total: ₹${monthSummary.total.toFixed(2)}</strong></p>
        `;
        summaryDiv.appendChild(summaryItem);
    }
    
}
const categorySelect = document.getElementById('category');
const othersInputDiv = document.getElementById('others-input');

categorySelect.addEventListener('change', () => {
    if (categorySelect.value === 'miscellaneous') {
        othersInputDiv.style.display = 'block';
    } else {
        othersInputDiv.style.display = 'none';
    }
});
// Store expense data in localStorage when form is submitted
document.getElementById('expenseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const expenseData = { date, category, amount };
    localStorage.setItem('expenses', JSON.stringify(expenseData));
  });
  
// Store expense data in localStorage when form is submitted
document.getElementById('expenseForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
  const expenseData = { date, category, amount };
  localStorage.setItem('expenses', JSON.stringify(expenseData));
});

// Store expense data in localStorage when form is submitted
document.getElementById('expenseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const expenseData = { date, category, amount };
    localStorage.setItem('expenses', JSON.stringify(expenseData));
  });
  


