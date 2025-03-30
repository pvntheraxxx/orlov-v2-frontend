import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ChatBot from "../../components/chatBot/ChatBot"; // ваш бот

const ChatBotPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // При клике на крестик возвращаемся назад или указываем конкретный маршрут
    navigate(-1);
  };

  return <ChatBot />;
};

export default ChatBotPage;
