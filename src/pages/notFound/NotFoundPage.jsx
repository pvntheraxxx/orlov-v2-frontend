import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={theme.palette.background.default}
      sx={{
        px: { xs: 1, sm: 0 }, // Добавляем отступ 5px (1 * 8px = 8px, но с учетом `sm: 0`)
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          bgcolor: theme.palette.background.paper,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          mx: { xs: 0.625, sm: "auto" }, // 5px отступ (5 / 8 ≈ 0.625)
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" gutterBottom>
          Извините, страница не найдена.
        </Typography>
        <Typography variant="body1" paragraph>
          Но вы всегда можете вернуться в наш каталог и найти роскошные
          аксессуары!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Вернуться на главную
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
