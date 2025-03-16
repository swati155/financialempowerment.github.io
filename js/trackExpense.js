document.addEventListener("DOMContentLoaded", function () {
    const expenseTracker = document.getElementById("expenseTracker");
    const showExpenseBtn = document.getElementById("showExpenseTracker");
    const closeExpenseBtn = document.querySelector(".close-expense");

    // Show Expense Tracker When Clicking "Track Expense" Button
    showExpenseBtn.addEventListener("click", function () {
        expenseTracker.classList.remove("hidden");
    });

    // Hide Expense Tracker When Clicking Close Button (❌)
    closeExpenseBtn.addEventListener("click", function () {
        expenseTracker.classList.add("hidden");
    });

    // Add Expense Logic
    document.getElementById("addExpense").addEventListener("click", function () {
        const expenseName = document.getElementById("expenseName").value;
        const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
        const totalExpensesElement = document.getElementById("totalExpenses");

        if (expenseName.trim() === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter a valid expense name and amount!");
            return;
        }

        const expenseList = document.getElementById("expenseList");

        // Create Expense Item
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerHTML = `
            <span class="expense-name">${expenseName}</span>
            <span class="expense-amount">₹${expenseAmount}</span>
        `;

        expenseList.appendChild(expenseItem);

        // Update Total Expenses
        const currentTotal = parseFloat(totalExpensesElement.textContent.replace("₹", "")) || 0;
        totalExpensesElement.textContent = `₹${currentTotal + expenseAmount}`;

        // Clear Inputs
        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";
    });
});
