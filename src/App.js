import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

// esse exact não e
 
