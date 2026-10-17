import FooterNavigation from "../components/FooterNavigation";

export default function KeyFeatures() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 5 of 16
      </div>

      <h1>
        Key Features
      </h1>

      <h2>
        What FinTrust Can Do
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Transaction Monitoring</h3>
          <p>
            Monitors uploaded transactions
            and processes them automatically.
          </p>
        </div>

        <div className="tech-card">
          <h3>Risk Scoring</h3>
          <p>
            Calculates risk scores based
            on predefined rules.
          </p>
        </div>

        <div className="tech-card">
          <h3>Email Alerts</h3>
          <p>
            Sends notifications when
            high-risk transactions are found.
          </p>
        </div>

        <div className="tech-card">
          <h3>Dashboard Analytics</h3>
          <p>
            Displays transaction and risk
            information in real time.
          </p>
        </div>

        <div className="tech-card">
          <h3>Quarantine Management</h3>
          <p>
            Separates invalid records
            for investigation.
          </p>
        </div>

        <div className="tech-card">
          <h3>Reporting</h3>
          <p>
            Generates reports for
            compliance and management.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          Business Value
        </h3>

        <p>
          FinTrust helps organisations
          detect risk faster, reduce manual
          effort and improve compliance
          monitoring.
        </p>

      </div>

      <FooterNavigation
        previous="Architecture"
        previousPath="/architecture"
        next="Frontend"
        nextPath="/frontend"
      />

    </div>
  );
}