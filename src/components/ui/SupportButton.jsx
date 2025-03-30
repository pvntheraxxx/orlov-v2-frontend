import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import RoomService from "@mui/icons-material/RoomService";
import Close from "@mui/icons-material/Close";

const SupportButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // При клике на "Бот" закрываем модальное окно и переходим на страницу чат-бота
  const handleBotClick = () => {
    setOpen(false);
    navigate("/chatbot");
  };

  // Функция для отслеживания заказа
  const handleOrderTracking = () => {
    setOpen(false);
    navigate("/delivery");
  };

  // Функция для обработки нажатия кнопки "Оставить заявку"
  const handleLeaveRequest = () => {
    setOpen(false);
    navigate("/contacts");
  };

  return (
    <>
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 20 },
          right: 20,
          zIndex: 1000,
          width: { xs: 40, md: 56 },
          height: { xs: 40, md: 56 },
          minHeight: "auto",
          outline: "none",
          "&:focus": { outline: "none" },
          "&:focusVisible": { outline: "none" },
        }}
        onClick={handleOpen}
      >
        <RoomService sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>

      <Modal open={open} onClose={handleClose} disableAutoFocus>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: 420 },
              bgcolor: "#1a1a1a",
              color: "#EFE393",
              boxShadow: 24,
              borderRadius: 2,
              p: 3,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Как мы можем помочь?</Typography>
              <IconButton onClick={handleClose} sx={{ color: "#EFE393" }}>
                <Close />
              </IconButton>
            </Box>

            <Box mt={2}>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 1, borderColor: "#EFE393" }}
                onClick={handleOrderTracking}
              >
                Отслеживание заказа
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 1, borderColor: "#EFE393" }}
                onClick={handleBotClick}
              >
                Бот
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ borderColor: "#EFE393" }}
                onClick={handleLeaveRequest}
              >
                Оставить заявку
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SupportButton;
