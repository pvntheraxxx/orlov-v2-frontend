import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Rating,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import reviews from "../../data/reviewsData";

// Функция проверки, открыт ли сайт в WebView ВКонтакте
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
      <Card
        sx={{
          background: "linear-gradient(145deg, #1e1e1e, #292929)",
          color: "white",
          p: 1,
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          width: "100%",
          height: { xs: 180, sm: 200, md: 240 },
        }}
      >
        <CardContent
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
                e.target.src = "/assets/avatars/default.webp";
              }}
            />
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontSize: { xs: "0.8rem", md: "0.9rem" } }}
            >
              {review.name}, {review.company}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ flexGrow: 1, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {review.text}
          </Typography>
          <Rating
            value={5}
            readOnly
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": { color: "#EFE393" },
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ReviewsWall = () => {
  const [isVK, setIsVK] = useState(false);

  useEffect(() => {
    setIsVK(isVKWebView());
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        p: { xs: 2, sm: 4, md: 5 },
        mt: { xs: 2, sm: 0 }, // Дополнительный отступ сверху для мобильных
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        overflow: isVK ? "auto" : "visible", // Решение проблемы скролла
        display: isVK ? "flex" : "block", // Исправляем проблемы рендеринга в WebView
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Grid container spacing={3}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ReviewCard review={review} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewsWall;
