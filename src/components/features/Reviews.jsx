import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  Rating,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import reviewsData from "../../data/reviewsData";

// Функция проверки, открыт ли сайт в WebView ВКонтакте
const isVKWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /VK/i.test(userAgent);
};

// Компонент карточки отзыва
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
                console.error(`Не удалось загрузить аватар: ${review.avatar}`);
                e.target.src = "/assets/avatars/default.webp"; // fallback
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
            {review.text}
          </Typography>
          <Rating
            value={review.rating || 5} // Если нет поля rating, берём 5 по умолчанию
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
  const [isVK, setIsVK] = useState(false);

  // Локальное состояние для списка отзывов
  const [reviewList, setReviewList] = useState(reviewsData);

  // Поля формы для нового отзыва
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);

  useEffect(() => {
    setIsVK(isVKWebView());
  }, []);

  // Добавление нового отзыва в локальный список
  const handleAddReview = () => {
    // Проверяем, чтобы поля не были пустыми
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const newReview = {
      name: newReviewName,
      text: newReviewText,
      rating: newReviewRating,
      avatar: "", // Можно задать свой дефолтный аватар
      company: "", // Или сделать поле в форме, если нужно
    };

    setReviewList([...reviewList, newReview]);

    // Сбрасываем поля формы
    setNewReviewName("");
    setNewReviewText("");
    setNewReviewRating(5);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        p: { xs: 2, sm: 4, md: 5 },
        mt: { xs: 2, sm: 0 }, // Дополнительный отступ сверху для мобильных
        minHeight: "100vh",
        overflow: isVK ? "auto" : "visible", // Решение проблемы скролла во VK WebView
        display: isVK ? "flex" : "block",
        flexDirection: "column",
      }}
    >
      {/* Toolbar для отступа под фиксированным Navbar (если есть) */}
      <Toolbar />

      {/* Сетка отзывов */}
      <Grid container spacing={3}>
        {reviewList.map((review, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ReviewCard review={review} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Форма для добавления нового отзыва */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" color="white" gutterBottom>
          Оставить отзыв
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "400px",
          }}
        >
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
            name="new-review-rating"
            value={newReviewRating}
            onChange={(event, newValue) => {
              setNewReviewRating(newValue);
            }}
            sx={{
              "& .MuiRating-iconFilled": { color: "#EFE393" },
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          />
          <Button variant="contained" onClick={handleAddReview}>
            Добавить
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsWall;
