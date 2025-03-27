import React from "react";
import LeadSection from "./LeadSection";
import contactsImage from "../../assets/leadSection/contacts3.svg";

const ContactsSection = () => (
  <LeadSection
    title="СВЯЖИТЕСЬ С НАМИ"
    description="Наша команда всегда готова помочь Вам 24/7. Если у Вас есть вопросы о продукции, заказах или сотрудничестве – свяжитесь С НАМИ любым удобным способом! Мы гарантируем оперативность и внимательное отношение к деталям. Мы ЦЕНИМ доверие клиентов к нашей компании и предлагаем форматы общения для достижения совместного результата."
    buttonText="Связаться"
    buttonLink="/contacts"
    imagePosition="left"
    imageUrl={contactsImage}
    imageStyles={{
      borderRadius: 0,
      boxShadow: "none",
      width: "105%",
      maxWidth: "none",
    }}
  />
);

export default ContactsSection;
