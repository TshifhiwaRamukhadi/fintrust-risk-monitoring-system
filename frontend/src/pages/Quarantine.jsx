import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Quarantine() {
  const [transactions, setTransactions] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(1);

  const recordsPerPage = 10;

  useEffect(() => {
    fetch("https://fintrust-risk-monitoring-system.onrender.com/quarantine")
      .then((response) => response.json())
      .then((data) => {
        const sortedTransactions = [
          ...data,
        ].sort((a, b) => b.id - a.id);

        setTransactions(sortedTransactions);
      })
      .catch((error) =>
        console.error(error)
      );
  }, []);

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
      <h1>Quarantine Queue</h1>

      <p
        style={{
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        Showing {currentTransactions.length} of{" "}
        {transactions.length} quarantined
        transactions
      </p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Country</th>
            <th>Risk Level</th>
            <th>Investigation Status</th>
          </tr>
        </thead>

        <tbody>
          {currentTransactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>

              <td>{t.account_id}</td>

              <td>
                R
                {Number(
                  t.amount
                ).toLocaleString()}
              </td>

              <td>{t.country}</td>

              <td>
                <span className="risk-pill risk-high">
                  HIGH
                </span>
              </td>

              <td>
                <span
                  className="badge bg-warning text-dark"
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  Awaiting Investigation
                </span>
              </td>
            </tr>
          ))}
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