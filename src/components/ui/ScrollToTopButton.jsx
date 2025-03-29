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
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  };

  return (
    isVisible && (
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: {
            xs: 80, // мобильная версия
            md: 70, // десктоп — точно на уровне Tiledesk marginY
          },
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
      >
        <North sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    )
  );
};

export default ScrollToTopButton;
