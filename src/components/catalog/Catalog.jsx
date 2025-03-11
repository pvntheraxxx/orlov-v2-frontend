import React, { useState } from "react";
import {
  Card,
  CardMedia,
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
  TextField,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Чехол Premium Luxe",
    price: 8999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Элитный кожаный чехол",
    price: 9999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Стильный чехол с золотым тиснением",
    price: 7999,
    image: "https://via.placeholder.com/150",
  },
];

export default function Catalog() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([5000, 20000]);
  const [sortOption, setSortOption] = useState("Популярные");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        pt: 12, // Отступ сверху для компенсации NavBar
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          px: { xs: 1, sm: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
          <Grid item xs={12} md={3}>
            <Box sx={{ p: 2, bgcolor: "background.paper", borderRadius: 2 }}>
              <Typography variant="h6">Тип чехла</Typography>
              {["Кожаные", "Силиконовые", "Металлические", "Деревянные"].map(
                (type) => (
                  <FormControlLabel
                    key={type}
                    control={<Checkbox color="primary" />}
                    label={type}
                  />
                )
              )}
              <Typography variant="h6" sx={{ mt: 3 }}>
                Цена
              </Typography>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                min={5000}
                max={20000}
                valueLabelDisplay="auto"
              />
              <Typography variant="h6" sx={{ mt: 3 }}>
                Сортировать по
              </Typography>
              <Select
                fullWidth
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <MenuItem value="Популярные">Популярные</MenuItem>
                <MenuItem value="Цена: по возрастанию">
                  Цена: по возрастанию
                </MenuItem>
                <MenuItem value="Цена: по убыванию">Цена: по убыванию</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            container
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Поиск..."
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
            {filteredProducts.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={product.id}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "450px",
                    width: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 220, objectFit: "cover" }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price.toLocaleString()} ₽
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, width: "100%" }}
                    >
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
