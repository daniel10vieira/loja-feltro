import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="mainTitle">Feltro&Mania</h1>

        <nav style={estiloNav}>
          <Link to="/Home" style={estiloLink}>
            Home
          </Link>
          <Link to="/Sobre" style={estiloLink}>
            Sobre
          </Link>
          <Link to="/Produtos" style={estiloLink}>
            Produtos
          </Link>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Estilos opcionais:
const estiloNav = {
  background: "#461450",
  padding: "10px",
  display: "flex",
  gap: "15px",
};

const estiloLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};
