import FooterNavigation from "../components/FooterNavigation";

export default function Challenges() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 11 of 16
      </div>

      <h1>
        Challenges & Solutions
      </h1>

      <h2>
        Problems Encountered During Development
      </h2>

      <div className="challenge-grid">

        <div className="challenge-card">

          <h3>
            Email Alerts
          </h3>

          <p className="problem">
            Challenge
          </p>

          <p>
            High-risk transactions were processed
            correctly, but email notifications
            were not being received.
          </p>

          <p className="solution">
            Solution
          </p>

          <p>
            Used CloudWatch logs, verified
            Amazon SES settings and tested
            the notification workflow until
            emails were delivered successfully.
          </p>

        </div>

        <div className="challenge-card">

          <h3>
            AWS Permissions
          </h3>

          <p className="problem">
            Challenge
          </p>

          <p>
            Lambda functions and AWS services
            could not access required resources
            because of permission issues.
          </p>

          <p className="solution">
            Solution
          </p>

          <p>
            Updated IAM roles and policies to
            allow secure communication between
            AWS services.
          </p>

        </div>

        <div className="challenge-card">

          <h3>
            API & Frontend Integration
          </h3>

          <p className="problem">
            Challenge
          </p>

          <p>
            Data from the API was not displaying
            correctly on the frontend dashboard.
          </p>

          <p className="solution">
            Solution
          </p>

          <p>
            Tested endpoints in Swagger and
            fixed the integration between
            React and FastAPI.
          </p>

        </div>

        <div className="challenge-card">

          <h3>
            Database Connectivity
          </h3>

          <p className="problem">
            Challenge
          </p>

          <p>
            Connecting to PostgreSQL and
            retrieving data consistently
            was difficult during development.
          </p>

          <p className="solution">
            Solution
          </p>

          <p>
            Reviewed connection settings,
            tested SQL queries and improved
            database integration with the backend.
          </p>

        </div>

      </div>

      <FooterNavigation
        previous="Live Demonstration"
        previousPath="/live-demo"
        next="Lessons Learned"
        nextPath="/lessons"
      />

    </div>
  );
}