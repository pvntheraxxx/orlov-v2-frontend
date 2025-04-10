import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../hooks/useResponsive";
import Logo from "../../assets/heroSection/Logo3.svg?react";
import backgroundImage from "../../assets/heroSection/background4.jpeg";
import { NAVBAR_HEIGHT } from "../../constants/layout";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const { isSm, isMd, isIphoneSE, isIphone678Plus } = useResponsive();
  const isCompactDevice = isIphoneSE || isIphone678Plus;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  // Увеличиваем отступ только на десктопах (то есть когда не isSm, не iPhone итд.)
  // Предположим, что "isMd" — это планшет, а всё, что больше isMd, уже считается «Desktop».
  // Ниже условно заданы отступы, подкорректируйте их под себя при необходимости.
  const logoStyle = {
    width: isCompactDevice ? "70%" : isSm ? "75%" : isMd ? "60%" : "30%",
    maxHeight: isCompactDevice
      ? "28vh"
      : isSm
      ? "32vh"
      : isMd
      ? "40vh"
      : "45vh",
    margin: "0 auto",
    // ---- ВАЖНО: меняем marginBottom для больших экранов ----
    marginBottom: isCompactDevice
      ? "12px"    // iPhone SE / iPhone+
      : isSm
      ? "16px"    // маленькие экраны (sm)
      : isMd
      ? "20px"    // средние экраны (md), например планшеты
      : "60px",   // большие экраны (desktop) — поставили побольше
    filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
  };

  const headingFontSize = isCompactDevice
    ? "1.15rem"
    : isSm
    ? "1.3rem"
    : isMd
    ? "1.6rem"
    : "2rem";

  const bodyFontSize = isCompactDevice
    ? "0.85rem"
    : isSm
    ? "0.95rem"
    : isMd
    ? "1.05rem"
    : "1.15rem";

  const italicFontSize = isCompactDevice ? "0.9rem" : isSm ? "1rem" : "1.1rem";

  return (
    <Box
      ref={ref}
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
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))",
          zIndex: 2,
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        zIndex={2}
        py={isCompactDevice ? 2 : 4}
        sx={{
          overflowY: "auto",
          pb: 6,
        }}
      >
        {/* ЛОГОТИП — ТОЛЬКО FADE-IN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={logoStyle}>
            <Logo style={{ width: "100%", height: "auto" }} />
          </div>
        </motion.div>

        {/* ТЕКСТ — ТОЖЕ ТОЛЬКО FADE-IN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          <Box textAlign="center" px={1} maxWidth={900}>
            <Typography
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: headingFontSize,
                color: "#EFE393",
                lineHeight: 1.4,
              }}
            >
              СТИЛЬ и РАНГ — это ГЛАВНЫЕ детали для ЛИДЕРА в глобальном МИРЕ!
            </Typography>

            <Typography
              mt={3}
              sx={{
                fontSize: bodyFontSize,
                whiteSpace: "pre-line",
                color: "#EFE393",
                lineHeight: 1.6,
              }}
            >
              Премиальный бренд аксессуаров "ORLOV" создаст для Вас уникальный
              образ. Авторский вид и эксклюзивный дизайн подчеркнут статус
              обладателя. Наш онлайн-бутик представляет ассортимент для
              настоящих чемпионов по жизни!
              {"\n\n"}
              <span style={{ fontStyle: "italic", fontSize: italicFontSize }}>
                "Лучшее для Лучших" <br />
                (c) IVAN ORLOV
              </span>
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
