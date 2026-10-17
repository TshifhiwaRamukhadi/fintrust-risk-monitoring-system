import FooterNavigation from "../components/FooterNavigation";

export default function AwsServices() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 8 of 15
      </div>

      <h1>
        AWS Services
      </h1>

      <h2>
        Cloud Services Powering FinTrust
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Storage</h3>
          <p>
            Amazon S3 stores uploaded,
            processed and quarantined files.
          </p>
        </div>

        <div className="tech-card">
          <h3>Processing</h3>
          <p>
            AWS Lambda and Step Functions
            process transactions and execute
            workflows.
          </p>
        </div>

        <div className="tech-card">
          <h3>Data Layer</h3>
          <p>
            Amazon RDS PostgreSQL and
            DynamoDB store transaction
            and risk information.
          </p>
        </div>

        <div className="tech-card">
          <h3>API Services</h3>
          <p>
            Amazon API Gateway exposes
            endpoints for application access.
          </p>
        </div>

        <div className="tech-card">
          <h3>Alerts</h3>
          <p>
            Amazon SES sends email alerts
            for high-risk transactions.
          </p>
        </div>

        <div className="tech-card">
          <h3>Monitoring & Security</h3>
          <p>
            CloudWatch provides monitoring
            while IAM manages permissions.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          AWS-Powered Workflow
        </h3>

        <p>
          FinTrust uses AWS cloud services to
          automate transaction ingestion,
          validation, risk scoring, storage,
          monitoring and alerting. These
          services work together to provide
          a secure, scalable and reliable
          cloud-native solution.
        </p>

      </div>

      <div className="journey-result">

        <h3>
          Live Demonstration
        </h3>

        <p>
          During the demonstration, I will
          showcase key AWS resources including
          Amazon S3, Lambda Functions,
          Amazon RDS, DynamoDB, SES and
          CloudWatch.
        </p>

      </div>

      <FooterNavigation
        previous="Database & SQL"
        previousPath="/database"
        next="Live Demonstration"
        nextPath="/live-demo"
      />

    </div>
  );
}