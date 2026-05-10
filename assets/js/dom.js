const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";
        value = String(value).replace(/\D/g, "");
        value = Number(value) / 100;

        return signal + value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";
        const amount = Utils.formatCurrency(transaction.amount * 100);

        return `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="category">${transaction.category}</td>
            <td class="date">${transaction.date}</td>
        `;
    },

    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes() * 100);
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses() * 100);
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total() * 100);
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = "";
    }
};