import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
//import About from "./components/About";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
