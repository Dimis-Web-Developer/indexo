import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeskTNav from "./components/DeskTNav";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import DashBoard from './pages/DashBoard'
import Projects from "./pages/Projects";
import Challenges from "./pages/Challenges";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <DeskTNav />
        <div className="flex-1 flex flex-col">
          <MobileNav />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;