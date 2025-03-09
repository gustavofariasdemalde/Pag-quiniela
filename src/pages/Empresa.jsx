



import NavBar from "../components/NavBar";
import { Typography, Box } from "@mui/material";

function Empresa() {
  return (
    <>
      <NavBar title="Empresa" />
      <Box
        sx={{
          
          position: "absolute",
          top: "400px",
          left: "40%",
          transform: "translateX(-50%)",
          width: "10%",
          textAlign: "center", // Centrar el texto"
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "24px" }}>
          Empresa
        </Typography>
      </Box>
    </>
  );
}

export default Empresa;


