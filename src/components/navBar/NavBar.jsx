import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import Badge from "@mui/material/Badge";
import { FaSearchDollar, FaUserTie, FaShoppingCart } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";
import { LoginForm, SearchMenu } from "../ui";

import { CartContext } from "../../contexts/CartContext";

// Модальные окна и уведомления
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const NavBar = () => {
  const { isXs, isSm, isLgSm, isMd, isLg } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems ? cartItems.length : 0;

  const [openLogin, setOpenLogin] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [loginSuccessOpen, setLoginSuccessOpen] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleMenuClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
    }
  };

  const handleUserClick = () => {
    if (user) {
      setBadgeVisible(false);
      setOpenProfile(true);
    } else {
      setOpenLogin(true);
    }
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setOpenProfile(false);
    alert("Вы успешно вышли из аккаунта");
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
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Orlov Luxury Collections | +7 (911) 332 29-17
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
            boxShadow: `
              0 -4px 8px rgba(0, 0, 0, 0.6),
              0 6px 12px rgba(0, 0, 0, 0.8),
              0 12px 24px rgba(0, 0, 0, 0.4)
            `,
            padding: "0px 24px",
            // Высота самого AppBar
            height: isMobile ? "44px" : "52px",
            display: "flex",
            justifyContent: "center",
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
            {/* Логотип/Brand */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => handleMenuClick("/")}
            >
              <a>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: {
                      xs: "19px", // на мобильных
                      sm: "28px",
                      md: "27px",
                    },
                    // fontWeight: 600,
                    letterSpacing: "1px",
                    color: "#EFE393", // основной брендовый цвет
                    fontFamily: "Cinzel, serif", // или выбранный тобой luxury-шрифт
                  }}
                >
                  ORLOV brand
                </Typography>
              </a>
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
              <IconButton
                color="inherit"
                sx={{ padding: "6px" }}
                onClick={handleSearchToggle}
              >
                <FaSearchDollar size={20} />
              </IconButton>

              {/* Корзина с динамическим бейджем */}
              <Badge
                badgeContent={cartCount}
                color="error"
                overlap="circular"
                invisible={cartCount === 0}
              >
                <IconButton
                  color="inherit"
                  sx={{ padding: "6px" }}
                  onClick={() => navigate("/cart")}
                >
                  <FaShoppingCart size={20} />
                </IconButton>
              </Badge>

              {/* Иконка профиля с бейджем */}
              {user ? (
                badgeVisible ? (
                  <Badge
                    overlap="circular"
                    color="error"
                    badgeContent="!"
                    variant="standard"
                  >
                    <IconButton
                      color="inherit"
                      sx={{ padding: "6px" }}
                      onClick={handleUserClick}
                    >
                      <FaUserTie size={20} />
                    </IconButton>
                  </Badge>
                ) : (
                  <IconButton
                    color="inherit"
                    sx={{ padding: "6px" }}
                    onClick={handleUserClick}
                  >
                    <FaUserTie size={20} />
                  </IconButton>
                )
              ) : (
                <IconButton
                  color="inherit"
                  sx={{ padding: "6px" }}
                  onClick={handleUserClick}
                >
                  <FaUserTie size={20} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Поисковое меню */}
      <SearchMenu open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Модальное окно с формой входа */}
      <LoginForm
        open={openLogin}
        onClose={handleCloseLogin}
        setUser={(userData) => {
          setUser(userData);
          setBadgeVisible(true);
          setLoginSuccessOpen(true);
        }}
      />

      {/* Модальное окно профиля */}
      <ProfileModal
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        user={user}
        handleLogout={handleLogout}
      />

      {/* Уведомление о успешном входе */}
      <Snackbar
        open={loginSuccessOpen}
        autoHideDuration={3000}
        onClose={() => setLoginSuccessOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setLoginSuccessOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Вы успешно вошли в систему!
        </Alert>
      </Snackbar>
    </>
  );
};

export default NavBar;

// Компонент ProfileModal
const ProfileModal = ({ open, onClose, user, handleLogout }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 10000,
        "& .MuiDialog-paper": {
          width: "300px",
          borderRadius: "15px",
          background: "linear-gradient(50deg, #2C2C2C, #2E2E2E)",
          color: "#F7E733",
          border: "1px solid #2A2A2A",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          position: "relative",
          paddingRight: "16px",
        }}
      >
        <Typography variant="h6" sx={{ width: "100%" }}>
          Профиль
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="body1" align="center">
          Добро пожаловать в личный кабинет!
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          padding: "0 16px",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Выйти из аккаунта
        </Button>
      </DialogActions>
    </Dialog>
  );
};
