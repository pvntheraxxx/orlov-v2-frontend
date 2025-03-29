import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../hooks/useResponsive";
import Logo from "../../assets/heroSection/Logo3.svg?react";
import backgroundImage from "../../assets/heroSection/background4.webp";
import { NAVBAR_HEIGHT } from "../../constants/layout";

const HeroSection = () => {
  const { isSm, isMd, isLg } = useResponsive();

  // Условие для «средних» устройств (iPad Pro, Surface и т.д.)
  // По умолчанию в Material UI:
  // sm ~ до 600px, md ~ 600-900px, lg ~ 900-1200px, xl ~ 1200-1536px
  // Но если у вас переопределены брейкпоинты, подстройте это условие под реальные цифры.
  const isMiddleDevice = isMd || isLg; // Планшеты и часть ноутбуков

  // Размер логотипа (не меняем, либо при желании чуть корректируем)
  const logoSize = isSm
    ? { width: "80%", maxHeight: "45vh" }
    : isMd
    ? { width: "65%", maxHeight: "50vh" }
    : isLg
    ? { width: "30%", maxHeight: "60vh" }
    : { width: "30%", maxHeight: "65vh" };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      zIndex={10}
      px={2}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        flexShrink: 0,
        // Верхний отступ под Navbar
        pt: `${NAVBAR_HEIGHT}px`,
        // Минимальная высота
        minHeight: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.35))",
          zIndex: 2,
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexGrow={1}
        zIndex={2}
        // Базовый вертикальный отступ 4
        py={4}
        // Управляем выравниванием в зависимости от брейкпоинтов:
        // - На мобильных (sm) центрируем
        // - На планшетах и ноутбуках (md, lg) тоже центрируем, чтобы убрать лишний разрыв
        // - На больших десктопах (xl) оставляем как было ("space-between")
        justifyContent={
          isSm ? "center" : isMiddleDevice ? "center" : "space-between"
        }
        sx={{
          // На мобильных пусть остаётся вертикальная прокрутка при нехватке места + нижний отступ
          ...(isSm && {
            overflowY: "auto",
            pb: 7,
          }),
        }}
      >
        {/* Логотип */}
        <Logo
          style={{
            width: logoSize.width,
            height: "auto",
            maxHeight: logoSize.maxHeight,
            margin: "0 auto",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
            // Чуть уменьшим отступ у «средних» устройств,
            // чтобы текст был ближе к логотипу
            marginBottom: isMiddleDevice ? "20px" : isSm ? "24px" : 0,
          }}
        />

        {/* Текст */}
        <Box
          textAlign="center"
          px={isSm || isMd ? 2 : 4}
          maxWidth={isSm || isMd ? "100%" : 900}
        >
          <Typography
            variant={isSm || isMd ? "h5" : "h4"}
            fontWeight="bold"
            gutterBottom
          >
            СТИЛЬ и РАНГ — это ГЛАВНЫЕ детали для ЛИДЕРА в глобальном МИРЕ!
          </Typography>

          <Typography
            variant="body1"
            fontSize={18}
            mt={3}
            sx={{ whiteSpace: "pre-line" }}
          >
            Премиальный бренд аксессуаров "ORLOV" создаст для Вас уникальный
            образ. Авторский вид и эксклюзивный дизайн подчеркнут статус
            обладателя. Наш онлайн-бутик представляет ассортимент для настоящих
            чемпионов по жизни!
            {"\n\n"}
            <span style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
              "Лучшее для Лучших" <br />
            </span>
            <span style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
              (c) IVAN ORLOV
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
