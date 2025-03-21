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

import aboutUsImage from "../../assets/leadSection/about-us-image.webp";
import contactsImage from "../../assets/leadSection/contacts-image.webp";
import deliveryImage from "../../assets/leadSection/delivery-image.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
  imageUrl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(buttonLink);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
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
                alt="Hero Section Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
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
                alt="Hero Section Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

const AboutPage = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <HeroSection
      title="MADE IN RUSSIA"
      description="В компании ORLOV мы создаем не просто аксессуары - мы создаем символы СТАТУСА, эксклюзивности и индивидуальности. Наша визитная карточка это премиальное обслуживание, где МЫ находим подход к каждому клиенту. Мы тщательно отбираем материалы, гарантируя долговечность и совершенство каждой детали. Наши изделия подчеркивают Ваш СТИЛЬ, дополняя его роскошью и уникальностью."
      buttonText="Перейти в каталог"
      buttonLink="/catalog"
      imagePosition="left"
      imageUrl={aboutUsImage}
    />
  </motion.div>
);

const ContactsPage = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <HeroSection
      title="СВЯЖИТЕСЬ С НАМИ"
      description="Наша команда всегда готова помочь Вам 24/7. Если у Вас есть вопросы о продукции, заказах или сотрудничестве - свяжитесь С НАМИ любым удобным способом! Мы гарантируем оперативность и внимательное отношение к деталям. Мы ЦЕНИМ доверие клиентов к нашей компании и предлагаем форматы общения для достижения совместного результата."
      buttonText="Связаться"
      buttonLink="/contacts"
      imagePosition="left"
      imageUrl={contactsImage}
    />
  </motion.div>
);

const DeliveryPage = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <HeroSection
      title="ДОСТАВКА ПО МИРУ"
      description="Мы обеспечиваем быструю и надежную доставку по России и МИРУ. Наши товары тщательно упаковываются, чтобы гарантировать их сохранность. Выберите любой способ доставки из предложенных вариантов. Если у Вас возникли вопросы по логистике, мы предложим удобные решения в кратчайшие сроки. Мы предлагаем подробное отслеживание и прозрачную консультационную поддержку по товарам."
      buttonText="Подробнее"
      buttonLink="/delivery"
      imagePosition="right"
      imageUrl={deliveryImage}
    />
  </motion.div>
);

export { AboutPage, ContactsPage, DeliveryPage };
