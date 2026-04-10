import { BrowserRouter, Routes, Route } from "react-router-dom";
import  MobileNav from "./components/MobileNav";
import DeskTNav from "./components/DeskTNav";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Challenges from "./pages/Challenges";
// import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
        <DeskTNav />
      <MobileNav/> 
       <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;