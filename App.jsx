import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";  // must match file name exactly

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;