import React, { useState } from "react";
import { Box, Typography, Stack, IconButton, Grow, Grid } from "@mui/material";
import {
  Telegram,
  WhatsApp,
  Phone,
  Email,
  CheckCircle,
} from "@mui/icons-material";
import { FaVk } from "react-icons/fa";
import contactsImage from "../../assets/leadSection/contacts3.svg";
import { useResponsive } from "../../hooks/useResponsive";
import { LuxeButton } from "../ui"; // проверьте корректность пути импорта

const ContactsSection = () => {
  const { isMd } = useResponsive(); // true – мобильное устройство, false – компьютер
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Объект для переопределения hover-стиля (без увеличения)
  const noScaleHover = {
    "&:hover": { transform: "none", backgroundColor: "#F7F0C3" },
  };

  // Заголовок и описание
  const header = (
    <Typography variant="h4" fontWeight="bold">
      СВЯЖИТЕСЬ С НАМИ
    </Typography>
  );

  const description = (
    <Typography
      sx={{ fontSize: "1rem", lineHeight: 1.6, maxWidth: 600 }}
      variant="body2"
      color="text.secondary"
    >
      Наша команда всегда готова помочь Вам 24/7. Если у Вас есть вопросы о
      продукции, заказах или сотрудничестве – свяжитесь с нами любым удобным
      способом! Мы гарантируем оперативность и внимательное отношение к деталям.
      Ценим доверие клиентов к нашей компании и предлагаем форматы общения для
      достижения совместного результата.
    </Typography>
  );

  // Messenger-иконки
  const messengerIcons = (
    <Stack direction="row" spacing={2}>
      <IconButton
        component="a"
        href="https://t.me/ORLOV_brand777"
        target="_blank"
        sx={{ color: "#EFE393" }}
      >
        <Telegram fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://vk.com/orlov_brand777"
        target="_blank"
        sx={{ color: "#EFE393" }}
      >
        <FaVk size={28} />
      </IconButton>
      <IconButton
        component="a"
        href="https://wa.me/89210428777"
        target="_blank"
        sx={{ color: "#EFE393" }}
      >
        <WhatsApp fontSize="large" />
      </IconButton>
    </Stack>
  );

  // Подпись
  const signature = (
    <Typography variant="caption" sx={{ opacity: 0.6 }}>
      Orlov — Точность. Эстетика. Индивидуальность.
    </Typography>
  );

  // Кнопка Email
  const emailButton = !isMd ? (
    // Компьютер: копирование почты с появлением текста и иконки
    <LuxeButton
      onClick={() => handleCopy("orlov_brand_777@vk.com", "email")}
      sx={noScaleHover}
    >
      {copiedField === "email" ? (
        <>
          <Grow in>
            <CheckCircle sx={{ color: "green", mr: 1 }} />
          </Grow>
          Почта скопирована
        </>
      ) : (
        <>
          <Email sx={{ mr: 1 }} />
          orlov_brand_777@vk.com
        </>
      )}
    </LuxeButton>
  ) : (
    // Мобильный: сразу открывается почтовый клиент
    <LuxeButton
      onClick={() => (window.location.href = "mailto:orlov_brand_777@vk.com")}
    >
      <>
        <Email sx={{ mr: 1 }} />
        orlov_brand_777@vk.com
      </>
    </LuxeButton>
  );

  // Кнопка Phone
  const phoneButton = !isMd ? (
    // Компьютер: копирование номера с появлением текста и иконки
    <LuxeButton
      onClick={() => handleCopy("+7 (911) 332 29-17", "phone")}
      sx={noScaleHover}
    >
      {copiedField === "phone" ? (
        <>
          <Grow in>
            <CheckCircle sx={{ color: "green", mr: 1 }} />
          </Grow>
          Телефон скопирован
        </>
      ) : (
        <>
          <Phone sx={{ mr: 1 }} />
          +7 (911) 332 29-17
        </>
      )}
    </LuxeButton>
  ) : (
    // Мобильный: сразу осуществляется звонок
    <LuxeButton onClick={() => (window.location.href = "tel:+79113322917")}>
      <>
        <Phone sx={{ mr: 1 }} />
        +7 (911) 332 29-17
      </>
    </LuxeButton>
  );

  // Контейнер для герба в десктопной версии
  const desktopEmblem = (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        position: "relative",
        height: "500px", // фиксированная высота для контейнера герба
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={contactsImage}
        alt="Герб Orlov"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Grid>
  );

  // Герб для мобильной версии (без изменений)
  const mobileEmblem = (
    <Box
      component="img"
      src={contactsImage}
      alt="Герб Orlov"
      sx={{
        width: "auto",
        height: { xs: 220, sm: 280, md: 300 },
        maxHeight: 360,
        objectFit: "contain",
      }}
    />
  );

  // Правая колонка для десктопа (заголовок, описание, кнопки, иконки, подпись)
  const desktopRightContent = (
    <Grid item xs={12} md={6}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        {header}
        {description}
        <Stack spacing={1.5} direction="column">
          {emailButton}
          {phoneButton}
        </Stack>
        {messengerIcons}
        {signature}
      </Stack>
    </Grid>
  );

  // Мобильная версия: порядок элементов – заголовок, герб, описание с кнопками, иконками и подписью
  const mobileContent = (
    <Stack spacing={4} alignItems="center" textAlign="center">
      {header}
      {mobileEmblem}
      <Stack spacing={4} alignItems="center" textAlign="center">
        {description}
        <Stack spacing={1.5} direction="column">
          {emailButton}
          {phoneButton}
        </Stack>
        {messengerIcons}
        {signature}
      </Stack>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={{
        marginTop: 4.6,
        bgcolor: "#1E1E1E",
        color: "#EFE393",
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          {!isMd ? (
            <Grid container spacing={4} alignItems="center">
              {desktopEmblem}
              {desktopRightContent}
            </Grid>
          ) : (
            mobileContent
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsSection;
