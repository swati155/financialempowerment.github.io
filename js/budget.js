document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("budgetModal");
    const openBtn = document.getElementById("openBudgetTool");
    const closeBtn = document.querySelector(".modal .close");
    modal.style.display = "none";
    openBtn.addEventListener("click", () => modal.style.display = "flex");
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    let totalIncome = 0;
    let totalExpenses = 0;

    //  Track Income
    document.getElementById("addIncome").addEventListener("click", function () {
        const income = parseFloat(document.getElementById("incomeInput").value);
        if (!isNaN(income) && income > 0) {
            totalIncome += income;
            updateSummary();
            document.getElementById("incomeInput").value = "";
        } else {
            alert("Please enter a valid income amount!");
        }
    });

    //  Track Expenses
    document.getElementById("addExpense").addEventListener("click", function () {
        const expenseName = document.getElementById("expenseName").value.trim();
        const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

        if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
            totalExpenses += expenseAmount;
            updateSummary();

            //  Show expense in summary
            const expenseList = document.createElement("p");
            expenseList.textContent = `${expenseName}: ₹${expenseAmount}`;
            document.querySelector(".summary").appendChild(expenseList);

            // Clear fields
            document.getElementById("expenseName").value = "";
            document.getElementById("expenseAmount").value = "";
        } else {
            alert("Please enter a valid expense name and amount!");
        }
    });
 //  Set Financial Goals
document.getElementById("addGoal").addEventListener("click", function () {
    const goalInput = document.getElementById("goalInput"); // Input field
    const goal = goalInput.value.trim(); // User input

    if (goal) {
        const goalList = document.getElementById("goalList"); // Goal list
        const goalItem = document.createElement("li"); // New list item
        goalItem.textContent = goal;
        goalList.appendChild(goalItem); // Add goal to list

        goalInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid goal!");
    }
});
    //  Update Summary
    function updateSummary() {
        document.getElementById("totalIncome").textContent = totalIncome;
        document.getElementById("totalExpenses").textContent = totalExpenses;
        document.getElementById("balance").textContent = totalIncome - totalExpenses;
    }
});
