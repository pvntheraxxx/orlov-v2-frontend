import { useParams } from "react-router-dom";
import { products } from "../../data/productsData";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Box, Typography, Button, Grid, TextField, Modal } from "@mui/material";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBuyClick = () => {
    addToCart(product);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 1500);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  if (!product) return <Typography>Товар не найден</Typography>;

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        pt: { xs: 12, md: 14 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#EFE393",
          fontWeight: "bold",
          mb: { xs: 3, md: 5 },
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        {product.name}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
              display: "block",
              borderRadius: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              color: "#EFE393",
              mb: 1,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
            }}
          >
            Описание
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#EFE393",
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            {product.description}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#EFE393",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.3rem", md: "1.7rem" },
            }}
          >
            {product.price} ₽
          </Typography>

          <Button
            variant="contained"
            onClick={handleBuyClick}
            sx={{
              backgroundColor: "#EFE393",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12px",
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.9rem", md: "1rem" },
              cursor: 'url("/assets/cursor/cursor-pointer.png"), pointer',
              "&:hover": { backgroundColor: "#e8dd82" },
            }}
          >
            Купить
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 5, md: 8 } }}>
        <Typography
          variant="h6"
          sx={{
            color: "#EFE393",
            mb: 2,
            fontSize: { xs: "1.2rem", md: "1.4rem" },
          }}
        >
          Комментарии
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
          Пока нет комментариев. Будьте первым и оставьте отзыв!
        </Typography>
        <TextField
          fullWidth
          placeholder="Ваш комментарий..."
          multiline
          minRows={3}
          variant="outlined"
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 2,
            input: { color: "#fff" },
            textarea: { color: "#fff" },
            mb: 2,
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EFE393",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "12px",
            px: 4,
            py: 1,
            fontSize: { xs: "0.9rem", md: "1rem" },
            cursor: 'url("/assets/cursor/cursor-pointer.png"), pointer',
            "&:hover": { backgroundColor: "#e8dd82" },
          }}
        >
          Отправить
        </Button>
      </Box>

      <Modal
        sx={{
          zIndex: 9999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={modalOpen}
        onClose={handleModalClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              bgcolor: "#1e1e1e",
              color: "#EFE393",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Товар добавлен в корзину!</Typography>
            <Button
              onClick={handleModalClose}
              sx={{
                mt: 2,
                backgroundColor: "#EFE393",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "8px",
                px: 4,
                py: 1,
                "&:hover": { backgroundColor: "#e8dd82" },
              }}
              variant="contained"
            >
              OK
            </Button>
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
}
