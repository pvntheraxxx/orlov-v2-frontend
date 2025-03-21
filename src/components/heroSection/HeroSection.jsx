import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../hooks/useResponsive";
import Logo from "../../assets/heroSection/Logo2.svg?react";
import backgroundImage from "../../assets/heroSection/background4.webp";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {
  const { isSm, isMd, isLg } = useResponsive();
  const [viewportHeight, setViewportHeight] = useState("100vh");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const updateHeight = () => {
      const bottomNavHeight = isSm ? 60 : 0;
      const availableHeight = window.innerHeight - bottomNavHeight;
      setViewportHeight(`${availableHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [isSm]);

  const logoSize = isSm
    ? { width: "70%", maxHeight: "35vh" }
    : isMd
    ? { width: "60%", maxHeight: "40vh" }
    : isLg
    ? { width: "50%", maxHeight: "50vh" }
    : { width: "45%", maxHeight: "60vh" };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
        height: isMobile ? "100vh" : viewportHeight, // Растягиваем на всю высоту на мобильных
        minHeight: "100vh", // Минимальная высота 100vh, чтобы избежать проблем на iOS
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
      <Logo
        style={{
          width: logoSize.width,
          height: "auto",
          maxHeight: logoSize.maxHeight,
          margin: "0 auto",
          zIndex: 2,
          filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
        }}
      />

      <Box
        textAlign="center"
        py={isMobile ? 3 : 5}
        px={isMobile ? 2 : 4}
        sx={{
          zIndex: 2,
          borderRadius: isMobile ? 2 : 4,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
        >
          СТИЛЬ и РАНГ — это ГЛАВНЫЕ детали для ЛИДЕРА в глобальном МИРЕ!
        </Typography>

        <Box
          sx={{
            maxWidth: isMobile ? "100%" : 900,
            mx: "auto",
          }}
        >
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
