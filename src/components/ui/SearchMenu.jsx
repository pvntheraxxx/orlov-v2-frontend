import {
  Box,
  IconButton,
  Fade,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useResponsive } from "../../hooks/useResponsive";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SearchMenu = ({ open, onClose }) => {
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const placeholderText = "Введите запрос";
  const { isXs, isSm } = useResponsive();
  const isMobile = isXs || isSm;

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
    }, 200);
    return () => clearInterval(interval);
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
          gap: 2,
          padding: 3,
          color: "#EFE393",
          opacity: open ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
          overflow: "hidden",
          overscrollBehavior: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 20,
            fontWeight: "bold",
            fontSize: "1.4rem",
            color: "#EFE393",
            cursor: "pointer",
          }}
        >
          ORLOV
        </Box>
        <IconButton
          sx={{ position: "absolute", top: 10, right: 20, color: "#EFE393" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <TextField
            fullWidth
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
              maxWidth: "500px",
              backgroundColor: "transparent",
              opacity: open ? 1 : 0,
              transition: "opacity 0.6s ease-in-out 0.4s",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              opacity: open ? 1 : 0,
              transition: "opacity 0.7s ease-in-out 0.6s",
            }}
          >
            <IconButton sx={{ color: "#EFE393" }}>
              <Typography variant="body1">iPhone 15</Typography>
            </IconButton>
            <IconButton sx={{ color: "#EFE393" }}>
              <Typography variant="body1">Pro</Typography>
            </IconButton>
            <IconButton sx={{ color: "#EFE393" }}>
              <Typography variant="body1">Pro Max</Typography>
            </IconButton>
            <IconButton sx={{ color: "#EFE393" }}>
              <Typography variant="body1">Plus</Typography>
            </IconButton>
          </Box>
        </motion.div>
      </Box>
    </Fade>
  );
};

export default SearchMenu;
