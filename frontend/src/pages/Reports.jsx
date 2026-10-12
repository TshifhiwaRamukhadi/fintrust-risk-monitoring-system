import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function Reports() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const generateReport = async () => {
    setLoading(true);

    try {
      const summaryResponse = await fetch(
        "http://127.0.0.1:8000/reports/summary"
      );

      const summary = await summaryResponse.json();

      const transactionsResponse = await fetch(
        "http://127.0.0.1:8000/transactions"
      );

      const transactions = await transactionsResponse.json();

      const highRisk = transactions.filter(
        (t) => t.risk_score >= 80
      ).length;

      const mediumRisk = transactions.filter(
        (t) =>
          t.risk_score >= 50 &&
          t.risk_score < 80
      ).length;

      const lowRisk = transactions.filter(
        (t) => t.risk_score < 50
      ).length;

      const countryCounts = {};

      transactions.forEach((t) => {
        countryCounts[t.country] =
          (countryCounts[t.country] || 0) + 1;
      });

      const countryData = Object.entries(
        countryCounts
      ).map(([country, count]) => ({
        country,
        transactions: count,
      }));

      setReport({
        ...summary,
        highRisk,
        mediumRisk,
        lowRisk,
        countryData,
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const COLORS = [
    "#dc3545",
    "#ffc107",
    "#198754",
  ];

  return (
    <div>
      <h1>Reports Center</h1>

      <button
        className="btn btn-success mb-4"
        onClick={generateReport}
      >
        Generate Monthly Report
      </button>

      {loading && (
        <div className="alert alert-info">
          <div
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Generating Report...
          Analyzing Transactions...
        </div>
      )}

      {report && (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Total Transactions</h6>
                <h2>
                  {report.total_transactions}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>High Risk</h6>
                <h2 className="text-danger">
                  {report.highRisk}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Average Risk</h6>
                <h2 className="text-warning">
                  {report.average_risk_score.toFixed(
                    2
                  )}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Total Amount</h6>
                <h2>
                  R
                  {report.total_amount.toLocaleString()}
                </h2>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="card p-3">
                <h4>Risk Distribution</h4>

                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "High Risk",
                          value: report.highRisk,
                        },
                        {
                          name: "Medium Risk",
                          value: report.mediumRisk,
                        },
                        {
                          name: "Low Risk",
                          value: report.lowRisk,
                        },
                      ]}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >
                      {COLORS.map(
                        (color, index) => (
                          <Cell
                            key={index}
                            fill={color}
                          />
                        )
                      )}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-3">
                <h4>
                  Transactions by Country
                </h4>

                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <BarChart
                    data={report.countryData}
                  >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                      dataKey="country"
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="transactions"
                      fill="#198754"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          <div className="card p-4 mt-4">
            <h3>Report Summary</h3>

            <p>
              <strong>
                Total Transactions:
              </strong>{" "}
              {report.total_transactions}
            </p>

            <p>
              <strong>
                High Risk Transactions:
              </strong>{" "}
              {report.highRisk}
            </p>

            <p>
              <strong>
                Average Risk Score:
              </strong>{" "}
              {report.average_risk_score.toFixed(
                2
              )}
            </p>

            <p>
              <strong>
                Highest Risk Score:
              </strong>{" "}
              {report.highest_risk_score}
            </p>

            <p>
              <strong>Total Amount:</strong> R
              {report.total_amount.toLocaleString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}