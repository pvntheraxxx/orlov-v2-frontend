import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { FaVk, FaYandex } from "react-icons/fa";
import RegistrationForm from "./RegistrationForm";

const LoginForm = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (!open) {
      setEmail("");
      setPassword("");
      setIsRegistering(false);
    }
  }, [open]);

  const handleLogin = () => {
    console.log("Вход в аккаунт...");
    onClose();
  };

  return isRegistering ? (
    <RegistrationForm open={open} onClose={onClose} />
  ) : (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 10000,
        "& .MuiDialog-paper": {
          width: "350px",
          borderRadius: "15px",
          background: "linear-gradient(50deg, #2C2C2C 2%, #2E2E2E 100%)",
          color: "#F7E733",
          border: "1px solid #2A2A2A",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          position: "relative",
          paddingRight: "48px",
        }}
      >
        <Typography variant="h6" sx={{ width: "100%" }}>
          Вход в аккаунт
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          margin="dense"
          label="Электронная почта"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>

      <DialogActions sx={{ padding: "0 16px", justifyContent: "center" }}>
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Войти
        </Button>
      </DialogActions>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          paddingX: "16px",
          paddingTop: "20px",
          paddingBottom: "16px",
          color: "gray",
        }}
      >
        <Typography variant="body2" sx={{ cursor: "pointer" }}>
          Забыли пароль?
        </Typography>
        <Typography
          variant="body2"
          sx={{ cursor: "pointer" }}
          onClick={() => setIsRegistering(true)}
        >
          Зарегистрироваться
        </Typography>
      </Box>
    </Dialog>
  );
};

export default LoginForm;
