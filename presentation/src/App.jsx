import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Introduction from "./pages/Introduction";
import BusinessProblem from "./pages/BusinessProblem";
import WhyFinTrust from "./pages/WhyFinTrust";
import Architecture from "./pages/Architecture";
import TransactionJourney from "./pages/TransactionJourney";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Database from "./pages/Database";
import AwsServices from "./pages/AwsServices";

import LiveDemo from "./pages/LiveDemo";

import Challenges from "./pages/Challenges";
import LessonsLearned from "./pages/LessonsLearned";
import FutureEnhancements from "./pages/FutureEnhancements";

import Conclusion from "./pages/Conclusion";
import Questions from "./pages/Questions";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        <Routes>

          <Route path="/" element={<Introduction />} />

          <Route
            path="/business-problem"
            element={<BusinessProblem />}
          />

          <Route
            path="/why-fintrust"
            element={<WhyFinTrust />}
          />

          <Route
            path="/architecture"
            element={<Architecture />}
          />

          <Route
            path="/frontend"
            element={<Frontend />}
          />

          <Route
            path="/backend"
            element={<Backend />}
          />

          <Route
            path="/database"
            element={<Database />}
          />

          <Route
            path="/aws-services"
            element={<AwsServices />}
          />

          <Route
            path="/live-demo"
            element={<LiveDemo />}
          />

          <Route
            path="/challenges"
            element={<Challenges />}
          />

          <Route
            path="/lessons"
            element={<LessonsLearned />}
          />

          <Route
            path="/future-enhancements"
            element={<FutureEnhancements />}
          />

          <Route
            path="/conclusion"
            element={<Conclusion />}
          />

          <Route
            path="/questions"
            element={<Questions />}
          />

          <Route
            path="/thank-you"
            element={<ThankYou />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;