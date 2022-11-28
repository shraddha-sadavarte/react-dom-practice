
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
