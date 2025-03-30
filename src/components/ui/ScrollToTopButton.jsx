import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { North } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Показываем кнопку после прокрутки вниз на 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 20 }, // Совпадает с SupportButton          bottom: { xs: 80, md: 20 }, // Совпадает с SupportButton
          left: 20, // Симметрично SupportButton          left: 20, // Симметрично SupportButton
          zIndex: 1000,
          width: { xs: 40, md: 56 },
          height: { xs: 40, md: 56 },
          minHeight: "auto",
          outline: "none",
          "&:focus": { outline: "none" },
          "&:focusVisible": { outline: "none" },
        }}
        onClick={scrollToTop}
      >
        <North sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    )
  );
};

export default ScrollToTopButton;
