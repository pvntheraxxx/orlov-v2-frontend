import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BotIcon from "@mui/icons-material/SmartToy";
import Markdown from "markdown-to-jsx";

const ChatBot = ({ onClose }) => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const messagesEndRef = useRef(null);

  // Блокируем скролл и взаимодействие
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    return () => {
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    };
  }, []);

  // Приветствие и звук
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          role: "bot",
          text: "Здравствуйте! Я ваш ИИ-ассистент. Готов ответить на любые вопросы.",
        },
      ]);
      setIsTyping(false);

      const audio = new Audio("/assets/sounds/bot-notification.mp3");
      audio.volume = 0.7;
      audio
        .play()
        .catch((e) =>
          console.warn("Не удалось воспроизвести звук приветствия:", e.message)
        );
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://orlov-v2-backend.up.railway.app/yandex/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMsg.text }),
        }
      );

      if (!res.ok) throw new Error("Ошибка при обращении к бэкенду");

      const data = await res.json();

      const audio = new Audio("/assets/sounds/bot-notification.mp3");
      audio.volume = 0.7;
      audio
        .play()
        .catch((e) =>
          console.warn("Не удалось воспроизвести звук ответа:", e.message)
        );

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Ошибка запроса:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Произошла ошибка при получении ответа." },
      ]);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,

        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 2,
        [theme.breakpoints.up("sm")]: {
          alignItems: "center",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%", sm: 500, md: 480 },
          height: { xs: "100%", sm: "85vh", md: "70vh", lg: "65vh" },
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          pointerEvents: "auto",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h6">Orlov ИИ-ассистент</Typography>
          <IconButton
            onClick={() => {
              onClose();
              document.body.style.overflow = "";
              document.body.style.pointerEvents = "";
            }}
          >
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>

        {/* CHAT */}
        <Box sx={{ flex: 1, p: 2, overflowY: "auto" }}>
          <List>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent:
                    msg.role === "bot" ? "flex-start" : "flex-end",
                  alignItems: "flex-start",
                }}
              >
                {msg.role === "bot" && (
                  <Avatar
                    sx={{
                      bgcolor: "#EFE393",
                      width: 32,
                      height: 32,
                      mr: 1,
                      mt: "4px",
                    }}
                  >
                    <BotIcon fontSize="small" />
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: "75%",
                    backgroundColor:
                      msg.role === "bot"
                        ? theme.palette.background.default
                        : theme.palette.corporate?.surface || "#3A3A3A",
                    color: theme.palette.text.primary,
                    borderRadius: 2,
                  }}
                >
                  <Markdown
                    options={{
                      forceBlock: true,
                      overrides: {
                        strong: {
                          component: "strong",
                          props: { style: { fontWeight: 600 } },
                        },
                        em: {
                          component: "em",
                          props: { style: { fontStyle: "italic" } },
                        },
                        del: {
                          component: "del",
                          props: { style: { textDecoration: "line-through" } },
                        },
                        p: {
                          component: Typography,
                          props: { variant: "body2", sx: { m: 0 } },
                        },
                      },
                    }}
                  >
                    {msg.text}
                  </Markdown>
                </Paper>
              </ListItem>
            ))}
            {(loading || isTyping) && (
              <ListItem sx={{ justifyContent: "flex-start" }}>
                <Avatar
                  sx={{
                    bgcolor: "#EFE393",
                    width: 32,
                    height: 32,
                    mr: 1,
                    mt: "4px",
                  }}
                >
                  <BotIcon fontSize="small" />
                </Avatar>
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: "75%",
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "24px",
                      gap: "4px",
                      "& .dot": {
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.text.primary,
                        animation: "telegramBlink 1.3s infinite ease-in-out",
                      },
                      "& .dot:nth-of-type(2)": {
                        animationDelay: "0.2s",
                      },
                      "& .dot:nth-of-type(3)": {
                        animationDelay: "0.4s",
                      },
                      "@keyframes telegramBlink": {
                        "0%, 80%, 100%": {
                          transform: "scale(1)",
                          opacity: 0.3,
                        },
                        "40%": {
                          transform: "scale(1.4)",
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </Box>
                </Paper>
              </ListItem>
            )}
            <div ref={messagesEndRef} />
          </List>
        </Box>

        {/* INPUT */}
        <Box
          sx={{
            display: "flex",
            p: 1,
            borderTop: "1px solid #333",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Напишите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 1, borderRadius: "8px" }}
            onClick={handleSend}
            disabled={loading}
          >
            Отправить
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
