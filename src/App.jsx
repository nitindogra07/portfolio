import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";
import ScrollTop from "./universal components/ScrollTop";

export default function App() {
  return (
    <div className="h-fit w-full bg-[#111111]">
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
