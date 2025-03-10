import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../hooks/useResponsive";
import Logo from "../../assets/hero-section/Logo.svg?react";
import backgroundImage from "../../assets/hero-section/background4.webp";

const HeroSection = () => {
  const { isSm, isMd, isLg } = useResponsive();
  const [viewportHeight, setViewportHeight] = useState("100vh");

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
      height={viewportHeight}
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
        pt: isSm ? "60px" : 5,
        pb: isSm ? "0px" : "5px",
        marginTop: { xs: "-32px", sm: "0px" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#181818",
          // background:
          //   "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.35))",
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
        sx={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          maxWidth: "90%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: isSm ? 1 : 3,
            fontSize: isSm ? "0.9rem" : "1.3rem",
            fontWeight: "bold",
            color: "#EFE393",
            textShadow: "0px 0px 1px rgba(255, 255, 150, 0.5)",
          }}
        >
          Чехол для iPhone — это отражение сущности человека.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 1,
            fontSize: isSm ? "0.8rem" : "19.2px",
            color: "#EFE393",
            textShadow: "0px 0px 1px rgba(255, 255, 150, 0.5)",
          }}
        >
          Премиальный бренд аксессуаров <b>“ORLOV”</b> создаст для Вас
          уникальный <b>ОБРАЗ</b>. Авторский стиль и эксклюзивный дизайн
          подчеркнут <b>СТАТУС</b> обладателя. Идеально для подарка или
          эксклюзивно для <i>СЕБЯ</i>. Только высококачественные материалы и
          первоклассное обслуживание.
          <b> Лучшее для Лучших.</b>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: isSm ? "0.7rem" : "0.9rem",
            fontStyle: "italic",
            color: "#EFE393",
            textShadow: "0px 0px 1px rgba(255, 255, 150, 0.5)",
          }}
        >
          (c) IVAN ORLOV
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
