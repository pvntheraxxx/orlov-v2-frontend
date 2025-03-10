import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EFE393", // Мягкое лимонное золото
    },
    secondary: {
      main: "#2C2C2C", // Глубокий тёмно-серый
    },
    background: {
      default: "#181818", // Чистый тёмный фон
      paper: "#222222", // Карточки и элементы
    },
    text: {
      primary: "#EFE393", // Главный текст теперь мягкое золото
      secondary: "#CCCCCC", // Дополнительный текст — мягкий серый
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#EFE393",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#EFE393",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#EFE393",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#EFE393",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      color: "#EFE393",
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    body2: {
      fontSize: "1rem",
      color: "#CCCCCC",
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          color: "#181818", // Контрастный тёмный текст на кнопках
          backgroundColor: "#EFE393",
          "&:hover": {
            backgroundColor: "#D8D080", // Немного затемняем при наведении
          },
        },
      },
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     body {
    //       cursor: url('/assets/cursor/cursor.png') 10 10, auto !important;
    //     }
    //     a, button {
    //       cursor: url('/assets/cursor/cursor-pointer.png') 10 10, pointer !important;
    //     }
    //   `,
    // },
  },
});

export default theme;
