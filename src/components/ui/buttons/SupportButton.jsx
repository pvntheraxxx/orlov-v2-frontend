import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import RoomService from "@mui/icons-material/RoomService";
import Close from "@mui/icons-material/Close";
import ChatBot from "../../bot";
import { AnimatePresence, motion } from "framer-motion";

const SupportButton = () => {
  const [open, setOpen] = useState(false);
  const [chatBotVisible, setChatBotVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    if (open || chatBotVisible) {
      body.style.overflow = "hidden";
      body.style.pointerEvents = "none";
    } else {
      body.style.overflow = "";
      body.style.pointerEvents = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.pointerEvents = "";
    };
  }, [open, chatBotVisible]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBotClick = () => {
    setOpen(false);
    setChatBotVisible(true);
  };

  const handleOrderTracking = () => {
    setOpen(false);
    setChatBotVisible(false);
    navigate("/delivery");
  };

  const handleLeaveRequest = () => {
    // Моментальный переход без задержек
    navigate("/request");
  };

  const handleCloseChatBot = () => {
    setChatBotVisible(false);
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

      <AnimatePresence>
        {(open || chatBotVisible) && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 10001,
              pointerEvents: "auto",
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10002,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                pointerEvents: "auto",
                width: "90%",
                maxWidth: 420,
                backgroundColor: "#1a1a1a",
                color: "#EFE393",
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
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {chatBotVisible && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10003,
              pointerEvents: "auto",
            }}
          >
            <ChatBot onClose={handleCloseChatBot} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportButton;
