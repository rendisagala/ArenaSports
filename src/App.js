import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import League from "./pages/League";
import News from "./pages/News";
import About from "./pages/About";
import Players from "./pages/Players";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/league" element={<League />} />
            <Route path="/news" element={<News />} />
            <Route path="/players" element={<Players />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
