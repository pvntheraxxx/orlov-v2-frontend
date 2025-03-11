import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion";

const cartItems = [
  {
    id: 1,
    name: "Изящное произведение искусства",
    description: "Уникальное творение, которое заставляет сердце биться чаще.",
    price: 499.99,
  },
  {
    id: 2,
    name: "Современная классика",
    description: "Эталон стиля и элегантности в каждой детали.",
    price: 799.99,
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        background: "#181818",
        minHeight: "100vh",
      }}
    >
      {/* Заголовок с плавным появлением */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#EFE393" }}
        >
          Ваша корзина
        </Typography>
      </motion.div>

      {/* Список товаров с эффектной анимацией */}
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#222222",
        }}
      >
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ListItem>
              <Card
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #2C2C2C, #181818)",
                  color: "#EFE393",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#EFE393" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5, color: "#CCCCCC" }}>
                    {item.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#EFE393" }}
                  >
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          </motion.div>
        ))}
      </List>

      {/* Итоговая сумма и кнопка оформления заказа */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ width: "100%", maxWidth: 600, marginTop: "2rem" }}
      >
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#222222",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#EFE393", mb: 1 }}
          >
            Итого: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              fontSize: "1rem",
              backgroundColor: "#EFE393",
              color: "#181818",
              "&:hover": { backgroundColor: "#D8D080" },
            }}
          >
            Оформить заказ
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Cart;
