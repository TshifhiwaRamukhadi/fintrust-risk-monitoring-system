import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2 className="brand">
          FinTrust
        </h2>

        <p className="brand-subtitle">
          Risk Monitoring System
        </p>
      </div>

      <nav className="sidebar-nav">
        <Link to="/">📊 Dashboard</Link>

        <Link to="/transactions">
          💳 Transactions
        </Link>

        <Link to="/quarantine">
          🚨 Quarantine
        </Link>

        <Link to="/uploads">
          ☁️ Uploads
        </Link>

        <Link to="/reports">
          📈 Reports
        </Link>

        <Link to="/alerts">
          🔔 Alerts
        </Link>
      </nav>

    </aside>
  );
}