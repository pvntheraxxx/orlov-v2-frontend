import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import {
  FaCrown,
  FaGem,
  FaShoppingBag,
  FaShippingFast,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const menuItems = [
  { label: "Главная", path: "/", icon: <FaCrown size={30} color="#EFE393" /> },
  {
    label: "О Нас",
    path: "/about-us",
    icon: <FaGem size={30} color="#EFE393" />,
  },
  {
    label: "Каталог",
    path: "/catalog",
    icon: <FaShoppingBag size={34} color="#EFE393" />,
    center: true,
  },
  {
    label: "Доставка",
    path: "/delivery",
    icon: <FaShippingFast size={30} color="#EFE393" />,
  },
  {
    label: "Контакты",
    path: "/contacts",
    icon: <FaEnvelopeOpenText size={30} color="#EFE393" />,
  },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isXs, isSm, isLgSm } = useResponsive();
  const isMobile = isXs || isSm || isLgSm;
  const [value, setValue] = useState(null);
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/") {
      setValue(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleDoubleTap = (event) => {
      if (!event.target.closest(".bottom-nav")) {
        setTapCount((prev) => prev + 1);
        if (tapCount >= 1) {
          setValue(null);
          setTapCount(0);
        }
      }
    };

    document.addEventListener("click", handleDoubleTap);
    return () => document.removeEventListener("click", handleDoubleTap);
  }, [tapCount]);

  const handleChange = (event, newValue) => {
    if (location.pathname !== newValue) {
      navigate(newValue);
    } else {
      window.scrollTo(0, 0);
    }
    setValue(newValue);
  };

  if (!isMobile) return null;

  return (
    <Paper
      id="orlov-bottom-menu"
      className="bottom-nav"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        bgcolor: "background.default",
        borderTop: "2px solid primary.main",
        boxShadow: "0px -4px 10px rgba(239, 227, 147, 0.3)",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          bgcolor: "background.default",
          justifyContent: "center",
          minHeight: "64px",
        }}
      >
        {menuItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            value={item.path}
            icon={item.icon}
            sx={{
              color: value === item.path ? "primary.main" : "text.secondary",
              minWidth: "72px",
              ...(item.center && { flexGrow: 1, maxWidth: "140px" }),
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
