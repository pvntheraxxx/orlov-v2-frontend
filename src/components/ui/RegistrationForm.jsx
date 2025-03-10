import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { FaVk, FaYandex } from "react-icons/fa";

const RegistrationForm = ({ open, onClose }) => {
  // Состояния для полей формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Сброс полей, когда модальное окно закрывается
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  }, [open]);

  const handleRegister = () => {
    if (password !== repeatPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log("Регистрация...");
    onClose(); // Закрытие формы после успешной регистрации
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 10000,
        borderRadius: "15px",
        "& .MuiDialog-paper": {
          width: "350px",
          borderRadius: "15px",
          overflowX: "hidden",
          // bgcolor: "background.paper",
          // bgcolor: "#222222",
          bgcolor: "#181818",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingRight: "16px",
        }}
      >
        <span style={{ userSelect: "none", cursor: "default" }}>
          Регистрация
        </span>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 16,
            top: 10,
            // color: "#F7E733",
            "&:hover": {
              cursor: "pointer",
            },
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
          autoFocus
          margin="dense"
          label="Ваше имя"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          margin="dense"
          label="Электронная почта"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          margin="dense"
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          margin="dense"
          label="Повторите пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
      </DialogContent>

      <DialogActions sx={{ padding: "0 16px", justifyContent: "center" }}>
        <Button
          onClick={handleRegister}
          variant="contained"
          sx={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Зарегистрироваться
        </Button>
      </DialogActions>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          paddingBottom: "16px",
          paddingX: "16px",
          marginTop: "16px",
        }}
      >
        <IconButton
          disableRipple
          disableFocusRipple
          color="inherit"
          sx={{
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <FaYandex size={28} />
        </IconButton>

        <IconButton
          disableRipple
          disableFocusRipple
          color="inherit"
          sx={{
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <FaVk size={28} />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default RegistrationForm;
