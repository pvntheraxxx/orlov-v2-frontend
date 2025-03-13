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
    image: "",
  },
  {
    id: 2,
    name: "Элитный кожаный чехол",
    price: 9999,
    image: "",
  },
  {
    id: 3,
    name: "Стильный чехол с золотым тиснением",
    price: 7999,
    image: "",
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
        pt: 12,
      }}
    >
      <Container
        maxWidth={false} // Позволяет контейнеру занимать всю ширину
        sx={{
          flexGrow: 1,
          px: { xs: 1, sm: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          width: "100vw", // Растягивание контейнера на всю ширину экрана
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        </Grid>
      </Container>
    </Box>
  );
}
