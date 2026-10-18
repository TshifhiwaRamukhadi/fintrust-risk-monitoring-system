import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/transactions")
      .then((response) => response.json())
      .then((data) => {
        const sortedTransactions = [...data].sort(
          (a, b) => b.transaction_id - a.transaction_id
        );

        setTransactions(sortedTransactions);
      })
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

  const totalPages = Math.ceil(
    transactions.length / recordsPerPage
  );

  const indexOfLast =
    currentPage * recordsPerPage;

  const indexOfFirst =
    indexOfLast - recordsPerPage;

  const currentTransactions =
    transactions.slice(
      indexOfFirst,
      indexOfLast
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Transactions</h1>

      <p
        style={{
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        Showing {currentTransactions.length} of{" "}
        {transactions.length} transactions
      </p>

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
          {currentTransactions.map(
            (transaction) => (
              <tr
                key={
                  transaction.transaction_id
                }
              >
                <td>
                  {transaction.transaction_id}
                </td>

                <td>
                  {transaction.account_id}
                </td>

                <td>
                  R
                  {Number(
                    transaction.amount
                  ).toLocaleString()}
                </td>

                <td>
                  {
                    transaction.transaction_type
                  }
                </td>

                <td>{transaction.country}</td>

                <td>
                  {getRiskLevel(
                    transaction.risk_score
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }
        >
          Previous
        </button>

        <span>
          Page {currentPage} of{" "}
          {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}