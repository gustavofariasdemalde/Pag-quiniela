
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const UsuarioR = () => { // ✅ Nombre corregido
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    telefono: "",
    dni: "",
    direccion: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Datos ingresados:", formData);
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        mt: 1, 
        ml: 50, // Desplaza a la derecha 
        p: 2, 
        maxWidth: "400px" // Reduce el ancho máximo 
      }}
    >
      <Typography variant="h6" textAlign="center" gutterBottom>
        Registro
      </Typography>

      {/* Campos del formulario */}
      <TextField fullWidth label="Email" name="email" type="email" margin="dense" onChange={handleChange} />
      <TextField fullWidth label="Contraseña" name="password" type="password" margin="dense" onChange={handleChange} />
      <TextField fullWidth label="Nombre" name="nombre" margin="dense" onChange={handleChange} />
      <TextField fullWidth label="Apellido" name="apellido" margin="dense" onChange={handleChange} />

      {/* Información personal opcional */}
      <Typography variant="subtitle2" mt={1} gutterBottom>
        Información personal (opcional)
      </Typography>
      <TextField fullWidth label="Teléfono" name="telefono" margin="dense" onChange={handleChange} />
      <TextField fullWidth label="DNI" name="dni" margin="dense" onChange={handleChange} />
      <TextField fullWidth label="Dirección" name="direccion" margin="dense" onChange={handleChange} />

      {/* Botones */}
      <Box mt={1}>
        <Button fullWidth variant="contained" color="warning" onClick={handleSubmit}>
          Registrar
        </Button>
      </Box>
      <Box mt={1}>
        <Button fullWidth variant="outlined">
          Iniciar sesión
        </Button>
      </Box>

      {/* Nota */}
      <Typography variant="body2" color="text.secondary" textAlign="center" mt={1}>
        Puedes omitir los últimos campos por ahora. Es posible que se te solicite esta información más adelante.
      </Typography>
    </Container>
  );
};

export default UsuarioR; // ✅ Exportación corregida
