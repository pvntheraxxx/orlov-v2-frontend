import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../../data/productsData";

const ProductDetails = () => {
  const { id } = useParams(); // получаем id товара из URL
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Продукт не найден
        </Typography>
      </Container>
    );
  }

  // Если у товара нет массива картинок, создаём его из одной картинки
  const images = product.images || [product.image];

  // Комментарии
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      setComments((prev) => [...prev, commentText.trim()]);
      setCommentText("");
    }
  };

  return (
    <Box sx={{ mt: "100px" }}>
      {" "}
      {/* Отступ сверху, чтобы не попадать под Navbar */}
      <Container sx={{ py: 4 }}>
        {/* Название товара */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>

        <Grid container spacing={2}>
          {/* Блок с фотографиями (слева) */}
          <Grid item xs={12} md={6} sx={{ height: { xs: "auto", md: "60vh" } }}>
            <Box sx={{ height: "100%" }}>
              {/* Если одна фотография */}
              {images.length === 1 ? (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={images[0]}
                    alt={product.name}
                    style={{
                      height: "100%",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </Box>
              ) : (
                /* Если несколько фотографий */
                <Grid container spacing={1} sx={{ height: "100%" }}>
                  {images.map((img, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      key={index}
                      sx={{ height: "100%" }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={img}
                          alt={product.name}
                          style={{
                            height: "100%",
                            objectFit: "contain",
                            maxWidth: "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Grid>

          {/* Блок с подробностями (справа) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" color="primary" gutterBottom>
                {product.price} ₽
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description ||
                  "Подробное описание продукта появится здесь. Расскажите нам, что вдохновило вас на выбор этого шедевра!"}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Раздел комментариев */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Комментарии
          </Typography>
          <Box sx={{ mb: 2 }}>
            {comments.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Пока нет комментариев. Будьте первым и оставьте отзыв!
              </Typography>
            ) : (
              comments.map((comment, index) => (
                <Box
                  key={index}
                  sx={{ p: 2, mb: 1, backgroundColor: "transparent" }}
                >
                  <Typography variant="body2">{comment}</Typography>
                </Box>
              ))
            )}
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <TextField
              fullWidth
              label="Оставить комментарий"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddComment}>
              Отправить
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
