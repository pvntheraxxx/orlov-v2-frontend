import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#181818",
    }}
  >
    <CircularProgress sx={{ color: "#EFE393" }} size={60} />
  </Box>
);

export default Loader;
