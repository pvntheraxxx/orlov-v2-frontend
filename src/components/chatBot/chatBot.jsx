import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

// Анимация текста с сохранением пробелов
const AnimatedText = ({ text }) => {
  const letters = text.split("");
  return (
    <span style={{ display: "inline", whiteSpace: "normal" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function ChatBot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "💼 Консультант Orlov к вашим услугам.\nЗадайте вопрос — я с вами.",
      isIntro: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleClose = () => navigate("/");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Здравствуйте! Добро пожаловать в чат-бот ORLOV. Чем могу помочь?",
          isWelcome: true,
          options: [
            { text: "Отслеживание заказа", value: "tracking" },
            { text: "Оставить заявку", value: "request" },
            { text: "Контакты", value: "contacts" },
          ],
        },
      ]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = await getBotReply(input);
    setMessages((prev) => [...prev, botReply]);
  };

  const handleQuickReply = async (option) => {
    const userMessage = { role: "user", text: option.text };
    setMessages((prev) => [...prev, userMessage]);

    const botReply = await getBotReply(option.value);
    setMessages((prev) => [...prev, botReply]);
  };

  const getBotReply = async (message) => {
    const text = message.toLowerCase();
    if (text.includes("привет")) {
      return { role: "bot", text: "Здравствуйте! Чем могу помочь? 😊" };
    }
    if (text === "tracking") {
      return {
        role: "bot",
        text: "Пожалуйста, введите номер заказа для отслеживания.",
      };
    }
    if (text === "request") {
      return {
        role: "bot",
        text: "Опишите вашу заявку, и мы обязательно с вами свяжемся.",
      };
    }
    if (text === "contacts") {
      return {
        role: "bot",
        text: "Наши контакты: +7 (911) 332 29-17, orlov_brand_777@vk.com",
      };
    }
    if (text.includes("hermes")) {
      return {
        role: "bot",
        text: "Вот элитный чехол Hermes: Премиальная кожа, цена 12 900₽. Хотите оформить заказ?",
      };
    }
    return {
      role: "bot",
      text: "Извините, я пока не понимаю. Уточните запрос, пожалуйста 🙏",
    };
  };

  return (
    <Box
      component={motion.div}
      sx={{
        width: { xs: "100vw", md: 500 },
        height: { xs: "100vh", md: "auto" },
        margin: "0 auto",
        p: { xs: 0, md: 2 },
        backgroundColor: { xs: "#0e0e0e", md: "transparent" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        elevation={8}
        sx={{
          borderRadius: 2,
          bgcolor: "#1a1a1a",
          border: "1px solid #3a3a3a",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            p: { xs: 1, md: 2 },
          }}
        >
          {/* Заголовок + крестик */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#d5c773",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              🛍️ Чат-бот ORLOV
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: "#d5c773" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Сообщения */}
          <Box
            sx={{
              flexGrow: 1,
              height: { xs: "calc(100vh - 280px)", md: 300 },
              overflowY: "auto",
              bgcolor: "#131313",
              borderRadius: 2,
              p: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mb: 1,
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {messages.map((msg, idx) => (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                sx={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  bgcolor: msg.role === "user" ? "#d5c773" : "#2a2a2a",
                  color: msg.role === "user" ? "#181818" : "#d5c773",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "100%",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                }}
              >
                {msg.isIntro ? (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1 }}>🤖</Avatar>
                    <Typography
                      sx={{ whiteSpace: "pre-line", fontSize: "0.9rem" }}
                    >
                      {msg.text}
                    </Typography>
                  </Box>
                ) : (
                  <AnimatedText text={msg.text} />
                )}
                {msg.options && (
                  <Box
                    sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {msg.options.map((option, i) => (
                      <Button
                        key={i}
                        variant="outlined"
                        onClick={() => handleQuickReply(option)}
                        sx={{
                          borderColor: "#d5c773",
                          color: "#000",
                          fontSize: { xs: "0.75rem", md: "0.85rem" },
                          borderRadius: 2,
                        }}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Нижняя панель с иконками и вводом */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <IconButton>
              <AttachFileIcon sx={{ color: "#d5c773" }} />
            </IconButton>
            <IconButton>
              <EmojiEmotionsIcon sx={{ color: "#d5c773" }} />
            </IconButton>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="type your message.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              InputProps={{ style: { color: "#d5c773" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 10,
                  backgroundColor: "#1a1a1a",
                  "& fieldset": { borderColor: "#d5c773", borderRadius: 10 },
                },
              }}
            />
            <IconButton
              onClick={handleSend}
              sx={{
                backgroundColor: "#d5c773",
                color: "#181818",
                borderRadius: 2,
                "&:hover": { backgroundColor: "#c0b05f" },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
