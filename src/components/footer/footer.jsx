import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaVk, FaTelegramPlane, FaYandex, FaWhatsapp } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isXs, isSm, isLgSm } = useResponsive();
  const isMobile = isXs || isSm || isLgSm;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMenuClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => navigate(path), 0);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        zIndex: 100,
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 4, md: 6 },
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginBottom: isMobile ? "72px" : "0px", // Учитываем MobileBottomNav
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              ORLOV
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
              © {new Date().getFullYear()} Orlov. Все права защищены.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                { label: "Главная", path: "/" },
                { label: "Каталог", path: "/catalog" },
                { label: "Доставка", path: "/delivery" },
                { label: "Контакты", path: "/contacts" },
                { label: "Отзывы", path: "/reviews" },
              ].map((item) => (
                <Typography
                  key={item.label}
                  className="footer-link"
                  component="a"
                  onClick={() => handleMenuClick(item.path)}
                  sx={{
                    textDecoration: "none",
                    color: "text.primary",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <IconButton
                color="inherit"
                component="a"
                href="https://vk.com/orlov_brand777"
                target="_blank"
              >
                <FaVk size="24px" />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://t.me/ORLOV_brand777"
                target="_blank"
              >
                <FaTelegramPlane size="24px" />
              </IconButton>
              {/* <IconButton
                color="inherit"
                component="a"
                href="https://yandex.ru"
                target="_blank"
              >
                <FaYandex size="24px" />
              </IconButton> */}
              <IconButton
                color="inherit"
                component="a"
                href="https://wa.me/89210428777"
                target="_blank"
              >
                <FaWhatsapp size="24px" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
