import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const AuthStatus = () => {
  const token = localStorage.getItem("access_token");
  const isAuthenticated = !!token;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="body2" color="white">
        Статус:
      </Typography>
      {isAuthenticated ? (
        <Chip
          label="Авторизован"
          color="success"
          icon={<CheckCircleIcon />}
          sx={{ fontWeight: "bold", color: "white" }}
        />
      ) : (
        <Chip
          label="Гость"
          color="error"
          icon={<HighlightOffIcon />}
          sx={{ fontWeight: "bold", color: "white" }}
        />
      )}
    </Box>
  );
};

export default AuthStatus;
