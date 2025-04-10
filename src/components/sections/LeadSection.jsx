import React from "react";
import { Box, Container, Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { LuxeButton } from "../ui/"; // 💡 Убедись, что путь корректный

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
  imageStyles = {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonLink.startsWith("#")) {
      const targetId = buttonLink.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navBarHeight = 80;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navBarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "auto",
        });
      }
    } else {
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

            {/* ✅ Кастомная кнопка */}
            <LuxeButton onClick={handleButtonClick}>{buttonText}</LuxeButton>
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
