import FooterNavigation from "../components/FooterNavigation";

export default function LiveDemo() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 10 of 16
      </div>

      <h1>
        Live Demonstration
      </h1>

      <h2>
        End-to-End FinTrust Workflow
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Frontend Application</h3>
          <p>
            Explore the dashboard,
            transactions, alerts,
            reports and quarantine pages.
          </p>
        </div>

        <div className="tech-card">
          <h3>CSV Upload</h3>
          <p>
            Upload transaction data
            for automatic processing.
          </p>
        </div>

        <div className="tech-card">
          <h3>FastAPI & Swagger</h3>
          <p>
            Demonstrate API endpoints
            and backend functionality.
          </p>
        </div>

        <div className="tech-card">
          <h3>PostgreSQL</h3>
          <p>
            Verify stored transactions
            using SQL queries.
          </p>
        </div>

        <div className="tech-card">
          <h3>AWS Services</h3>
          <p>
            Review the cloud resources
            powering the solution.
          </p>
        </div>

        <div className="tech-card">
          <h3>Email Alerts</h3>
          <p>
            Demonstrate notifications
            for high-risk transactions.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          Demonstration Flow
        </h3>

        <ol>
          <li>Explore the FinTrust Frontend</li>
          <li>Upload a transaction CSV file</li>
          <li>Process and score transactions</li>
          <li>Review FastAPI Swagger endpoints</li>
          <li>Verify data in PostgreSQL</li>
          <li>Review AWS cloud resources</li>
          <li>Verify email alert notifications</li>
        </ol>

      </div>

      <div className="journey-result">

        <h3>
          Expected Outcome
        </h3>

        <p>
          The demonstration will show how
          FinTrust automatically processes
          transactions, calculates risk scores,
          stores data, generates alerts and
          supports compliance monitoring using
          cloud-native technologies.
        </p>

      </div>

      <FooterNavigation
        previous="AWS Services"
        previousPath="/aws-services"
        next="Challenges"
        nextPath="/challenges"
      />

    </div>
  );
}