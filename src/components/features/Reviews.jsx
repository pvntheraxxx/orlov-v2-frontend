import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  Rating,
  TextField,
  Alert,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { LuxeButton } from "../ui";
import reviewsData from "../../data/reviewsData"; // ← Искусственные отзывы
import { LoginForm } from "../ui"; // проверьте путь

const isVKWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /VK/i.test(userAgent);
};

const ReviewCard = ({ review, index }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <motion.div
      style={{
        cursor: isMobile ? "default" : "pointer",
        perspective: "1000px",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          background: "linear-gradient(145deg, #1e1e1e, #292929)",
          color: "white",
          p: 1,
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: { xs: 180, sm: 200, md: 240 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src={review.avatar}
              alt={review.name}
              sx={{ width: 40, height: 40, mr: 2 }}
              onError={(e) => {
                e.target.src = "/assets/avatars/default.webp";
              }}
            />
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontSize: { xs: "0.8rem", md: "0.9rem" } }}
            >
              {review.name}
              {review.company && `, ${review.company}`}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ flexGrow: 1, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {review.content || review.text}
          </Typography>
          <Rating
            value={review.rating || 5}
            readOnly
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": { color: "#EFE393" },
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

const ReviewsWall = () => {
  const [isVK] = useState(isVKWebView());
  const [realReviews, setRealReviews] = useState([]);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const isAuthenticated = !!localStorage.getItem("access_token");

  // Функция для загрузки настоящих отзывов с сервера
  const fetchReviews = async () => {
    try {
      const res = await fetch(
        "https://orlov-v2-backend.up.railway.app/comments"
      );
      const data = await res.json();
      // Если сервер вернул массив, сохраняем его, иначе оставляем пустой массив
      setRealReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Ошибка при загрузке отзывов:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleAddReview = async () => {
    setError("");
    if (!newReviewName.trim() || !newReviewText.trim()) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        "https://orlov-v2-backend.up.railway.app/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: newReviewName,
            content: newReviewText,
            rating: newReviewRating,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(await res.text());
      }

      setNewReviewName("");
      setNewReviewText("");
      setNewReviewRating(5);
      alert("Спасибо! Ваш отзыв отправлен на модерацию.");
      fetchReviews(); // подгрузить обновлённый список настоящих отзывов
    } catch (err) {
      console.error(err);
      setError("Ошибка при отправке. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        p: { xs: 2, sm: 4, md: 5 },
        mt: { xs: 2, sm: 0 },
        minHeight: "100vh",
        overflow: isVK ? "auto" : "visible",
      }}
    >
      <Toolbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Левая часть: форма для оставления отзыва */}
        <Box sx={{ width: { xs: "100%", md: "300px" } }}>
          <Typography variant="h6" color="white" gutterBottom>
            Оставить отзыв
          </Typography>

          {isAuthenticated ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                variant="filled"
                label="Ваше имя"
                value={newReviewName}
                onChange={(e) => setNewReviewName(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Ваш отзыв"
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                multiline
                rows={3}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Rating
                value={newReviewRating}
                onChange={(e, val) => setNewReviewRating(val)}
                sx={{
                  "& .MuiRating-iconFilled": { color: "#EFE393" },
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              />
              {error && <Typography color="error">{error}</Typography>}
              <LuxeButton onClick={handleAddReview} disabled={loading}>
                {loading ? "Отправка..." : "Добавить"}
              </LuxeButton>
            </Box>
          ) : (
            <Alert severity="warning" sx={{ mt: 2 }}>
              Только зарегистрированные пользователи могут оставлять отзывы.
              <Button onClick={() => setAuthModalOpen(true)} sx={{ mt: 1 }}>
                Войти
              </Button>
            </Alert>
          )}
        </Box>

        {/* Правая часть: список отзывов */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {/* Сначала отображаем искусственные отзывы */}
            {reviewsData.map((review, index) => (
              <Grid item xs={12} sm={6} md={3} key={`artificial-${index}`}>
                <ReviewCard review={review} index={index} />
              </Grid>
            ))}
            {/* Затем добавляем настоящие отзывы с сервера */}
            {realReviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={3} key={`real-${index}`}>
                <ReviewCard
                  review={review}
                  index={reviewsData.length + index}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <LoginForm open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </Box>
  );
};

export default ReviewsWall;
