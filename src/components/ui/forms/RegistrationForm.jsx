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
import { API_BASE_URL } from "../../../config";

const RegistrationForm = ({ open, onClose }) => {
  // Состояния для полей формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalHeight, setModalHeight] = useState("auto");

  // Следим за изменением высоты экрана (чтобы не сжималась форма)
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight < 700 ? "90vh" : "auto";
      setModalHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Сброс полей при закрытии модального окна
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  }, [open]);

  // Функция для логина после регистрации
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("✅ Авторизован:", data);
        // Например, сохранить токен:
        // localStorage.setItem("token", data.token);
      } else {
        alert(
          `❌ Ошибка при авторизации: ${data.message || "Неизвестная ошибка"}`
        );
      }
    } catch (error) {
      console.error("❌ Ошибка сети при авторизации:", error);
      alert("❌ Ошибка сети, попробуйте снова.");
    }
  };

  // Функция для регистрации
  const handleRegister = async () => {
    if (password !== repeatPassword) {
      alert("❌ Пароли не совпадают!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Подтверждение об удачной регистрации
        alert("✅ Регистрация прошла успешно!");
        console.log("✅ Регистрация успешна:", data);
        // После успешной регистрации сразу логинимся:
        await handleLogin();
        onClose(); // Закрываем модальное окно или делаем другую логику
      } else {
        alert(`❌ Ошибка: ${data.message || "Неизвестная ошибка"}`);
      }
    } catch (error) {
      console.error("❌ Ошибка сети при регистрации:", error);
      alert("❌ Ошибка сети, попробуйте снова.");
    }
  };

  return (
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingRight: "16px",
        }}
      >
        <Typography variant="h6" sx={{ width: "100%" }}>
          Регистрация
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 16,
            top: 10,
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
          autoFocus
          margin="dense"
          label="Ваше имя"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setModalHeight("90vh")}
        />
        <TextField
          margin="dense"
          label="Электронная почта"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setModalHeight("90vh")}
        />
        <TextField
          margin="dense"
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setModalHeight("90vh")}
        />
        <TextField
          margin="dense"
          label="Повторите пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          onFocus={() => setModalHeight("90vh")}
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
            "&:hover": { backgroundColor: "primary.dark" },
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
          sx={{
            color: "primary.main",
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <FaYandex size={28} />
        </IconButton>

        <IconButton
          disableRipple
          disableFocusRipple
          sx={{
            color: "primary.main",
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <FaVk size={28} />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default RegistrationForm;
