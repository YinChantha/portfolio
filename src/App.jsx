import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Myproject from "./Pages/Myproject";
import Navbar from "./Navbar";
import Readmore from "./Pages/Readmore";

function App() {
  const navigate = useNavigate();
  const handleRefresh = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar handleRefresh={handleRefresh} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myproject" element={<Myproject />} />
        <Route path="/myprojects" element={<Readmore />} />
      </Routes>
    </div>
  );
}

export default App;
