import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

export default function RequestPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [form, setForm] = useState({
    name: "",
    contact: "",
    comment: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.agreed) return;

    console.log("Форма отправлена:", form);
    setSubmitted(true);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: { xs: 12, sm: 14 }, // ↑ больше воздуха сверху на мобилках
        pb: { xs: 18, sm: 16 }, // ↓ больше воздуха снизу на мобилках
        px: { xs: 2, sm: 3 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: "20px",
            boxShadow: 6,
          }}
        >
          {submitted ? (
            <Typography
              variant={isMobile ? "h6" : "h5"}
              align="center"
              fontWeight="bold"
            >
              Спасибо за заявку! <br /> Мы скоро свяжемся с вами.
            </Typography>
          ) : (
            <>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                gutterBottom
                align="center"
                fontWeight="bold"
                sx={{ color: "#EFE393" }}
              >
                Оставьте заявку
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                align="center"
                color="text.secondary"
              >
                Мы свяжемся с вами в течение 15 минут.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                display="flex"
                flexDirection="column"
                gap={2}
                mt={3}
              >
                <TextField
                  label="Имя"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Телефон или Email"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Комментарий"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  fullWidth
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreed"
                      checked={form.agreed}
                      onChange={handleChange}
                      required
                    />
                  }
                  label="Согласен с политикой конфиденциальности *"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "12px",
                    py: 1.5,
                    mb: { xs: 8, sm: 0 }, // 👈 отступ снизу только на мобилках
                  }}
                >
                  Отправить заявку
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </motion.div>
    </Container>
  );
}
