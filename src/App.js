import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";

function App() {


  return (
    <Router>      
      <ul>
        <li>
          <Link to="/">Home</Link>          
        </li>
        <li>
          <Link to="/Empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/Contato">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

 
 
