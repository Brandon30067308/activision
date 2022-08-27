import Nav from "./components/shared/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Latest from "./components/Latest/Latest";
import SupportBanner from "./components/SupportBanner/SupportBanner";
import "./styles/base.scss";
import Community from "./components/Community/Community";
import JobBanner from "./components/JobBanner/JobBanner";
import Footer from "./components/shared/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Nav />
              <Hero />
              <Latest />
              <SupportBanner />
              <Community />
              <JobBanner />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
