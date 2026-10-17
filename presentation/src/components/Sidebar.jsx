import { NavLink } from "react-router-dom";
import logo from "../assets/Fintrust-Logo.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
              
                      <img
                          src={logo}
                          alt="FinTrust-Logo"
                          className="logo-image"
                      />
              
              </div>

        <h2 className="brand">
          FinTrust
        </h2>

      <div className="progress-area">

        <p className="progress-title">
          INTRODUCTION
        </p>

        <NavLink to="/" className="progress-link">
          01 Introduction
        </NavLink>

        <p className="progress-title">
          BUSINESS
        </p>

        <NavLink
          to="/business-problem"
          className="progress-link"
        >
          02 Business Problem
        </NavLink>

        <NavLink
          to="/why-fintrust"
          className="progress-link"
        >
          03 Why the Risk Monitoring System?
        </NavLink>

        <p className="progress-title">
          SOLUTION
        </p>

        <NavLink
          to="/architecture"
          className="progress-link"
        >
          04 Architecture
        </NavLink>

        <NavLink
          to="/frontend"
          className="progress-link"
        >
          05 Frontend
        </NavLink>

        <NavLink
          to="/backend"
          className="progress-link"
        >
          06 Backend & APIs
        </NavLink>

        <NavLink
          to="/database"
          className="progress-link"
        >
          07 Database & SQL
        </NavLink>

        <NavLink
          to="/aws-services"
          className="progress-link"
        >
          08 AWS Services
        </NavLink>

        <NavLink
          to="/live-demo"
          className="progress-link"
        >
          09 Live Demonstration
        </NavLink>

        <p className="progress-title">
          REFLECTION
        </p>

        <NavLink
          to="/challenges"
          className="progress-link"
        >
          10 Challenges
        </NavLink>

        <NavLink
          to="/lessons"
          className="progress-link"
        >
          11 Lessons Learned
        </NavLink>

        <NavLink
          to="/future-enhancements"
          className="progress-link"
        >
          12 Future Enhancements
        </NavLink>

        <p className="progress-title">
          CLOSING
        </p>

        <NavLink
          to="/conclusion"
          className="progress-link"
        >
          13 Conclusion
        </NavLink>

        <NavLink
          to="/questions"
          className="progress-link"
        >
          14 Questions
        </NavLink>

        <NavLink
          to="/thank-you"
          className="progress-link"
        >
          15 Thank You
        </NavLink>

      </div>

    </aside>
  );
}