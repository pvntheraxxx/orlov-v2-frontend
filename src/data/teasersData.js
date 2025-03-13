import teaserOneImage from "../assets/teasers/teaserOneImage.webp";
import teaserTwoImage from "../assets/catalog1.jpg";
import teaserThreeImage from "../assets/teasers/delivery.jpg";
import teaserFourImage from "../assets/teasers/teaserFiveImage.webp";
import teaserFiveImage from "../assets/reviews.jpg";

const teasersData = [
  {
    title: "О Нас",
    description: `Мы - компания из России. Создаем ПРЕМИАЛЬНЫЕ аксессуары для каждого ЧЕЛОВЕКА. Производим ЛЮКСОВЫЕ ЧЕХЛЫ для IPhone из эксклюзивных материалов. Объединяем РОСКОШЬ, СТИЛЬ и уникальный ДИЗАЙН в каждом изделии. Наша ЦЕЛЬ - предложить клиентам не просто товар, а ЦЕЛУЮ философию и идеологию!`,
    image: teaserOneImage,
    link: "/about-us",
    buttonText: "Подробнее",
    textColor: "#fff",
    overlayColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: "#222", // Цвет фона
    layout: "image-left",
    animation: "fadeInUp",
  },
  {
    title: "Каталог",
    description:
      "Погрузитесь в МИР эксклюзивных аксессуаров ORLOV, где каждый элемент - отражение Вашего СТИЛЯ. Наш КАТАЛОГ включает в себя: уникальный дизайн, премиальные материалы и великолепное качество. Выбирайте идеальный аксессуар В ПОДАРОК или ДЛЯ СЕБЯ. Позвольте для себя ЛУЧШЕЕ!",
    image: teaserTwoImage,
    link: "/catalog",
    buttonText: "Смотреть каталог",
    textColor: "#fff",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "#333",
    layout: "image-right",
    animation: "slideInLeft",
  },
  {
    title: "Доставка",
    description:
      "Мы доставляем НАШИ эксклюзивные товары по всей РОССИИ и всему МИРУ, быстро и безопасно. Надежная упаковка, премиальный сервис и гарантия сохранности на каждом этапе ПРОИЗВОДСТВА. Ваш СТИЛЬ – в ВАШИХ руках, где бы вы ни находились вместе с ORLOV.",
    image: teaserThreeImage,
    link: "/delivery",
    buttonText: "Узнать условия",
    textColor: "#fff",
    overlayColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "#444",
    layout: "image-left",
    animation: "slideInRight",
  },
  {
    title: "Контакты",
    description:
      "В случае если у ВАС остались вопросы, свяжитесь с НАМИ любым удобным способом! Сотрудничество с нашей компанией или обратная связь с нашей командой. Мы всегда готовы помочь ВАМ и проконсультировать по любым вопросам!",
    image: teaserFourImage,
    link: "/contacts",
    buttonText: "Связаться",
    textColor: "#fff",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "#111",
    layout: "image-right",
    animation: "fadeInUp",
  },
  {
    title: "Отзывы",
    description:
      "Наши клиенты — наша гордость! Ознакомьтесь с реальными отзывами о качестве НАШИХ товаров, сервисе и доставке. Оставляйте свои ОТЗЫВЫ и делитесь впечатлениями от продукции ORLOV. Мы дорожим Вашим доверием к НАМ и всегда стремимся к совершенству!",
    image: teaserFiveImage,
    link: "/reviews",
    buttonText: "Читать отзывы",
    textColor: "#fff",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "#222",
    layout: "image-left",
    animation: "fadeInUp",
  },
  
];

export default teasersData;
