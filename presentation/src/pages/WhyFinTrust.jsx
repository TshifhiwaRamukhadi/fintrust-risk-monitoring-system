import FooterNavigation from "../components/FooterNavigation";

export default function WhyFinTrust() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 3 of 15
      </div>

      <h1>
        Why the FinTrust Risk Monitoring System?
      </h1>

      <div className="content-card">

        <h3>
          Why This Solution Was Needed
        </h3>

        <p>
          FinTrust requires a more efficient way to monitor
          transaction activity and identify potential risks.
        </p>

        <p>
          As transaction volumes increase, manual monitoring
          becomes less effective and can result in delayed
          identification of suspicious activity.
        </p>

        <br />

        <h3>
          Project Objectives
        </h3>

        <ul>
          <li>
            Automate transaction monitoring
          </li>

          <li>
            Calculate transaction risk scores
          </li>

          <li>
            Generate alerts for high-risk activity
          </li>

          <li>
            Improve visibility through dashboards
          </li>

          <li>
            Support compliance investigations
          </li>
        </ul>

        <br />

        <h3>
          Expected Benefits
        </h3>

        <ul>
          <li>
            Faster risk detection
          </li>

          <li>
            Better decision making
          </li>

          <li>
            Improved compliance monitoring
          </li>

          <li>
            Reduced manual effort
          </li>

          <li>
            Increased operational efficiency
          </li>
        </ul>

      </div>

      <FooterNavigation
        previous="Business Problem"
        previousPath="/business-problem"
        next="Architecture"
        nextPath="/architecture"
      />

    </div>
  );
}