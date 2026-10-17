import FooterNavigation from "../components/FooterNavigation";
import tshifhiwaPicture from "../assets/TshifhiwaPicture.jpg";

export default function Introduction() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 1 of 15
      </div>

      <h1>
        FinTrust Risk Monitoring System
      </h1>

      <h2>
        Helping FinTrust Detect and Respond to High-Risk Transactions
      </h2>

      <div className="intro-layout">

        <div className="content-card intro-card">

          <h3>
            About Me
          </h3>

          <h2 className="presenter-name">
            Tshifhiwa Ramukhadi
          </h2>

          <p>
            Trainee / Learner
          </p>

          <br />

          <h3>
            Fun Fact
          </h3>

          <p>
            I used to play netball.
          </p>

          <p>
            Playing netball taught me the importance of teamwork,
            communication and making quick decisions under pressure.
          </p>

          <p>
            That same mindset helped me throughout the development
            of this project, where different technologies work
            together to process transactions, assess risk and
            support better business decisions.
          </p>

        </div>

        <div className="profile-card">
  <img
    src={tshifhiwaPicture}
    alt="Tshifhiwa" />

        
        </div>

      </div>

      <FooterNavigation
        previous={null}
        previousPath={null}
        next="Business Problem"
        nextPath="/business-problem"
      />

    </div>
  );
}