import FooterNavigation from "../components/FooterNavigation";

export default function LessonsLearned() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 11 of 15
      </div>

      <h1>
        Lessons Learned
      </h1>

      <h2>
        Key Skills Gained During The Project
      </h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Cloud Computing</h3>
          <p>
            Learned how AWS services work
            together to build a complete
            cloud solution.
          </p>
        </div>

        <div className="tech-card">
          <h3>Frontend Development</h3>
          <p>
            Improved my React skills and
            ability to create user-friendly
            interfaces.
          </p>
        </div>

        <div className="tech-card">
          <h3>API Development</h3>
          <p>
            Learned how to build and test
            REST APIs using FastAPI.
          </p>
        </div>

        <div className="tech-card">
          <h3>Database Management</h3>
          <p>
            Improved my PostgreSQL and SQL
            skills for storing and analysing data.
          </p>
        </div>

        <div className="tech-card">
          <h3>Problem Solving</h3>
          <p>
            Developed stronger debugging
            and troubleshooting skills.
          </p>
        </div>

        <div className="tech-card">
          <h3>End-to-End Development</h3>
          <p>
            Learned how frontend, backend,
            databases and cloud services work
            together in one solution.
          </p>
        </div>

      </div>

      <div className="journey-result">

        <h3>
          My Biggest Takeaway
        </h3>

        <p>
          This project taught me that successful
          software development is not only about
          writing code. It requires understanding
          business requirements, designing scalable
          solutions, testing thoroughly and working
          through challenges to deliver a reliable
          application.
        </p>

      </div>

      <div className="journey-result">

        <h3>
          Professional Growth
        </h3>

        <p>
          Developing the FinTrust Risk Monitoring
          System strengthened my confidence in cloud
          technologies, software engineering and
          solution design. It also improved my ability
          to troubleshoot problems, work independently
          and deliver a complete end-to-end solution.
        </p>

      </div>

      <FooterNavigation
        previous="Challenges"
        previousPath="/challenges"
        next="Future Enhancements"
        nextPath="/future-enhancements"
      />

    </div>
  );
}