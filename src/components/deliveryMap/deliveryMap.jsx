import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import RussiaMapSVG from "../../assets/deliveryMap/russiaMap.svg?react"; // SVG с регионами, где каждому пути присвоен id, например, RU-AD, RU-ALT и т.д.
import { useTheme } from "@mui/material/styles";

// Условия доставки для каждого субъекта (регионов)
// Здесь указывайте реальные данные для каждого id
const deliveryZones = {
  "RU-AD": "Республика Адыгея: 2–3 дня. Курьер / самовывоз",
  "RU-ALT": "Республика Алтай: 5–7 дней. Почта / СДЭК",
  "RU-AMU": "Амурская область: 7–10 дней. Почта / ТК",
  "RU-ARK": "Архангельская область: 4–5 дней. Курьер / ПВЗ",
  "RU-AST": "Астраханская область: 3–4 дня. Курьер / самовывоз",
  "RU-BA": "Республика Башкортостан: 3–4 дня. Курьер / ТК",
  "RU-BEL": "Белгородская область: 2–3 дня. Курьер / самовывоз",
  "RU-BRY": "Брянская область: 2–3 дня. Курьер / самовывоз",
  "RU-BU": "Республика Бурятия: 6–8 дней. Почта / СДЭК",
  "RU-CE": "Чеченская республика: 3–4 дня. Курьер / самовывоз",
  "RU-CHE": "Челябинская область: 3–4 дня. ТК / ПВЗ",
  "RU-CHU": "Чукотский автономный округ: 10–14 дней. Почта / ТК",
  "RU-CU": "Чувашская республика: 3–4 дня. Курьер / ПВЗ",
  "RU-DA": "Республика Дагестан: 3–4 дня. Курьер / самовывоз",
  "RU-AL": "Республика Алтай: 5–7 дней. Почта / СДЭК",
  "RU-IN": "Республика Ингушетия: 3–4 дня. Курьер / самовывоз",
  "RU-IRK": "Иркутская область: 5–7 дней. ТК / почта",
  "RU-IVA": "Ивановская область: 2–3 дня. Курьер / самовывоз",
  "RU-KB": "Кабардино-Балкарская республика: 3–4 дня. Курьер / самовывоз",
  "RU-KC": "Карачаево-Черкесская республика: 3–4 дня. Курьер / самовывоз",
  "RU-KDA": "Краснодарский край: 2–3 дня. Курьер / самовывоз",
  "RU-KEM": "Кемеровская область: 4–5 дней. ТК / почта",
  "RU-KLU": "Калужская область: 1–2 дня. Курьер / самовывоз",
  "RU-KHA": "Хабаровский край: 7–10 дней. Почта / ТК",
  "RU-KR": "Республика Карелия: 3–4 дня. Курьер / ПВЗ",
  "RU-KK": "Республика Хакасия: 5–7 дней. Почта / СДЭК",
  "RU-KL": "Республика Калмыкия: 3–4 дня. Курьер / самовывоз",
  "RU-KHM": "Ханты-Мансийский АО: 4–6 дней. ТК / почта",
  "RU-KGD": "Калининградская область: 3–4 дня. Курьер / ПВЗ",
  "RU-KO": "Республика Коми: 4–5 дней. Курьер / почта",
  "RU-KAM": "Камчатский край: 7–10 дней. Почта / ТК",
  "RU-KRS": "Курская область: 2–3 дня. Курьер / самовывоз",
  "RU-KOS": "Костромская область: 2–3 дня. Курьер / самовывоз",
  "RU-KGN": "Курганская область: 3–4 дня. ТК / почта",
  "RU-KIR": "Кировская область: 3–4 дня. ТК / почта",
  "RU-KYA": "Красноярский край: 5–7 дней. ТК / почта",
  "RU-LEN": "Ленинградская область: 2–3 дня. Курьер / ПВЗ",
  "RU-LIP": "Липецкая область: 2–3 дня. Курьер / самовывоз",
  "RU-MOW": "Москва: 1 день. Курьер / самовывоз",
  "RU-ME": "Республика Марий Эл: 3–4 дня. Курьер / самовывоз",
  "RU-MAG": "Магаданская область: 7–10 дней. Почта / ТК",
  "RU-MUR": "Мурманская область: 4–5 дней. Курьер / ПВЗ",
  "RU-MO": "Республика Мордовия: 3–4 дня. Курьер / самовывоз",
  "RU-MOS": "Московская область: 1–2 дня. Курьер / самовывоз",
  "RU-NGR": "Новгородская область: 2–3 дня. Курьер / ПВЗ",
  "RU-NEN": "Ненецкий АО: 6–8 дней. ТК / почта",
  "RU-SE": "Северная Осетия — Алания: 3–4 дня. Курьер / самовывоз",
  "RU-NVS": "Новосибирская область: 4–5 дней. ТК / почта",
  "RU-NIZ": "Нижегородская область: 2–3 дня. Курьер / самовывоз",
  "RU-ORE": "Оренбургская область: 3–4 дня. ТК / самовывоз",
  "RU-ORL": "Орловская область: 2–3 дня. Курьер / самовывоз",
  "RU-OMS": "Омская область: 4–5 дней. ТК / почта",
  "RU-PER": "Пермский край: 3–4 дня. ТК / почта",
  "RU-PRI": "Приморский край: 7–10 дней. Почта / ТК",
  "RU-PSK": "Псковская область: 2–3 дня. Курьер / ПВЗ",
  "RU-PNZ": "Пензенская область: 2–3 дня. Курьер / ПВЗ",
  "RU-ROS": "Ростовская область: 2–3 дня. Курьер / самовывоз",
  "RU-RYA": "Рязанская область: 2–3 дня. Курьер / самовывоз",
  "RU-SAM": "Самарская область: 2–3 дня. Курьер / ПВЗ",
  "RU-SA": "Республика Саха (Якутия): 7–10 дней. Почта / ТК",
  "RU-SAK": "Сахалинская область: 7–10 дней. Почта / ТК",
  "RU-SMO": "Смоленская область: 2–3 дня. Курьер / самовывоз",
  "RU-SPE": "Санкт-Петербург: 1–2 дня. Курьер / ПВЗ",
  "RU-SAR": "Саратовская область: 2–3 дня. Курьер / ПВЗ",
  "RU-STA": "Ставропольский край: 2–3 дня. Курьер / самовывоз",
  "RU-SVE": "Свердловская область: 3–4 дня. ТК / почта",
  "RU-TAM": "Тамбовская область: 2–3 дня. Курьер / самовывоз",
  "RU-TOM": "Томская область: 4–5 дней. ТК / почта",
  "RU-TUL": "Тульская область: 2–3 дня. Курьер / самовывоз",
  "RU-TA": "Республика Татарстан: 2–3 дня. Курьер / ПВЗ",
  "RU-TY": "Республика Тыва: 6–8 дней. Почта / ТК",
  "RU-TVE": "Тверская область: 2–3 дня. Курьер / ПВЗ",
  "RU-TYU": "Тюменская область: 3–4 дня. ТК / самовывоз",
  "RU-UD": "Удмуртская республика: 3–4 дня. Курьер / самовывоз",
  "RU-ULY": "Ульяновская область: 2–3 дня. Курьер / ПВЗ",
  "RU-VGG": "Волгоградская область: 2–3 дня. Курьер / самовывоз",
  "RU-VLA": "Владимирская область: 2–3 дня. Курьер / самовывоз",
  "RU-YAN": "Ямало-Ненецкий АО: 5–7 дней. ТК / почта",
  "RU-VLG": "Вологодская область: 2–3 дня. Курьер / ПВЗ",
  "RU-VOR": "Воронежская область: 2–3 дня. Курьер / самовывоз",
  "RU-YAR": "Ярославская область: 2–3 дня. Курьер / самовывоз",
  "RU-YEV": "Еврейская автономная область: 7–10 дней. Почта / ТК",
  "RU-ZAB": "Забайкальский край: 7–10 дней. Почта / ТК",
};

export default function RussiaMap() {
  const [hoveredZone, setHoveredZone] = useState(null); // hover на десктопе
  const [clickedZone, setClickedZone] = useState(null); // клик на мобильных
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    // Массив функций очистки обработчиков
    const cleanups = [];

    // Для каждого региона навешиваем обработчики
    Object.keys(deliveryZones).forEach((zoneId) => {
      const regionEl = svgEl.querySelector(`#${zoneId}`);
      if (!regionEl) return;

      regionEl.style.pointerEvents = "all";
      regionEl.style.transition = "fill 0.3s ease";

      if (isMobile) {
        // На мобильных: клик по региону
        const handleClick = () => {
          // Сбрасываем заливку всех регионов
          Object.keys(deliveryZones).forEach((otherZoneId) => {
            const otherRegion = svgEl.querySelector(`#${otherZoneId}`);
            if (otherRegion) {
              otherRegion.style.fill = "transparent";
            }
          });
          // Если кликнули повторно по тому же региону — убираем окно
          // Иначе подсвечиваем новый регион
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
        // На десктопе: hover
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

    // Удаляем все обработчики при размонтировании/обновлении
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [isMobile]);

  // ВАЖНО: При каждом "заходе" на страницу (или переключении на мобильный брейкпоинт)
  // мы скроллим карту в нужную позицию
  useEffect(() => {
    if (isMobile && containerRef.current) {
      // Настрой координаты под свою карту, чтобы совпадало со скриншотом
      containerRef.current.scrollTo({
        left: 80, // например, 400
        top: 790, // например, 300
        behavior: "auto",
      });
    }
  }, [isMobile]);

  return (
    <Box
      ref={containerRef}
      sx={{
        marginTop: { xs: "20px", md: "90px" },
        marginBottom: 0,
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

        {/* Десктоп: hover-подсказка */}
        {!isMobile && hoveredZone && (
          <Paper
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              px: 3,
              py: 2,
              backgroundColor: "#1e1e1e",
              border: "2px solid #EFE393",
              color: "#fff",
              maxWidth: 400,
            }}
          >
            <Typography variant="h6">{hoveredZone}</Typography>
            <Typography variant="body2">
              {deliveryZones[hoveredZone]}
            </Typography>
          </Paper>
        )}
      </Box>

      {/* Мобильные: окно под NavBar при тапе на регион */}
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
