


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // Importar NavBar
import Usuario from "./pages/Usuario";
import UsuarioR from "./pages/UsuarioR";
import UsuarioRC from "./pages/UsuarioRC";
import Administrador from "./pages/Administrador";
import Empresa from "./pages/Empresa";
import logo from "./assets/logo.png"; // Importa la imagen
import { Typography } from "@mui/material"; // Asegúrate de importar Typography si usas Material UI

function App() {
  return (
    <Router>
      {/* Agregar NavBar para que aparezca en todas las páginas */}
      <NavBar />

      {/* Contenedor del logo */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "20%",
          transform: "translateX(-80%)",
        }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            width: "75px", 
            filter: "contrast(100%) brightness(100%)",
          }} 
        />
      </div>

      {/* Contenedor del título */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40%",
          transform: "translateX(-20%)",
          width: "50%",
          textAlign: "center", 
        }}
      >
        <Typography 
          variant="h2" 
          style={{ 
            fontSize: "34px", 
            color: "#000", // Forzar color negro
            fontWeight: "bold"
          }}
        >
           Trabajo
        </Typography>
      </div>

      {/* Rutas */}
    
      <Routes>
        <Route path="/" element={<div>Bienvenido a Inicio</div>} />
        <Route path="/usuario" element={<Usuario />} />  {/* ✅ Esto está bien */}
        <Route path="/usuarioR" element={<UsuarioR />} />
        <Route path="/usuarioRC" element={<UsuarioRC />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </Router>
  );
}

export default App;


