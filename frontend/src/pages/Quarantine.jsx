import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Quarantine() {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/quarantine")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Quarantine Queue</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Country</th>
            <th>Risk Level</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>

              <td>{t.account_id}</td>

              <td>
                R
                {Number(t.amount).toLocaleString()}
              </td>

              <td>{t.country}</td>

              <td>
                <span className="risk-pill risk-high">
                  HIGH
                </span>
              </td>

              <td>
                <button className="btn btn-warning btn-sm">
                  Send To Investigation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}