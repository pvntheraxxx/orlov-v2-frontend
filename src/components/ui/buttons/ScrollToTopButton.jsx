import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { North } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Временно отключаем scroll-behavior, если оно задано глобально
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    // Жёсткий прыжок вверх — на всех уровнях DOM
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Возвращаем scroll-behavior через короткое время (если нужно)
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "";
        document.body.style.scrollBehavior = "";
      }, 50);
    });
  };

  return (
    isVisible && (
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 20 },
          left: 20,
          zIndex: 1000,
          width: { xs: 40, md: 56 },
          height: { xs: 40, md: 56 },
          minHeight: "auto",
          outline: "none",
          "&:focus": { outline: "none" },
          "&:focusVisible": { outline: "none" },
        }}
        onClick={scrollToTop}
        aria-label="Scroll to top instantly"
      >
        <North sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    )
  );
};

export default ScrollToTopButton;
