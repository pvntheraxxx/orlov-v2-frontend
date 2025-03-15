import { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const checkIfAllLoaded = () => {
      const images = document.querySelectorAll("img");
      const videos = document.querySelectorAll("video");

      const allLoaded =
        [...images].every((img) => img.complete) &&
        [...videos].every((video) => video.readyState === 4);

      if (allLoaded) {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsLoaded(true);
          }, 2000); // Увеличили задержку перед исчезновением
          if (onLoadingComplete) onLoadingComplete();
        }, 3000); // Добавляем задержку перед исчезновением
        // небольшая задержка для плавности
      }
    };

    // Проверяем загрузку на старте
    checkIfAllLoaded();

    // Следим за изменениями
    const observer = new MutationObserver(checkIfAllLoaded);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1.5 }}
      style={{
        pointerEvents: isLoaded ? "none" : "auto",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{ height: "100%", width: "100%" }}
      >
        <CircularProgress size={50} color="primary" />
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          Идёт подготовка...
        </Typography>
      </Box>
    </motion.div>
  );
};

export default LoadingScreen;
