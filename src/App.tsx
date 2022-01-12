import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tanding from "./pages/Tanding";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tanding />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
