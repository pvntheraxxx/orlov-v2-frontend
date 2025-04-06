import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import RussiaMapSVG from "../../assets/deliveryMap/russiaMap.svg?react";
import { useTheme } from "@mui/material/styles";
import { deliveryZones } from "../../data/deliveryZonesData";

export default function RussiaMap() {
  const [hoveredZone, setHoveredZone] = useState(null);
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMobile) return;

    const svgEl = svgRef.current;
    if (!svgEl) return;

    const cleanups = [];

    Object.keys(deliveryZones).forEach((zoneId) => {
      const regionEl = svgEl.querySelector(`#${zoneId}`);
      if (!regionEl) return;

      regionEl.style.pointerEvents = "all";
      regionEl.style.transition = "fill 0.3s ease";

      const handleMouseEnter = () => {
        setHoveredZone(zoneId);
        regionEl.style.fill = "#EFE393";
      };
      const handleMouseLeave = () => {
        setHoveredZone(null);
        regionEl.style.fill = "transparent";
      };
      regionEl.addEventListener("mouseenter", handleMouseEnter);
      regionEl.addEventListener("mouseleave", handleMouseLeave);
      cleanups.push(() => {
        regionEl.removeEventListener("mouseenter", handleMouseEnter);
        regionEl.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [isMobile]);

  return (
    <Box
      id="deliveryMap"
      ref={containerRef}
      sx={{
        marginBottom: 5,
        width: "100%",
        height: { xs: "calc(100vh - 20px)", md: "auto" },
        overflow: { xs: "auto", md: "visible" },
        position: "relative",
        pt: { xs: 10, md: 4 },
        pb: { xs: 20, md: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "relative",
          touchAction: { xs: "pan-x pan-y pinch-zoom", md: "none" },
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 100 1200 650"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid meet"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        >
          <style>
            {`
              .custom-map path,
              .custom-map polygon,
              .custom-map rect {
                fill: transparent;
                stroke: #EFE393;
                stroke-width: 1px;
                transition: fill 0.3s ease;
              }
            `}
          </style>
          <g className="custom-map">
            <RussiaMapSVG />
          </g>
        </svg>

        {!isMobile && hoveredZone && (
          <Paper
            sx={{
              position: "fixed",
              top: "90px",
              left: "20px",
              px: 3,
              py: 2,
              backgroundColor: "#1e1e1e",
              border: "2px solid #EFE393",
              color: "#fff",
              maxWidth: 400,
              width: "auto",
              zIndex: 10,
              pointerEvents: "none",
              opacity: 0.9,
            }}
          >
            <Typography variant="h6">{hoveredZone}</Typography>
            <Typography variant="body2">
              {deliveryZones[hoveredZone]}
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
