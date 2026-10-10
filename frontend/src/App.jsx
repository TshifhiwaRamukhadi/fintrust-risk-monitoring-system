import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>FinTrust Risk Monitoring Dashboard</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Country</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td>{transaction.transaction_id}</td>
              <td>{transaction.account_id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.country}</td>
              <td>{transaction.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;