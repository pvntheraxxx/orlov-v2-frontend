import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Grow,
  Grid,
} from "@mui/material";
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

const ContactsSection = () => {
  const { isMd } = useResponsive();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const buttonStyles = {
    minWidth: 250,
    backgroundColor: "#EFE393",
    color: "#1E1E1E",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e0d57d",
    },
  };

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
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Название */}
            {/* <Typography variant="h5" fontWeight="bold">
              ORLOV brand
            </Typography> */}

            {/* Заголовок */}
            <Typography variant="h4" fontWeight="bold">
              СВЯЖИТЕСЬ С НАМИ
            </Typography>

            {/* Герб */}
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

            {/* Текст */}
            <Typography
              sx={{ fontSize: "1rem", lineHeight: 1.6, maxWidth: 600 }}
            >
              Наша команда всегда готова помочь Вам 24/7. Если у Вас есть
              вопросы о продукции, заказах или сотрудничестве – свяжитесь С НАМИ
              любым удобным способом! Мы гарантируем оперативность и
              внимательное отношение к деталям. ЦЕНИМ доверие клиентов к нашей
              компании и предлагаем форматы общения для достижения совместного
              результата.
            </Typography>

            {/* Кнопки */}
            <Stack spacing={1.5}>
              <Button
                startIcon={
                  !isMd && copiedField === "email" ? (
                    <Grow in>
                      <CheckCircle sx={{ color: "green" }} />
                    </Grow>
                  ) : (
                    <Email />
                  )
                }
                variant="contained"
                size="large"
                sx={buttonStyles}
                onClick={() =>
                  isMd
                    ? (window.location.href = "mailto:orlov_brand_777@vk.com")
                    : handleCopy("orlov_brand_777@vk.com", "email")
                }
              >
                {!isMd && copiedField === "email"
                  ? "Почта скопирована"
                  : "orlov_brand_777@vk.com"}
              </Button>

              <Button
                startIcon={
                  !isMd && copiedField === "phone" ? (
                    <Grow in>
                      <CheckCircle sx={{ color: "green" }} />
                    </Grow>
                  ) : (
                    <Phone />
                  )
                }
                variant="contained"
                size="large"
                sx={buttonStyles}
                onClick={() =>
                  isMd
                    ? (window.location.href = "tel:+79113322917")
                    : handleCopy("+7 (911) 332 29-17", "phone")
                }
              >
                {!isMd && copiedField === "phone"
                  ? "Номер скопирован"
                  : "+7 (911) 332 29-17"}
              </Button>
            </Stack>

            {/* Мессенджеры */}
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

            {/* Подпись */}
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
              Orlov — Точность. Эстетика. Индивидуальность.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsSection;
