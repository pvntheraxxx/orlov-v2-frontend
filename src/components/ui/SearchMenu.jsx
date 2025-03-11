import {
  Box,
  IconButton,
  Fade,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useResponsive } from "../../hooks/useResponsive";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const SearchMenu = ({ open, onClose }) => {
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const placeholderText = "Введите запрос...";
  const { isXs, isSm } = useResponsive();
  const isMobile = isXs || isSm;
  const buttonContainerRef = useRef(null);
  const searchFieldRef = useRef(null);
  const [inputWidth, setInputWidth] = useState("100%");

  const handleClose = useCallback(() => {
    window.scrollTo(0, 0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setAnimatedPlaceholder("");
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedPlaceholder(placeholderText.slice(0, index));
      index++;
      if (index > placeholderText.length) {
        index = 0;
      }
    }, 200); // Вернул исходную скорость плейсхолдера
    return () => clearInterval(interval);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleUserAction = () => {
      handleClose();
    };
    window.addEventListener("wheel", handleUserAction);
    window.addEventListener("touchmove", handleUserAction);
    return () => {
      window.removeEventListener("wheel", handleUserAction);
      window.removeEventListener("touchmove", handleUserAction);
    };
  }, [open, handleClose]);

  useEffect(() => {
    if (buttonContainerRef.current && searchFieldRef.current) {
      const containerRect = buttonContainerRef.current.getBoundingClientRect();
      setInputWidth(`${containerRect.width}px`);
    }
  }, [open]);

  return (
    <Fade in={open} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#1b1b1b",
          zIndex: 10003,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#EFE393",
          opacity: open ? 1 : 0,
          transition: "opacity 0.2s ease-in-out", // Скорость анимации уменьшена
          overflow: "hidden",
          overscrollBehavior: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? 5 : 10,
            left: isMobile ? 10 : 20,
            right: isMobile ? 10 : 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "1.2rem" : "1.4rem",
              color: "#EFE393",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            ORLOV
          </Typography>
          <IconButton sx={{ color: "#EFE393" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: inputWidth,
                color: "#EFE393",
                mb: 1,
              }}
            >
              Найдите идеальный аксессуар по самым выгодным ценам прямо сейчас!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
          >
            <TextField
              fullWidth
              inputRef={searchFieldRef}
              placeholder={animatedPlaceholder}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#EFE393" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: inputWidth,
                backgroundColor: "transparent",
                opacity: open ? 1 : 0,
                transition: "opacity 0.2s ease-in-out 0.1s",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
          >
            <Box
              ref={buttonContainerRef}
              sx={{ mt: 2, display: "flex", gap: 1 }}
            >
              {["iPhone 15", "Pro", "Pro Max", "Plus"].map((label) => (
                <Button
                  key={label}
                  variant="outlined"
                  sx={{
                    color: "primary.main",
                    borderColor: "primary.main",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      borderColor: "primary.main",
                      color: "#181818",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Fade>
  );
};

export default SearchMenu;
