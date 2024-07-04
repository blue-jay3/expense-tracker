function addMoney() {
    searchBar = document.getElementById('search-bar')
    searchValue = searchBar.value

    if(searchBar.value == NaN || searchBar.value.trim() == "" || isNaN(searchBar.value)) {
        return
    }

    expenseList = document.getElementById('expense-list')

    expenseItem = document.createElement("li")
    removeIcon = document.createElement("i")
    removeIcon.classList.add('bx')
    removeIcon.classList.add('bx-trash')
    removeIcon.onclick = function() {this.parentNode.remove(); updateTotal(parseFloat(this.parentNode.innerHTML)*-1);}
    expenseItem.className = 'add-expense-item'

    expenseItem.innerHTML = searchValue
    expenseItem.appendChild(removeIcon)
    updateTotal(parseFloat(searchValue))

    expenseList.appendChild(expenseItem)
    searchBar.value = ""
}

function subtractMoney() {
    searchBar = document.getElementById('search-bar')
    searchValue = searchBar.value

    if(searchBar.value == NaN || searchBar.value.trim() == "" || isNaN(searchBar.value)) {
        return
    }

    expenseList = document.getElementById('expense-list')

    expenseItem = document.createElement("li")
    removeIcon = document.createElement("i")
    removeIcon.classList.add('bx')
    removeIcon.classList.add('bx-trash')
    removeIcon.onclick = function() {this.parentNode.remove(); updateTotal(parseFloat(this.parentNode.innerHTML));}
    expenseItem.className = 'subtract-expense-item'

    expenseItem.innerHTML = searchValue
    expenseItem.appendChild(removeIcon)
    updateTotal(parseFloat(searchValue*-1))

    expenseList.appendChild(expenseItem)
    searchBar.value = ""
}

function updateTotal(expense) {
    totalText = document.getElementById('display-total')
    currentTotal = totalText.innerHTML.slice(1)
    totalText.innerHTML = "$" + String(parseFloat(currentTotal) + expense)
}