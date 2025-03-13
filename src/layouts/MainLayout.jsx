import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { MobileBottomNav } from "../components/mobileMenu";
import { useResponsive } from "../hooks/useResponsive";

import { SupportButton, ScrollToTopButton } from "../components/ui";
const MOBILE_NAV_HEIGHT = 64;

const MainLayout = () => {
  const { isXs, isSm, isLgSm } = useResponsive();
  const isMobile = isXs || isSm || isLgSm;
  const [contentHeight, setContentHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;
      const newHeight = isMobile
        ? viewportHeight - MOBILE_NAV_HEIGHT
        : viewportHeight;
      setContentHeight(newHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isMobile]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />

      <Box
        component="main"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          height: `${contentHeight}px`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Outlet />
      </Box>

      {/* Добавляем кнопку поддержки в правом нижнем углу */}
      <SupportButton />
      <ScrollToTopButton />

      {isMobile && (
        <MobileBottomNav
          id="mobile-bottom-nav"
          style={{
            height: `${MOBILE_NAV_HEIGHT}px`,
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        />
      )}
      <Footer />
    </Box>
  );
};

export default MainLayout;
