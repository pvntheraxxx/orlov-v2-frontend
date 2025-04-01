import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../hooks/useResponsive";
import Logo from "../../assets/heroSection/Logo3.svg?react";
import backgroundImage from "../../assets/heroSection/background1.png";
import { NAVBAR_HEIGHT } from "../../constants/layout";

const HeroSection = () => {
  const { isSm, isMd, isLg, isIphoneSE, isIphone678Plus } = useResponsive();

  const isMiddleDevice = isMd || isLg;
  const isSmallIphone = isIphoneSE || isIphone678Plus;

  // 🔽 Уменьшенные размеры логотипа для нужных iPhone
  const logoSize = isSmallIphone
    ? { width: "65%", maxHeight: "35vh" }
    : isSm
    ? { width: "80%", maxHeight: "45vh" }
    : isMd
    ? { width: "65%", maxHeight: "50vh" }
    : isLg
    ? { width: "30%", maxHeight: "60vh" }
    : { width: "30%", maxHeight: "65vh" };

  const headingFontSize = isSmallIphone ? "1.05rem" : undefined;
  const bodyFontSize = isSmallIphone ? "0.85rem" : 18;
  const italicFontSize = isSmallIphone ? "0.95rem" : "1.1rem";

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
        pt: `${NAVBAR_HEIGHT}px`,
        minHeight: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
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
        py={4}
        justifyContent={
          isSm ? "center" : isMiddleDevice ? "center" : "space-between"
        }
        sx={{
          ...(isSm && {
            overflowY: "auto",
            pb: 7,
          }),
        }}
      >
        <Logo
          style={{
            width: logoSize.width,
            height: "auto",
            maxHeight: logoSize.maxHeight,
            margin: "0 auto",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
            marginBottom: isMiddleDevice ? "20px" : isSm ? "24px" : 0,
          }}
        />

        <Box
          textAlign="center"
          px={isSm || isMd ? 2 : 4}
          maxWidth={isSm || isMd ? "100%" : 900}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: headingFontSize, // ✅ Только на нужных iPhone
            }}
          >
            СТИЛЬ и РАНГ — это ГЛАВНЫЕ детали для ЛИДЕРА в глобальном МИРЕ!
          </Typography>

          <Typography
            variant="body1"
            mt={3}
            sx={{
              whiteSpace: "pre-line",
              fontSize: bodyFontSize, // ✅ Только на нужных iPhone
            }}
          >
            Премиальный бренд аксессуаров "ORLOV" создаст для Вас уникальный
            образ. Авторский вид и эксклюзивный дизайн подчеркнут статус
            обладателя. Наш онлайн-бутик представляет ассортимент для настоящих
            чемпионов по жизни!
            {"\n\n"}
            <span
              style={{
                fontStyle: "italic",
                fontSize: italicFontSize,
              }}
            >
              "Лучшее для Лучших" <br />
              (c) IVAN ORLOV
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
