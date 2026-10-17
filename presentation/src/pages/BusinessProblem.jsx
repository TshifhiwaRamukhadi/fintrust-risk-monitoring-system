import FooterNavigation from "../components/FooterNavigation";

export default function BusinessProblem() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 2 of 15
      </div>

      <h1>
        The Business Problem
      </h1>

      <div className="content-card">

        <h3>
          Situation at FinTrust Bank
        </h3>

        <ul>
          <li>
            FinTrust Bank processes thousands of transactions every day.
          </li>

          <li>
            As transaction volumes increase, manual monitoring becomes difficult.
          </li>

          <li>
            Compliance teams may struggle to identify suspicious activity quickly.
          </li>

          <li>
            High-risk transactions can be overlooked when relying on manual reviews.
          </li>

          <li>
            Regulatory requirements demand accurate and timely monitoring.
          </li>
        </ul>

        <br />

        <h3>
          Business Impact
        </h3>

        <ul>
          <li>
            Increased risk of fraud and financial crime.
          </li>

          <li>
            Delays in investigating suspicious transactions.
          </li>

          <li>
            Potential compliance penalties and audit findings.
          </li>

          <li>
            Reduced visibility into transaction activity.
          </li>

          <li>
            Loss of customer trust and reputational damage.
          </li>
        </ul>

        <br />

        <h3>
          Opportunity
        </h3>

        <p>
          FinTrust Bank requires an automated solution that can
          monitor transactions, identify high-risk activity,
          generate alerts and provide real-time visibility
          into transaction risk.
        </p>

      </div>

      <FooterNavigation
        previous="Introduction"
        previousPath="/"
        next="Why FinTrust"
        nextPath="/why-fintrust"
      />

    </div>
  );
}