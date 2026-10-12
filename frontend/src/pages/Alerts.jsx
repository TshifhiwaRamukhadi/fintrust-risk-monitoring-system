import { useEffect, useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/alerts")
      .then((response) => response.json())
      .then((data) => {
        const alertData = data.map((alert) => ({
          ...alert,
          status: "Pending",
        }));

        setAlerts(alertData);
      })
      .catch((error) => console.error(error));
  }, []);

  const updateStatus = (id, newStatus) => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, status: newStatus }
          : alert
      )
    );
  };

  return (
    <div>
      <h1>Alert Management</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Country</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>ALT-{alert.id}</td>

              <td>{alert.account_id}</td>

              <td>
                R{Number(alert.amount).toLocaleString()}
              </td>

              <td>{alert.country}</td>

              <td>
                <span className="risk-pill risk-high">
                  HIGH
                </span>
              </td>

              <td>
                <span
                  className={`status-pill ${alert.status.toLowerCase()}`}
                >
                  {alert.status}
                </span>
              </td>

              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() =>
                    updateStatus(
                      alert.id,
                      "Investigating"
                    )
                  }
                >
                  Investigate
                </button>

                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() =>
                    updateStatus(
                      alert.id,
                      "Resolved"
                    )
                  }
                >
                  Resolve
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    updateStatus(
                      alert.id,
                      "Escalated"
                    )
                  }
                >
                  Escalate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}