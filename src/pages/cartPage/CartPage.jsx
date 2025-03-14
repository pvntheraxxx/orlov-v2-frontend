import React, { useContext } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../contexts/CartContext"; // Импорт контекста

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        p: 3,
        mt: "80px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "text.primary", mb: 3, textAlign: "center" }}
      >
        Корзина
      </Typography>

      {cartItems.length === 0 ? (
        <Typography
          variant="h5"
          sx={{ color: "text.primary", textAlign: "center", mt: 5 }}
        >
          Ваша корзина пуста
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {cartItems.map((item) => (
                <Grid item xs={6} sm={4} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      sx={{
                        bgcolor: "background.paper",
                        color: "text.primary",
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        sx={{
                          width: "100%",
                          height: 180, // увеличенная высота
                          objectFit: "cover",
                          objectPosition: "top", // показываем верхнюю часть изображения
                        }}
                      />
                      <CardContent sx={{ textAlign: "center", p: 1.5 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="primary"
                          sx={{ mt: 0.5 }}
                        >
                          ₽{item.price}
                        </Typography>
                      </CardContent>
                      <IconButton
                        onClick={() => removeFromCart(item.uniqueId)}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "rgba(0,0,0,0.5)",
                          color: "text.primary",
                          "&:hover": { bgcolor: "red" },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                p: 3,
                borderRadius: 3,
                position: "sticky",
                top: "100px",
                alignSelf: "start",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Оформление заказа
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Проверьте ваш заказ перед оформлением. После нажатия кнопки
                "Оплатить" вы будете перенаправлены на страницу оплаты.
              </Typography>
              <Divider sx={{ bgcolor: "secondary.main", my: 2 }} />
              <Box
                sx={{ bgcolor: "secondary.main", p: 2, borderRadius: 2, mb: 2 }}
              >
                <Typography variant="h6" color="primary">
                  Итого: ₽{totalPrice}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                disabled={cartItems.length === 0}
              >
                Оплатить
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CartPage;
