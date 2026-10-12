import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error(error));
  }, []);

  const getRiskLevel = (score) => {
    if (score >= 80) {
      return (
        <span className="risk-pill risk-high">
          HIGH
        </span>
      );
    }

    if (score >= 50) {
      return (
        <span className="risk-pill risk-medium">
          MEDIUM
        </span>
      );
    }

    return (
      <span className="risk-pill risk-low">
        LOW
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Transactions</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Country</th>
            <th>Risk Level</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td>{transaction.transaction_id}</td>
              <td>{transaction.account_id}</td>

              <td>
                R
                {Number(
                  transaction.amount
                ).toLocaleString()}
              </td>

              <td>
                {transaction.transaction_type}
              </td>

              <td>{transaction.country}</td>

              <td>
                {getRiskLevel(
                  transaction.risk_score
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}