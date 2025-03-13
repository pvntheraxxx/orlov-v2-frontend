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
  imagePosition,
  imageUrl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={motion.section}
      variants={itemVariants}
      sx={{
        minHeight: {
          xs: "100dvh", // Динамическая высота для мобильных устройств
          md: "100vh", // Полный экран на компьютерах без перекрытия Footer
        },
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
      title="Искусство Элегантности"
      description="В Orlov мы создаем не просто аксессуары – мы создаем символы статуса, эксклюзивности и индивидуальности. Качество – наш приоритет. Мы тщательно отбираем материалы, гарантируя долговечность и совершенство каждой детали. Наши изделия подчеркивают ваш стиль, дополняя его роскошью и уникальностью."
      buttonText="Перейти в каталог"
      imagePosition="left"
      imageUrl={aboutUsImage}
    />
  </motion.div>
);

const ContactsPage = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <HeroSection
      title="Свяжитесь с нами"
      description="Наша команда всегда готова помочь вам. Если у вас есть вопросы о продукции, заказах или сотрудничестве – свяжитесь с нами любым удобным способом. Мы гарантируем оперативность и внимательное отношение к каждому клиенту. Мы высоко ценим доверие и предлагаем форматы общения для совместного успеха!"
      buttonText="Связаться"
      imagePosition="left"
      imageUrl={contactsImage}
    />
  </motion.div>
);

const DeliveryPage = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <HeroSection
      title="Доставка"
      description="Мы обеспечиваем быструю и надежную доставку по всему миру. Наши товары тщательно упаковываются, чтобы гарантировать их сохранность. Если у вас возникли вопросы по возврату, мы предложим удобные решения в кратчайшие сроки. Мы также предлагаем подробное отслеживание и прозрачную консультационную поддержку."
      buttonText="Подробнее"
      imagePosition="right"
      imageUrl={deliveryImage}
    />
  </motion.div>
);

export { AboutPage, ContactsPage, DeliveryPage };
