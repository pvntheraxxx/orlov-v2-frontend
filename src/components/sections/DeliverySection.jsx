import React from "react";
import { motion } from "framer-motion";
import LeadSection, { containerVariants } from "./LeadSection";
import deliveryImage from "../../assets/leadSection/delivery-image.webp";

const DeliverySection = () => (
  <motion.div initial="hidden" animate="visible" variants={containerVariants}>
    <LeadSection
      title="ДОСТАВКА ПО МИРУ"
      description="Мы обеспечиваем быструю и надежную доставку по России и МИРУ. Наши товары тщательно упаковываются, чтобы гарантировать их сохранность. Выберите любой способ доставки из предложенных вариантов. Если у Вас возникли вопросы по логистике, мы предложим удобные решения в кратчайшие сроки. Мы предлагаем подробное отслеживание и прозрачную консультационную поддержку по товарам."
      buttonText="Подробнее"
      buttonLink="#deliveryMap"
      imagePosition="right"
      imageUrl={deliveryImage}
    />
  </motion.div>
);

export default DeliverySection;
