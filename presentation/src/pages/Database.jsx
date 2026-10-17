import FooterNavigation from "../components/FooterNavigation";

export default function Database() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 7 of 15
      </div>

      <h1>
        Database & SQL
      </h1>

      <h2>
        Storing and Analysing Risk Data
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>PostgreSQL</h3>
          <p>
            Stores customers, accounts,
            transactions and risk information.
          </p>
        </div>

        <div className="tech-card">
          <h3>SQL Queries</h3>
          <p>
            Retrieve transaction records and
            generate business insights.
          </p>
        </div>

        <div className="tech-card">
          <h3>Risk Data</h3>
          <p>
            Stores calculated risk scores
            for transaction monitoring.
          </p>
        </div>

        <div className="tech-card">
          <h3>Reporting</h3>
          <p>
            Supports dashboards,
            alerts and reporting.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          Why This Matters
        </h3>

        <p>
          PostgreSQL serves as the primary
          data store for the FinTrust Risk
          Monitoring System. It stores
          transaction data, supports risk
          analysis and provides information
          used by dashboards, alerts and
          reports.
        </p>

      </div>

      <FooterNavigation
        previous="Backend & APIs"
        previousPath="/backend"
        next="AWS Services"
        nextPath="/aws-services"
      />

    </div>
  );
}