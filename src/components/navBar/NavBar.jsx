import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import { FaSearchDollar, FaUserTie, FaShoppingCart } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const NavBar = () => {
  const { isXs, isSm, isLgSm, isMd, isLg } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOrlovClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  const handleMenuClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
  };

  const isTablet = isMd || isLg;
  const isMobile = isXs || isSm || isLgSm;

  return (
    <>
      <Box
        id="navbar"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
        }}
      >
        {/* Узкая верхняя полоса */}
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.85rem",
            fontWeight: "500",
            color: "text.secondary",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            // Можно усилить/убрать тень в верхней полосе по желанию:
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Orlov Luxury Collections | +7 (901) 123-45-67
          <ReceiptLong sx={{ fontSize: "1rem", ml: 1 }} />
        </Box>

        <AppBar
          position="relative"
          sx={{
            top: 0,
            left: "10px",
            right: "10px",
            width: "calc(100% - 20px)",
            backgroundColor: "#1b1b1b",
            borderRadius: "25px",
            /*
              Здесь комбинируем тень сверху (отрицательный offset) и снизу (положительный offset).
              Первый блок отвечает за верхнюю тень, второй и третий — за нижнюю «глубину».
            */
            boxShadow: `
              0 -4px 8px rgba(0, 0, 0, 0.6),
              0 6px 12px rgba(0, 0, 0, 0.8),
              0 12px 24px rgba(0, 0, 0, 0.4)
            `,
            padding: "0px 24px",
            height: isMobile ? "44px" : isTablet ? "auto" : "52px",
            display: "flex",
            justifyContent: "center",
            py: isTablet ? 1 : 0,
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              minHeight: isMobile ? "44px !important" : "52px !important",
              flexWrap: isTablet ? "wrap" : "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: isTablet ? 1 : 3,
            }}
          >
            {/* Логотип/название */}
            <Box
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "primary.main",
              }}
              onClick={handleOrlovClick}
            >
              ORLOV
            </Box>

            {/* Горизонтальное меню (для десктопа) */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: isTablet ? "wrap" : "nowrap",
                  gap: isTablet ? 2 : 3,
                  justifyContent: "center",
                }}
              >
                {[
                  { label: "Главная", path: "/" },
                  { label: "О Нас", path: "/about-us" },
                  { label: "Каталог", path: "/catalog" },
                  { label: "Доставка", path: "/delivery" },
                  { label: "Контакты", path: "/contacts" },
                  { label: "Отзывы", path: "/reviews" },
                ].map((item) => (
                  <Typography
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={() => handleMenuClick(item.path)}
                    sx={{
                      textDecoration: "none",
                      fontSize: isTablet ? "0.85rem" : "1rem",
                      fontWeight: "500",
                      color: "inherit",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: "-3px",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "primary.main",
                        transform: "scaleX(0)",
                        transformOrigin: "right",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                        transformOrigin: "left",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )}

            {/* Иконки справа */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton color="inherit" sx={{ padding: "6px" }}>
                <FaSearchDollar size={20} />
              </IconButton>
              <IconButton color="inherit" sx={{ padding: "6px" }}>
                <FaShoppingCart size={20} />
              </IconButton>
              <IconButton color="inherit" sx={{ padding: "6px" }}>
                <FaUserTie size={20} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
