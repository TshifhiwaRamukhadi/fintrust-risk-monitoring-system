import { NavLink } from "react-router-dom";
import logo from "../assets/Fintrust-Logo.png";


export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">

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

      </div>


      <nav className="sidebar-nav">

        <NavLink to="/">
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/transactions">
          <span>Transactions</span>
        </NavLink>

        <NavLink to="/quarantine">
          <span>Quarantine</span>
        </NavLink>

        <NavLink to="/uploads">
          <span>Upload Center</span>
        </NavLink>

        <NavLink to="/reports">
          <span>Reports</span>
        </NavLink>

        <NavLink to="/alerts">
          <span>Alerts</span>
        </NavLink>

      </nav>

    </aside>
  );
}