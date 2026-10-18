import { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
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

      const transactions =
        await transactionsResponse.json();

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

      const topRiskCountries = Object.entries(
        countryCounts
      )
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setReport({
        ...summary,
        transactions,
        highRisk,
        mediumRisk,
        lowRisk,
        countryData,
        topRiskCountries,
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
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h1 className="mb-1">
            Transaction Risk Report
          </h1>

          <p className="text-muted">
            Monthly Compliance & Risk Analysis
          </p>
        </div>

        <button
          className="btn btn-success"
          onClick={generateReport}
        >
          Generate Report
        </button>

      </div>

      {loading && (
        <div className="alert alert-info">
          Generating report...
        </div>
      )}

      {report && (
        <>
          {/* KPIs */}

          <div className="row mb-4">

            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h6>Total Transactions</h6>
                <h2>
                  {report.total_transactions}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h6>High Risk</h6>
                <h2 className="text-danger">
                  {report.highRisk}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h6>Average Risk</h6>
                <h2 className="text-warning">
                  {report.average_risk_score.toFixed(
                    2
                  )}
                </h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h6>Total Amount</h6>
                <h2>
                  R
                  {report.total_amount.toLocaleString()}
                </h2>
              </div>
            </div>

          </div>

          {/* CHARTS */}

          <div className="row mb-4">

            <div className="col-lg-6">

              <div className="card shadow-sm border-0 p-3">

                <h4>
                  Risk Distribution
                </h4>

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >

                  <PieChart>

                    <Pie
                      data={[
                        {
                          name: "High Risk",
                          value:
                            report.highRisk,
                        },
                        {
                          name:
                            "Medium Risk",
                          value:
                            report.mediumRisk,
                        },
                        {
                          name: "Low Risk",
                          value:
                            report.lowRisk,
                        },
                      ]}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >

                      {COLORS.map(
                        (
                          color,
                          index
                        ) => (
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

            <div className="col-lg-6">

              <div className="card shadow-sm border-0 p-3">

                <h4>
                  Transactions by Country
                </h4>

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >

                  <BarChart
                    data={
                      report.countryData
                    }
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

          {/* FINDINGS */}

          <div className="row mb-4">

            <div className="col-md-6">

              <div className="card shadow-sm border-0 p-4 h-100">

                <h4>
                  Top Risk Countries
                </h4>

                <table className="table">

                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Transactions</th>
                    </tr>
                  </thead>

                  <tbody>

                    {report.topRiskCountries.map(
                      ([country, count]) => (
                        <tr key={country}>
                          <td>
                            {country}
                          </td>
                          <td>
                            {count}
                          </td>
                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

            </div>

            <div className="col-md-6">

              <div className="card shadow-sm border-0 p-4 h-100">

                <h4>
                  Report Highlights
                </h4>

                <ul>

                  <li>
                    {report.highRisk}
                    {" "}
                    transactions were
                    classified as high
                    risk.
                  </li>

                  <li>
                    Total transaction
                    value analysed:
                    {" "}
                    R
                    {report.total_amount.toLocaleString()}
                  </li>

                  <li>
                    Average risk score:
                    {" "}
                    {report.average_risk_score.toFixed(
                      2
                    )}
                  </li>

                  <li>
                    Country analysis
                    identified key
                    regions requiring
                    additional review.
                  </li>

                  <li>
                    Generated data can
                    support compliance
                    investigations and
                    reporting.
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* EXECUTIVE SUMMARY */}

          <div className="card shadow-sm border-0 p-4 mb-4">

            <h3>
              Executive Summary
            </h3>

            <p>
              This report provides an
              overview of transaction
              activity, risk exposure and
              compliance-related insights.
            </p>

            <p>
              Analysis indicates
              <strong>
                {" "}
                {report.highRisk}
              </strong>
              {" "}
              high-risk transactions
              requiring further review.
            </p>

            <p>
              The total transaction value
              processed during the reporting
              period was
              <strong>
                {" "}
                R
                {report.total_amount.toLocaleString()}
              </strong>.
            </p>

          </div>
        </>
      )}
    </div>
  );
}