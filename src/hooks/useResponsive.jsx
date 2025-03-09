import { createContext, useContext, useState, useEffect } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveContext = createContext(null);

export const ResponsiveProvider = ({ children }) => {
  if (!children) {
    throw new Error("ResponsiveProvider должен оборачивать дочерние элементы.");
  }

  const theme = useTheme();

  const breakpoints = {
    isXs: useMediaQuery(theme.breakpoints.down("xs")),
    isSm: useMediaQuery(theme.breakpoints.down("sm")),
    isLgSm: useMediaQuery("(max-width: 430px)"),
    isMd: useMediaQuery(theme.breakpoints.down("md")),
    isLg: useMediaQuery(theme.breakpoints.down("lg")),
    isXl: useMediaQuery(theme.breakpoints.down("xl")),
    is2Xl: useMediaQuery("(max-width: 1600px)"),
  };

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      const navBar = document.getElementById("navbar");
      const footer = document.getElementById("footer");

      const navBarHeight = navBar ? navBar.offsetHeight : 0;
      const footerHeight = footer ? footer.offsetHeight : 0;

      setHeight(window.innerHeight - navBarHeight - footerHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <ResponsiveContext.Provider value={{ ...breakpoints, height }}>
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
