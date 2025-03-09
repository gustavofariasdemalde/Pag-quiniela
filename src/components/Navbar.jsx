

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function NavBar({ title }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const pages = [
    { name: "Inicio", path: "/" },
    { name: "Usuario", path: "/usuario" },
    { name: "Administrador", path: "/administrador" },
    { name: "Empresa", path: "/empresa" },
  ];

  // No eliminar "Inicio" del menú
  
  const filteredPages = pages.filter((page) => {
    if (location.pathname === "/" && page.path === "/") return false; // Ocultar "Inicio" cuando estamos en "Inicio"
    return page.path !== location.pathname;
  });
  
  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: "transparent",
          boxShadow: "none", 
          padding: "0.5px"
        }}
        
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          
          <span style={{ fontSize: "22px", fontWeight: "bold", color: "rgba(32, 32, 77, 0.8)" }}>
            {title || (!["/empresa", "/administrador","/inicio","/usuario"].includes(location.pathname) && pages.find((page) => page.path === location.pathname)?.name)}
          </span>
          <div>
            <IconButton color="inherit" sx={{ p: 0, mr: 2 }}>
              <SearchIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton 
              color="inherit" 
              onClick={() => setOpen(true)} 
              sx={{ p: 0, color: "#000" }} 
            >
              <MenuIcon sx={{ fontSize: 30, color: "#333" }} />  {/* Asegurar visibilidad */}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={() => setOpen(false)} 
        sx={{ "& .MuiDrawer-paper": { backgroundColor:"rgba(200, 200, 223, 0.8)" , color: "#000" } }}
      >
        <List>
          {filteredPages.map((page) => (
            <ListItemButton component={Link} to={page.path} key={page.name} onClick={() => setOpen(false)}>
            
              <ListItemText primary={page.name} sx={{ textAlign: "center" }} />  {/* Color oscuro para texto */}
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Margen para evitar que el contenido se superponga con la barra */}
      <div style={{ marginTop: "80px" }}></div> 
    </>
  );
}

export default NavBar;