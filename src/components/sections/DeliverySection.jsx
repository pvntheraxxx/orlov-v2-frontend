import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { containerVariants } from "./LeadSection";
import DeliveryMap from "../deliveryMap/DeliveryMap";

const DeliverySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    // ======= Мобильная версия =======
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box
          sx={{
            backgroundColor: "#181818",
            color: "#fff",
            pt: 12, // Меньше отступ сверху
            pb: 3, // Меньше отступ снизу
            px: 2,
            textAlign: "center",
          }}
        >
          {/* Заголовок ближе к карте */}
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              mb: -5, // Уменьшаем отступ снизу
            }}
          >
            ДОСТАВКА ПО МИРУ
          </Typography>

          {/* Карта РФ с «обрезанной» высотой */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              mb: 2,
            }}
          >
            {/* Контейнер с overflow: hidden для «обрезки» карты по высоте */}
            <Box sx={{ height: "40vh" }}>
              <DeliveryMap
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* Текст ближе к карте и компактнее */}
          <Typography sx={{ mb: 2 }}>
            Мы обеспечиваем быструю и надёжную доставку по России и МИРУ. Наши
            товары тщательно упаковываются, чтобы гарантировать их сохранность.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Выберите любой способ доставки из предложенных вариантов. Если у Вас
            возникли вопросы по логистике, мы предложим удобные решения в
            кратчайшие сроки.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Мы предлагаем подробное отслеживание и прозрачную консультационную
            поддержку по товарам.
          </Typography>

          {/* Кнопка «Подробнее» */}
          <Button
            href="#"
            sx={{
              backgroundColor: "primary.main",
              color: "#000",
              textTransform: "none",
              maxWidth: 200,
              mx: "auto",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Подробнее
          </Button>
        </Box>
      </motion.div>
    );
  }

  // ======= Десктопная версия (остается как было) =======
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Box
        sx={{
          backgroundColor: "#181818",
          color: "#fff",
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "space-between",
          overflow: "hidden",
          pt: { xs: 12, md: 14 },
          pb: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Левая колонка: карта на всю доступную высоту */}
        <Box
          sx={{
            flex: 2,
            position: "relative",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <DeliveryMap style={{ width: "100%", height: "100%" }} />
          </Box>
        </Box>

        {/* Правая колонка: заголовок, текст и кнопка */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              mb: 3,
            }}
          >
            ДОСТАВКА ПО МИРУ
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Мы обеспечиваем быструю и надёжную доставку по России и МИРУ. Наши
            товары тщательно упаковываются, чтобы гарантировать их сохранность.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Выберите любой способ доставки из предложенных вариантов. Если у Вас
            возникли вопросы по логистике, мы предложим удобные решения в
            кратчайшие сроки.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Мы предлагаем подробное отслеживание и прозрачную консультационную
            поддержку по товарам.
          </Typography>
          <Button
            href="#"
            sx={{
              backgroundColor: "primary.main",
              color: "#000",
              textTransform: "none",
              maxWidth: 200,
              alignSelf: "flex-start",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Подробнее
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default DeliverySection;
