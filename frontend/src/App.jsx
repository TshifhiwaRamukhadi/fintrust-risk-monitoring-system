import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Quarantine from "./pages/Quarantine";
import Uploads from "./pages/Uploads";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";

export default function App() {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <TopBar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/transactions"
              element={<Transactions />}
            />

            <Route
              path="/quarantine"
              element={<Quarantine />}
            />

            <Route
              path="/uploads"
              element={<Uploads />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/alerts"
              element={<Alerts />}
            />
          </Routes>
        </main>

      </div>

    </div>
  );
}
