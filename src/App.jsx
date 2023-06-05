import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Myproject from "./Pages/Myproject";
import Navbar from "./Navbar";
import Basicreact from "./Components/Basicreact";
import Landingpage from "./Components/Landingpage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myproject" element={<Myproject />} />
        <Route path="/myproject/basicreact" element={<Basicreact />} />
        <Route path="/myproject/landingpage" element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
