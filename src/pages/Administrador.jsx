

import NavBar from "../components/NavBar";
import { Typography, Box } from "@mui/material";

function Administrador() {
  return (
    <>
      <NavBar title="Administrador" />
      <Box
        sx={{
        
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "400px",
          left: "40%",
          transform: "translateX(-50%)",
          width: "50%",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "24px" }}>
          Administrador
        </Typography>
      </Box>
    </>
  );
}

export default Administrador;
