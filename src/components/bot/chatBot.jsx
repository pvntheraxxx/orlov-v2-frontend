import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BotIcon from "@mui/icons-material/SmartToy";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import EmojiPicker from "emoji-picker-react";

const ChatBot = ({ onClose }) => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const messagesEndRef = useRef(null);

  // автоскролл
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

  // имитация "печатает..." при первом открытии
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ role: "bot", text: "Здравствуйте! Чем могу помочь?" }]);
      setIsTyping(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowEmoji(false);
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
        zIndex: 9999,
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
          <IconButton onClick={onClose}>
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
                  <ListItemText primary={msg.text} />
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
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    <span className="typing">Печатает</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </Typography>
                </Paper>
              </ListItem>
            )}
            <div ref={messagesEndRef} />
          </List>
        </Box>

        {/* INPUT BAR */}
        <Box
          sx={{
            display: "flex",
            p: 1,
            borderTop: "1px solid #333",
            backgroundColor: theme.palette.background.paper,
            position: "relative",
          }}
        >
          <IconButton onClick={() => setShowEmoji((prev) => !prev)}>
            <InsertEmoticonIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>

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
            sx={{
              ml: 1,
              borderRadius: "8px",
            }}
            onClick={handleSend}
            disabled={loading}
          >
            Отправить
          </Button>

          {showEmoji && (
            <Box
              sx={{
                position: "absolute",
                bottom: "64px",
                left: "8px",
                zIndex: 9999,
              }}
            >
              <EmojiPicker
                theme="dark"
                onEmojiClick={(emojiData) =>
                  setInput((prev) => prev + emojiData.emoji)
                }
              />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
