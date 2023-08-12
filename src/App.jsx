import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Formation from "./pages/Formation";
import Competence from "./pages/Competence";
import PersonalInfo from "./pages/PersonalInfo";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <Header/>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/info" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
