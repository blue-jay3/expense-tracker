function addMoney() {
    searchBar = document.getElementById('search-bar');
    searchValue = searchBar.value;

    expenseList = document.getElementById('expense-list');

    expenseItem = document.createElement("li");
    expenseItem.className = 'expense-item';

    expenseItem.innerHTML = searchValue

    expenseList.appendChild(expenseItem);
}

function subtractMoney() {

}