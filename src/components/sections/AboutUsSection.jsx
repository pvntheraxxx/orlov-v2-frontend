import React from "react";
import { motion } from "framer-motion";
import LeadSection, { containerVariants } from "./LeadSection";
import aboutUsImage from "../../assets/leadSection/about-us-image.webp";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const values = [
  {
    title: "Индивидуальный подход",
    description:
      "Мы понимаем, что каждый клиент уникален. Именно поэтому мы разрабатываем решения, полностью соответствующие Вашим пожеланиям.",
  },
  {
    title: "Высочайшее качество",
    description:
      "Отборные материалы, тщательная ручная работа и строгий контроль качества – основа наших изделий.",
  },
  {
    title: "Стиль и статус",
    description:
      "Каждый аксессуар от ORLOV — это выражение Вашего стиля, отражение внутренней силы и уверенности.",
  },
];

const AboutUsSection = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <LeadSection
      title="MADE IN RUSSIA"
      description="В компании ORLOV мы создаем не просто аксессуары - мы создаем символы СТАТУСА, эксклюзивности и индивидуальности. Наша визитная карточка – это премиальное обслуживание, где МЫ находим подход к каждому клиенту. Мы тщательно отбираем материалы, гарантируя долговечность и совершенство каждой детали. Наши изделия подчеркивают Ваш СТИЛЬ, дополняя его роскошью и уникальностью."
      buttonText="Перейти в каталог"
      buttonLink="/catalog"
      imagePosition="left"
      imageUrl={aboutUsImage}
    />

    <Box sx={{ px: { xs: 2, md: 12 }, py: 6 }}>
      <Grid container spacing={4}>
        {values.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} display="flex" justifyContent="center">
        <Button variant="contained" size="large" href="/about">
          Узнать больше о компании
        </Button>
      </Box>
    </Box>
  </motion.div>
);

export default AboutUsSection;
