import { createContext, useContext, useState, useEffect } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveContext = createContext(null);

export const ResponsiveProvider = ({ children }) => {
  if (!children) {
    throw new Error("ResponsiveProvider должен оборачивать дочерние элементы.");
  }

  const theme = useTheme();

  // Основные брейкпоинты MUI + кастомные
  const breakpoints = {
    isXs: useMediaQuery(theme.breakpoints.down("xs")),
    isSm: useMediaQuery(theme.breakpoints.down("sm")),
    isMd: useMediaQuery(theme.breakpoints.down("md")),
    isLg: useMediaQuery(theme.breakpoints.down("lg")),
    isXl: useMediaQuery(theme.breakpoints.down("xl")),
    isLgSm: useMediaQuery("(max-width: 430px)"),
    is2Xl: useMediaQuery("(max-width: 1600px)"),
  };

  const [height, setHeight] = useState(window.innerHeight);
  const [isIphoneSE, setIsIphoneSE] = useState(false);
  const [isIphone678Plus, setIsIphone678Plus] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const innerHeight = window.innerHeight;

      // 🎯 Специфические устройства
      setIsIphoneSE(width === 375 && innerHeight <= 670);
      setIsIphone678Plus(width === 414 && innerHeight <= 740);

      const navBar = document.getElementById("navbar");
      const footer = document.getElementById("footer");

      const navBarHeight = navBar ? navBar.offsetHeight : 0;
      const footerHeight = footer ? footer.offsetHeight : 0;

      setHeight(innerHeight - navBarHeight - footerHeight);
    };

    window.addEventListener("resize", update);
    update();

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <ResponsiveContext.Provider
      value={{
        ...breakpoints,
        height,
        isIphoneSE,
        isIphone678Plus,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};

export default ResponsiveProvider;
