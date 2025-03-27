import React from "react";
import { motion } from "framer-motion";
import LeadSection, { containerVariants } from "./LeadSection";
import aboutUsImage from "../../assets/leadSection/about-us-image.webp";

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
  </motion.div>
);

export default AboutUsSection;
