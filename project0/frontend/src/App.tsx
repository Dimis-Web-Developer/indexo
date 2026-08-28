import { BrowserRouter, Routes, Route } from "react-router-dom";

import DeskTNav from "./components/DeskTNav";
import MobileNav from "./components/MobileNav";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Projects from "./pages/Projects";
import Challenges from "./pages/Challenges";
import Analytics from "./pages/Analytics";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <DeskTNav />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile header and bottom navigation */}
          <MobileNav />

          {/* Desktop top bar */}
          <TopBar />

          <main className="flex-1 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>

          {/* Desktop footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;