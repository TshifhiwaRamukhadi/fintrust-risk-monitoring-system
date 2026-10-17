import FooterNavigation from "../components/FooterNavigation";
import architectureImage from "../assets/Fintrust.jpg";

export default function Architecture() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 4 of 15
      </div>

      <h1>
        Solution Architecture
      </h1>

      <h2>
        How the FinTrust Risk Monitoring System Works
      </h2>

      <div className="architecture-card">
  <img
    src={architectureImage}
    alt="FinTrust Architecture"
    />
      </div>

      <div className="journey-result">

        <h3>
          End-to-End Workflow
        </h3>

        <p>
          The process begins when the Operations Team uploads
          a CSV file containing transaction data.
        </p>

        <p>
          The file is stored in the Amazon S3 Raw Bucket and
          validated by the Ingest Lambda function.
        </p>

        <p>
          Transactions are sent to Amazon SQS and processed
          through AWS Step Functions.
        </p>

        <p>
          The Risk Scoring Lambda calculates risk scores and
          stores transaction data in Amazon RDS PostgreSQL
          and Amazon DynamoDB.
        </p>

        <p>
          Amazon API Gateway provides access to transaction
          and reporting data while Amazon SES sends email
          alerts for high-risk transactions.
        </p>

        <p>
          AWS IAM manages permissions between services and
          Amazon CloudWatch provides monitoring, logging and
          troubleshooting.
        </p>

      </div>

      <FooterNavigation
        previous="Why FinTrust"
        previousPath="/why-fintrust"
        next="Frontend"
        nextPath="/frontend"
      />

    </div>
  );
}