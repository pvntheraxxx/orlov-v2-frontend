import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import RussiaMapSVG from "../../assets/deliveryMap/russiaMap.svg?react";
import { useTheme } from "@mui/material/styles";
import { deliveryZones } from "../../data/deliveryZonesData";

export default function RussiaMap() {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [clickedZone, setClickedZone] = useState(null);
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const cleanups = [];

    Object.keys(deliveryZones).forEach((zoneId) => {
      const regionEl = svgEl.querySelector(`#${zoneId}`);
      if (!regionEl) return;

      regionEl.style.pointerEvents = "all";
      regionEl.style.transition = "fill 0.3s ease";

      if (isMobile) {
        const handleClick = () => {
          Object.keys(deliveryZones).forEach((otherZoneId) => {
            const otherRegion = svgEl.querySelector(`#${otherZoneId}`);
            if (otherRegion) {
              otherRegion.style.fill = "transparent";
            }
          });
          setClickedZone((prev) => {
            if (prev === zoneId) {
              regionEl.style.fill = "transparent";
              return null;
            } else {
              regionEl.style.fill = "#EFE393";
              return zoneId;
            }
          });
        };
        regionEl.addEventListener("click", handleClick);
        cleanups.push(() => regionEl.removeEventListener("click", handleClick));
      } else {
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
      }
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.scrollTo({
        left: 80,
        top: 790,
        behavior: "auto",
      });
    }
  }, [isMobile]);

  // 📌 Скрытие при тапе вне карты (вне SVG)
  useEffect(() => {
    if (!isMobile) return;

    const handleOutsideClick = (e) => {
      const svgEl = svgRef.current;
      const isInsideMap = svgEl && svgEl.contains(e.target);

      if (clickedZone && !isInsideMap) {
        setClickedZone(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [clickedZone, isMobile]);

  // 📌 Скрытие при выходе карты за экран
  useEffect(() => {
    if (!isMobile || !clickedZone) return;

    const checkVisibility = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const isVisible = rect.bottom > 100 && rect.top < window.innerHeight;
      if (!isVisible) {
        setClickedZone(null);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [clickedZone, isMobile]);

  // 📌 Скрытие при тапе по пустому месту внутри SVG (не по региону)
  useEffect(() => {
    if (!isMobile || !clickedZone) return;

    const svgEl = svgRef.current;
    if (!svgEl) return;

    const handleSvgClick = (e) => {
      const target = e.target;

      const clickedOutsideAnyRegion = !Object.keys(deliveryZones).some(
        (zoneId) => target.closest(`#${zoneId}`)
      );

      if (clickedOutsideAnyRegion) {
        // Сброс выделения: очищаем заливку всех регионов
        Object.keys(deliveryZones).forEach((zoneId) => {
          const regionEl = svgEl.querySelector(`#${zoneId}`);
          if (regionEl) {
            regionEl.style.fill = "transparent";
          }
        });

        setClickedZone(null); // Скрываем окно
      }
    };

    svgEl.addEventListener("click", handleSvgClick);
    return () => {
      svgEl.removeEventListener("click", handleSvgClick);
    };
  }, [clickedZone, isMobile]);

  return (
    <Box
      id="deliveryMap"
      ref={containerRef}
      sx={{
        marginBottom: 5,
        width: "100%",
        height: { xs: "calc(100vh - 20px)", md: "calc(100vh - 90px)" },
        overflow: { xs: "auto", md: "hidden" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: { xs: "2000px", md: "100%" },
          height: { xs: "2000px", md: "100%" },
          position: "relative",
          touchAction: { xs: "pan-x pan-y pinch-zoom", md: "none" },
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 170 1200 580"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
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

      {isMobile && clickedZone && (
        <Paper
          sx={{
            position: "fixed",
            top: "90px",
            left: 0,
            right: 0,
            mx: "20px",
            px: 3,
            py: 2,
            backgroundColor: "#1e1e1e",
            border: "2px solid #EFE393",
            color: "#fff",
            zIndex: 9999,
          }}
        >
          <Typography variant="h6">{clickedZone}</Typography>
          <Typography variant="body2">{deliveryZones[clickedZone]}</Typography>
        </Paper>
      )}
    </Box>
  );
}
