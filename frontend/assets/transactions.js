const tableBody =
    document.getElementById(
        "transactionTable"
    );

function loadTransactions(data) {

    tableBody.innerHTML = "";

    data.forEach(transaction => {

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.transaction_id}</td>
            <td>${transaction.account_id}</td>
            <td>R ${Number(transaction.amount).toLocaleString()}</td>
            <td>${transaction.country}</td>
            <td>${transaction.status}</td>
            <td>${transaction.transaction_type}</td>
        `;

        tableBody.appendChild(row);
    });
}

async function initialisePage() {

    const transactions =
        await getTransactions();

    loadTransactions(
        transactions
    );
}

initialisePage();