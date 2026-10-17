import FooterNavigation from "../components/FooterNavigation";
import swaggerImage from "../assets/swaggerImage.png";

export default function Backend() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 6 of 15
      </div>

      <h1>
        Backend & APIs
      </h1>

      <h2>
        Processing, Integration and Automation
      </h2>

      <div className="backend-layout">

        <div className="backend-details">

          <div className="tech-grid">

            <div className="tech-card">
              <h3>FastAPI</h3>
              <p>
                Provides REST APIs that allow
                communication between the frontend,
                databases and cloud services.
              </p>
            </div>

            <div className="tech-card">
              <h3>Validation</h3>
              <p>
                Validates uploaded transaction data
                before it is processed and stored.
              </p>
            </div>

            <div className="tech-card">
              <h3>Risk Scoring</h3>
              <p>
                Applies business rules to calculate
                transaction risk scores.
              </p>
            </div>

            <div className="tech-card">
              <h3>Integration</h3>
              <p>
                Connects the frontend,
                databases and AWS services.
              </p>
            </div>

          </div>

        </div>

        <div className="swagger-card">
           <img
              src={swaggerImage}
              alt="Swagger Image"
              />

        </div>

      </div>

      <div className="journey-result">

        <h3>
          Why This Matters
        </h3>

        <p>
          The backend is the core of the FinTrust Risk
          Monitoring System. It validates transaction
          data, applies business rules, calculates risk
          scores and exposes REST APIs through FastAPI.
          The Swagger documentation allows developers
          and testers to verify and interact with
          endpoints easily.
        </p>

      </div>

      <FooterNavigation
        previous="Frontend"
        previousPath="/frontend"
        next="Database & SQL"
        nextPath="/database"
      />

    </div>
  );
}