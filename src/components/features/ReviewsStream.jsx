import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import reviews from "../../data/reviewsData";
import { motion } from "framer-motion";

const FlipCard = ({ review, index }) => {
  const [flipped, setFlipped] = useState(false);
  // Состояние для голосования: null, "yes" или "no"
  const [vote, setVote] = useState(null);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleVote = (choice, e) => {
    e.stopPropagation(); // Предотвращаем переворот карточки при клике по кнопке
    setVote(choice);
  };

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <motion.div
      onClick={handleFlip}
      style={{ cursor: "pointer", perspective: "1000px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <motion.div
        animate={flipped ? "back" : "front"}
        variants={variants}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Лицевая сторона карточки */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <Card
            sx={{
              background: "linear-gradient(145deg, #1e1e1e, #292929)",
              color: "white",
              padding: 1,
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
              borderRadius: "12px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  src={review.avatar}
                  alt={review.name}
                  sx={{ width: 40, height: 40, mr: 2 }}
                  onError={(e) => {
                    console.error(`Ошибка загрузки аватарки: ${review.avatar}`);
                    e.target.src = "/assets/avatars/default.webp";
                  }}
                />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {review.name}, {review.company}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 2, flexGrow: 1 }}>
                "{review.text}"
              </Typography>
              <Rating
                value={5}
                readOnly
                precision={0.5}
                sx={{
                  mt: 2,
                  alignSelf: "flex-start",
                  "& .MuiRating-iconFilled": { color: "#EFE393" },
                }}
              />
            </CardContent>
          </Card>
        </Box>

        {/* Обратная сторона карточки с опросом (всё по центру) */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            sx={{
              background: "linear-gradient(145deg, #292929, #1e1e1e)",
              color: "white",
              padding: 1,
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
              borderRadius: "12px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Был ли этот отзыв полезен?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color={vote === "yes" ? "success" : "primary"}
                  onClick={(e) => handleVote("yes", e)}
                  disabled={vote !== null}
                >
                  Да
                </Button>
                <Button
                  variant="contained"
                  color={vote === "no" ? "error" : "primary"}
                  onClick={(e) => handleVote("no", e)}
                  disabled={vote !== null}
                >
                  Нет
                </Button>
              </Box>
              {vote && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Спасибо за ваш голос!
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </motion.div>
  );
};

const ReviewsWall = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        padding: 5,
        minHeight: "100vh",
      }}
    >
      {/* Spacer для отступа от NavBar */}
      <Toolbar />
      <Grid container spacing={3}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlipCard review={review} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewsWall;
