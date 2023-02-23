import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Notebook from "./components/Notebook";
import Predictions from "./components/Predictions";

import Welcome from "./components/Welcome";
//import About from "./components/About";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
