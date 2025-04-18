import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LuxeButton } from "../ui";

const TeaserCard = ({
  title,
  description,
  image,
  buttonText,
  textColor,
  overlayColor,
  layout,
  link,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleMenuClick = (path) => {
    if (location.pathname !== path) {
      navigate(path); // Только переход, без scrollTo
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: "100%", minHeight: "90vh" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile
            ? "column"
            : layout === "image-left"
            ? "row"
            : "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "90vh",
          background: layout === "centered" ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: textColor,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "40px 20px" : "60px",
          borderRadius: "20px",
        }}
      >
        {layout === "centered" && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: overlayColor,
            }}
          />
        )}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: isMobile ? 3 : 0,
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "100%",
              aspectRatio: "5 / 3",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            px: isMobile ? 2 : 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              maxWidth: "80%",
              fontSize: isMobile ? "14px" : "19.2px",
              color: "#EFE393",
            }}
          >
            {description}
          </Typography>

          <LuxeButton
            sx={{ marginTop: 2 }}
            onClick={() => handleMenuClick(link)}
          >
            {buttonText}
          </LuxeButton>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TeaserCard;
