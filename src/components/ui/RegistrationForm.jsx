import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";

const RegistrationForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("Все поля обязательны!");
      return;
    }
    setError("");
    console.log("Регистрация успешна", formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Card
          sx={{
            padding: 4,
            textAlign: "center",
            width: 400,
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Регистрация
            </Typography>
            {error && (
              <Typography color="error" mb={2}>
                {error}
              </Typography>
            )}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <TextField
                label="Имя"
                name="name"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                label="Пароль"
                name="password"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary">
                Зарегистрироваться
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Dialog>
  );
};

export default RegistrationForm;
