import FooterNavigation from "../components/FooterNavigation";

export default function Frontend() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 5 of 15
      </div>

      <h1>
        Frontend
      </h1>

      <h2>
        User Interface Built with React
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>React</h3>
          <p>
            Provides a modern, responsive
            and component-based user interface.
          </p>
        </div>

        <div className="tech-card">
          <h3>User Experience</h3>
          <p>
            Provides simple navigation and
            easy access to system functionality.
          </p>
        </div>

        <div className="tech-card">
          <h3>Dashboard Visibility</h3>
          <p>
            Displays transaction activity,
            risk insights and alerts.
          </p>
        </div>

        <div className="tech-card">
          <h3>API Integration</h3>
          <p>
            Retrieves information from the
            FastAPI backend through REST APIs.
          </p>
        </div>

        <div className="tech-card">
          <h3>File Uploads</h3>
          <p>
            Allows operations teams to upload
            transaction CSV files for processing.
          </p>
        </div>

        <div className="tech-card">
          <h3>Reporting & Investigation</h3>
          <p>
            Provides access to reports,
            alerts and quarantine records.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          Frontend Purpose
        </h3>

        <p>
          The React frontend serves as the
          primary interface between users and
          the FinTrust Risk Monitoring System.
          It provides visibility into transaction
          activity, risk information and
          operational processes.
        </p>

      </div>

      <FooterNavigation
        previous="Architecture"
        previousPath="/architecture"
        next="Backend & APIs"
        nextPath="/backend"
      />

    </div>
  );
}
