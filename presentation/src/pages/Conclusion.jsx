import FooterNavigation from "../components/FooterNavigation";

export default function Conclusion() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 13 of 15
      </div>

      <h1>
        Conclusion
      </h1>

      <h2>
        Bringing FinTrust Together
      </h2>

      <div className="content-card">

        <h3>
          Project Summary
        </h3>

        <p>
          The FinTrust Risk Monitoring System was
          developed to address the challenge of
          monitoring large volumes of financial
          transactions.
        </p>

        <p>
          The solution combines a React frontend,
          FastAPI backend, PostgreSQL database and
          AWS cloud services to automate transaction
          monitoring, risk scoring and alert generation.
        </p>

        <p>
          Throughout this project, multiple
          technologies were designed, developed,
          tested and integrated into a complete
          end-to-end solution.
        </p>

        <br />

        <h3>
          What Was Achieved
        </h3>

        <ul>
          <li>Automated transaction monitoring</li>
          <li>Risk scoring and alert generation</li>
          <li>Cloud-based processing using AWS</li>
          <li>REST APIs using FastAPI</li>
          <li>Database reporting and analytics</li>
          <li>A complete end-to-end solution</li>
        </ul>

      </div>

      <div className="journey-result">

        <h3>
          Final Thoughts
        </h3>

        <p>
          The FinTrust Risk Monitoring System
          demonstrates how modern technologies can
          be combined to transform manual processes
          into intelligent, automated workflows.
        </p>

        <p>
          By integrating cloud services, APIs,
          databases and automation, the solution
          improves efficiency, visibility and
          decision-making while addressing a real
          business challenge.
        </p>

      </div>

      <FooterNavigation
        previous="Future Enhancements"
        previousPath="/future-enhancements"
        next="Questions"
        nextPath="/questions"
      />

    </div>
  );
}