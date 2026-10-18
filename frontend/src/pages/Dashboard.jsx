import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_transactions: 0,
    high_risk: 0,
    medium_risk: 0,
  });

  useEffect(() => {
    fetch("https://fintrust-risk-monitoring-system.onrender.com/dashboard")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>

      <div className="dashboard-hero">
        <h1>FinTrust Risk Monitoring Dashboard</h1>

        <p>
          Real-Time Banking Risk Intelligence &
          Transaction Surveillance
        </p>
      </div>

      <div className="card-grid">

        <motion.div
          className="stat-card glass green-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.04,
            y: -10,
          }}
        >
          <div className="card-top">
            <span className="card-icon">
            </span>
          </div>

          <h3>Total Transactions</h3>

          <h1>{stats.total_transactions}</h1>

          <p>Processed Transactions</p>
        </motion.div>

        <motion.div
          className="stat-card glass red-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.04,
            y: -10,
          }}
        >
          <div className="card-top">
            <span className="card-icon">
            </span>
          </div>

          <h3>High Risk</h3>

          <h1>{stats.high_risk}</h1>

          <p>Requires Investigation</p>
        </motion.div>

        <motion.div
          className="stat-card glass yellow-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileHover={{
            scale: 1.04,
            y: -10,
          }}
        >
          <div className="card-top">
            <span className="card-icon">
            </span>
          </div>

          <h3>Medium Risk</h3>

          <h1>{stats.medium_risk}</h1>

          <p>Requires Monitoring</p>
        </motion.div>

      </div>

    </div>
  );
}