import React, { useState, useEffect, useMemo, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Checkbox,
  Slider,
  FormControlLabel,
  Select,
  MenuItem,
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Modal,
} from "@mui/material";
import { products } from "../../data/productsData"; // импорт данных
import { CartContext } from "../../contexts/CartContext"; // импорт контекста корзины
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function Catalog() {
  const initialPriceRange = [4999, 20000];
  const initialColor = "Все";
  const initialTypes = [];

  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedTypes, setSelectedTypes] = useState(initialTypes);
  const [sortOption, setSortOption] = useState("Популярные");

  // Состояние для уведомления
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const colorOptions = [
    "Все",
    "Черный",
    "Белый",
    "Красный",
    "Синий",
    "Золотой",
    "Серый",
  ];
  const typeOptions = ["Кожаные", "Силиконовые", "Металлические", "Деревянные"];

  // Получаем функцию добавления товара в корзину из контекста
  const { addToCart } = useContext(CartContext);

  // Фильтрация и сортировка
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (
        searchQuery &&
        !(
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      ) {
        return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
        return false;
      }
      if (selectedColor !== "Все" && product.color !== selectedColor) {
        return false;
      }
      return true;
    });

    if (sortOption === "Цена: по возрастанию") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Цена: по убыванию") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchQuery, priceRange, selectedTypes, selectedColor, sortOption]);

  // Сброс фильтров
  const resetFilters = () => {
    setPriceRange(initialPriceRange);
    setSelectedColor(initialColor);
    setSelectedTypes(initialTypes);
    setSortOption("Популярные");
    setSearchQuery("");
  };

  // Обработчик нажатия кнопки "Купить"
  const handleBuyClick = (product) => {
    addToCart(product);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 1500);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 12,
        pb: 10,
        bgcolor: "background.default",
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          p: 0,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme.palette.secondary.main,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#D8D080",
          },
        }}
      >
        {/* Фильтры */}
        <Box
          sx={{
            position: isMobile ? "relative" : "fixed",
            top: isMobile ? "auto" : 96,
            height: isMobile ? "auto" : "calc(100vh - 112px)",
            overflowY: "auto",
            p: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            // На мобильных делаем колонку уже с отступами по бокам
            width: isMobile ? "calc(100% - 32px)" : "20%",
            mx: isMobile ? 2 : 0,
            mb: isMobile ? 2 : 0,
            zIndex: 1,
          }}
        >
          <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
            Цена
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={4999}
            max={20000}
            valueLabelDisplay="auto"
            sx={{ width: "93%" }}
          />

          <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
            Тип чехла
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {typeOptions.map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    color="primary"
                    checked={selectedTypes.includes(type)}
                    onChange={() =>
                      setSelectedTypes((prev) =>
                        prev.includes(type)
                          ? prev.filter((t) => t !== type)
                          : [...prev, type]
                      )
                    }
                  />
                }
                label={<Typography color="text.primary">{type}</Typography>}
              />
            ))}
          </Box>

          <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
            Цвет
          </Typography>
          <Select
            fullWidth
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            sx={{ mb: 2 }}
          >
            {colorOptions.map((color) => (
              <MenuItem key={color} value={color}>
                {color}
              </MenuItem>
            ))}
          </Select>

          <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
            Сортировать по
          </Typography>
          <Select
            fullWidth
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Популярные">Популярные</MenuItem>
            <MenuItem value="Цена: по возрастанию">
              Цена: по возрастанию
            </MenuItem>
            <MenuItem value="Цена: по убыванию">Цена: по убыванию</MenuItem>
          </Select>

          <Button
            fullWidth
            variant="outlined"
            onClick={resetFilters}
            sx={{ mt: 2 }}
          >
            Сбросить фильтры
          </Button>
        </Box>

        {/* Секция карточек */}
        <Box
          sx={{
            flexGrow: 1,
            ml: isMobile ? 0 : "calc(20% + 32px)",
            p: 2,
          }}
        >
          {filteredProducts.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography variant="h6" color="text.primary">
                Нет удовлетворяющих категорий товаров.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      height: { xs: "400px", md: "600px" },
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    {/* Фоновое изображение */}
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: { xs: "top", md: "center" },
                      }}
                    />

                    {/* Тёмная подложка под текст */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        p: 2,
                        background: "rgba(0, 0, 0, 0.4)",
                        color: "#fff",
                      }}
                    >
                      <Typography variant="h5">{product.name}</Typography>
                      <Typography sx={{ mt: 1 }}>
                        Цена: {product.price} ₽
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          backgroundColor: "primary.main",
                          color: "#000",
                          fontWeight: "bold",
                          borderRadius: "8px",
                        }}
                        fullWidth
                        onClick={() => handleBuyClick(product)}
                      >
                        Купить
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>

      {/* Модальное окно для уведомления */}
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
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Товар добавлен в корзину!</Typography>
            <Button
              onClick={handleModalClose}
              sx={{ mt: 2 }}
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
