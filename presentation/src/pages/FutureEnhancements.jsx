import FooterNavigation from "../components/FooterNavigation";

export default function FutureEnhancements() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 12 of 15
      </div>

      <h1>
        Future Enhancements
      </h1>

      <h2>
        Opportunities for Growth and Improvement
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Machine Learning</h3>
          <p>
            Improve risk scoring accuracy by
            using machine learning models
            trained on historical transaction data.
          </p>
        </div>

        <div className="tech-card">
          <h3>Real-Time Processing</h3>
          <p>
            Process transactions in real time
            instead of relying on CSV uploads.
          </p>
        </div>

        <div className="tech-card">
          <h3>Role-Based Access</h3>
          <p>
            Provide different permissions and
            dashboards for analysts, managers
            and compliance officers.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          Future Vision
        </h3>

        <p>
          The FinTrust Risk Monitoring System
          already provides automated transaction
          monitoring, risk scoring and alerting.
          Future enhancements could improve
          accuracy, scalability and user
          experience while supporting more
          advanced risk management capabilities.
        </p>

      </div>

      <FooterNavigation
        previous="Lessons Learned"
        previousPath="/lessons"
        next="Conclusion"
        nextPath="/conclusion"
      />

    </div>
  );
}