import { useEffect, useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    loadAlerts();

    const interval = setInterval(() => {
      loadAlerts();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const loadAlerts = () => {
    fetch("http://127.0.0.1:8000/alerts")
      .then((response) => response.json())
      .then((data) => {
        const alertData = data
          .sort((a, b) => b.id - a.id)
          .map((alert) => ({
            ...alert,
            status:
              alert.risk_score >= 70
                ? "Active"
                : alert.risk_score >= 40
                ? "Monitoring"
                : "Closed",
          }));

        setAlerts(alertData);
      })
      .catch((error) => console.error(error));
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentAlerts = alerts.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    alerts.length / itemsPerPage
  );

  return (
    <div>
      <h1>Alert Management</h1>

      <p>
        Showing {currentAlerts.length} of{" "}
        {alerts.length} alerts
      </p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Country</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Action Taken</th>
          </tr>
        </thead>

        <tbody>
          {currentAlerts.map((alert) => (
            <tr key={alert.id}>
              <td>ALT-{alert.id}</td>

              <td>{alert.account_id}</td>

              <td>
                R
                {Number(
                  alert.amount
                ).toLocaleString()}
              </td>

              <td>{alert.country}</td>

              <td>
                {alert.risk_score >= 70 ? (
                  <span className="risk-pill risk-high">
                    HIGH
                  </span>
                ) : alert.risk_score >= 40 ? (
                  <span className="risk-pill risk-medium">
                    MEDIUM
                  </span>
                ) : (
                  <span className="risk-pill risk-low">
                    LOW
                  </span>
                )}
              </td>

              <td>
                <span
                  className={`status-pill ${alert.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {alert.status}
                </span>
              </td>

              <td>
                {alert.risk_score >= 70 ? (
                  <span className="badge bg-danger">
                    Notification Sent
                  </span>
                ) : alert.risk_score >= 40 ? (
                  <span className="badge bg-warning text-dark">
                    Under Monitoring
                  </span>
                ) : (
                  <span className="badge bg-success">
                    Cleared
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}