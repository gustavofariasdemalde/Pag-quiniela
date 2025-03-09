
import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Usuario = () => {
  const navigate = useNavigate(); // ✅ Solo se define una vez

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      height="100vh" 

  
    
    
    
      maxWidth="xs" 
      sx={{ 
        mt: 1, 
        ml: 60, // Desplaza a la derecha 
        p: 2, 
        maxWidth: "400px" // Reduce el ancho máximo 
      }}
    >
      <Typography variant="h5" textAlign="center">Acceso</Typography>
      <TextField label="Email" type="email" fullWidth variant="outlined" />
      <TextField label="Contraseña" type="password" fullWidth variant="outlined" />
      
      <Button variant="contained" color="warning" fullWidth>
        Iniciar sesión
      </Button>

      <Button variant="outlined" fullWidth onClick={() => navigate("/usuarioR")}> 
        Registrar
      </Button>

      <Button variant="outlined" fullWidth onClick={() => navigate("/usuarioRC")}> 
        Recuperar contraseña
      </Button>
    </Box>
  );
};

export default Usuario;

