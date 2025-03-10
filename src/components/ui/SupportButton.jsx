import React, { useState } from "react";
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

  return (
    <>
      {/* Фиксированная кнопка */}
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
          outline: "none", // 🔥 Убираем фокусный контур
          "&:focus": { outline: "none" }, // 🔥 Убираем для всех состояний
          "&:focusVisible": { outline: "none" },
        }}
        onClick={() => setOpen(true)}
      >
        <RoomService sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>

      {/* Модальное окно */}
      <Modal
        sx={{ zIndex: 10000 }}
        open={open}
        onClose={() => setOpen(false)}
        disableAutoFocus
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh", // Центрирование по высоте
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: 400 },
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Как мы можем помочь?</Typography>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>

            <Box mt={2}>
              <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                Отслеживание заказа
              </Button>
              <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                Чат с поддержкой
              </Button>
              <Button fullWidth variant="outlined">
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
