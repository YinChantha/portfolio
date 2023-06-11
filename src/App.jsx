import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Myproject from "./Pages/Myproject";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myproject" element={<Myproject />} />
      </Routes>
    </div>
  );
}

export default App;
