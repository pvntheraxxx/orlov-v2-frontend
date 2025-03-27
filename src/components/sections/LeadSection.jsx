import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LeadSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
  imageUrl,
  imageStyles = {}, // Новый пропс для стилей изображения
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Проверяем, указывает ли buttonLink на якорь (начинается с #)
    if (buttonLink.startsWith("#")) {
      const targetId = buttonLink.substring(1); // убираем '#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Допустим, высота вашей шапки 80px
        const navBarHeight = 80;
        // Текущее положение элемента
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        // Вычитаем высоту шапки, чтобы карта была ровно под NavBar
        const offsetPosition = elementPosition - navBarHeight;

        // Мгновенно перемещаемся к нужной позиции
        window.scrollTo({
          top: offsetPosition,
          behavior: "auto", // без плавной анимации
        });
      }
    } else {
      // Иначе, если это не якорь, переходим по маршруту
      navigate(buttonLink);
    }
  };

  return (
    <Box
      component={motion.section}
      variants={itemVariants}
      sx={{
        minHeight: { xs: "100dvh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#181818",
        px: 2,
        pt: { xs: "120px", md: "100px" },
        pb: { xs: "100px", md: "60px" },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {imagePosition === "left" && !isMobile && (
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={imageUrl}
                alt="Lead Section Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: 3,
                  ...imageStyles,
                }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6} textAlign="left">
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#EFE393",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 3,
                color: "#CCCCCC",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              }}
            >
              {description}
            </Typography>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                backgroundColor: "#EFE393",
                color: "#181818",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
              }}
            >
              {buttonText}
            </Button>
          </Grid>
          {imagePosition === "right" && !isMobile && (
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={imageUrl}
                alt="Lead Section Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: 3,
                  ...imageStyles,
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default LeadSection;
