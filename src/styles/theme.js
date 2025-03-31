import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EFE393",
      contrastText: "#1a1a1a",
    },
    secondary: {
      main: "#2C2C2C", // Глубокий тёмно-серый
    },
    background: {
      default: "#181818", // Основной фон
      paper: "#222222",   // Бумажные карточки
    },
    text: {
      primary: "#EFE393",     // Основной текст
      secondary: "#CCCCCC",   // Второстепенный текст
    },
    // === ДОБАВЛЕННЫЕ корпоративные цвета ===
    corporate: {
      success: "#A2E3C4",     // Мятный успех
      error: "#FFB3B3",       // Мягкий коралловый
      info: "#9ECFFF",        // Небесный голубой
      warning: "#FCE38A",     // Мягкий жёлтый
      surface: "#3A3A3A",     // Нейтральный фон
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700, color: "#EFE393" },
    h2: { fontSize: "2.5rem", fontWeight: 600, color: "#EFE393" },
    h5: { fontSize: "1.5rem", fontWeight: 400, color: "#EFE393" },
    h6: { fontSize: "1.5rem", fontWeight: 400, color: "#EFE393" },
    body1: { fontSize: "1rem", color: "#EFE393" },
    body2: { fontSize: "1rem", color: "#CCCCCC" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#222222",
          color: "#EFE393",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "#EFE393",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#2C2C2C",
          borderRadius: 8,
          "& .MuiInputBase-root": {
            color: "#EFE393",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EFE393",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D8D080",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#EFE393",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          color: "#181818",
          backgroundColor: "#EFE393",
          "&:hover": {
            backgroundColor: "#D8D080",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          scrollbarWidth: "thin",
          scrollbarColor: "#EFE393 #2C2C2C",
        },
        "html, body": {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          scrollBehavior: "smooth",
          backgroundColor: "#181818",
        },
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          cursor: "url('/assets/cursor/cursor.png') 10 10, auto !important",
        },
        "a, button, span": {
          cursor: "url('/assets/cursor/cursor-pointer.png') 10 10, pointer !important",
        },
        "::-webkit-scrollbar-track": {
          background: "#2C2C2C",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#EFE393",
          borderRadius: "6px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#D8D080",
        },
      },
    },
  },
});

export default theme;
