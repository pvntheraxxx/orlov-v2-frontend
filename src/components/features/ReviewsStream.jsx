import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import reviews from "../../data/reviewsData";

const COLUMN_COUNT = 4;
const SCROLL_DURATION = 1000;

const ReviewsStream = () => {
  const [columns, setColumns] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const resetTriggeredRef = useRef(false);

  // Обновляем колонки при монтировании
  useEffect(() => {
    setColumns(generateColumns());
  }, []);

  // Обновляем resetKey при смене видимости страницы
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setResetKey((prev) => prev + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Новый эффект: обновляем resetKey при изменении isMobile,
  // чтобы анимация перерендерилась с новыми настройками скорости
  useEffect(() => {
    setResetKey((prev) => prev + 1);
  }, [isMobile]);

  const generateColumns = () => {
    if (!Array.isArray(reviews) || reviews.length === 0) {
      console.error("Ошибка: reviews пуст или не является массивом");
      return Array.from({ length: COLUMN_COUNT }, () => []);
    }

    const cols = Array.from({ length: COLUMN_COUNT }, () => []);
    const shuffled = [...reviews].sort(() => Math.random() - 0.5);
    shuffled.forEach((review, index) => {
      cols[index % COLUMN_COUNT].push(review);
    });

    return cols.map((col, index) =>
      index % 2 === 0 ? col.slice().reverse() : col
    );
  };

  const getExtendedColumn = (col) =>
    Array.isArray(col) ? [...col, ...col] : [];

  const handleLastCardVisible = () => {
    if (!resetTriggeredRef.current) {
      resetTriggeredRef.current = true;
      setResetKey((prev) => prev + 1);
      setTimeout(() => {
        resetTriggeredRef.current = false;
      }, 100);
    }
  };

  const getAnimationProps = (isUp) => ({
    initial: { y: "0%" },
    animate: { y: isUp ? "-50%" : "50%" },
  });

  // На мобильных объединяем все колонки в один столбец
  const renderedColumns = isMobile ? [columns.flat()] : columns;

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#181818",
        padding: 4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {renderedColumns.map((col, colIndex) => {
          if (!Array.isArray(col)) return null; // Фикс ошибки итерации

          const isUp = isMobile ? true : colIndex % 2 === 0;
          const extendedColumn = getExtendedColumn(col);
          const animationProps = getAnimationProps(isUp);

          return (
            <Grid
              item
              key={colIndex}
              xs={12}
              sm={isMobile ? 12 : 6}
              md={isMobile ? 12 : 3}
            >
              <motion.div
                key={`${resetKey}-${colIndex}`}
                initial={animationProps.initial}
                animate={animationProps.animate}
                transition={{
                  duration: isMobile ? SCROLL_DURATION * 4 : SCROLL_DURATION,
                  ease: "linear",
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "24px" : "20px",
                  height: "200%",
                }}
              >
                {extendedColumn.map((review, index) => {
                  if (!review) return null;
                  const isLast = index === extendedColumn.length - 1;
                  return (
                    <motion.div
                      key={index}
                      onViewportEnter={
                        isLast ? handleLastCardVisible : undefined
                      }
                      viewport={{ margin: "0px" }}
                    >
                      <Card
                        sx={{
                          background:
                            "linear-gradient(145deg, #1e1e1e, #292929)",
                          color: "white",
                          padding: 2,
                          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
                          borderRadius: "12px",
                          mb: isMobile ? 3 : 0,
                        }}
                      >
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={1}>
                            <Avatar
                              src={review.avatar}
                              alt={review.name}
                              sx={{ width: 40, height: 40, mr: 2 }}
                              onError={(e) => {
                                console.error(
                                  `Ошибка загрузки аватарки: ${review.avatar}`
                                );
                                e.target.src = "/assets/avatars/default.webp"; // ✅ Заглушка, если нет фото
                              }}
                            />

                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                              {review.name}, {review.company}
                            </Typography>
                          </Box>
                          <Typography variant="body1">
                            "{review.text}"
                          </Typography>
                          <Rating
                            value={5}
                            readOnly
                            precision={0.5}
                            sx={{
                              mt: 1,
                              "& .MuiRating-iconFilled": { color: "#EFE393" },
                            }}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ReviewsStream;
