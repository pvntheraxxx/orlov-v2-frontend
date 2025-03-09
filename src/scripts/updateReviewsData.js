import fs from "fs/promises"; // Используем промисы для работы с файловой системой

// Функция для транслитерации кириллицы в латиницу
const translitMap = {
  "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e", "ж": "zh", "з": "z",
  "и": "i", "й": "i", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
  "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
  "ы": "y", "э": "e", "ю": "iu", "я": "ia", "ь": "", "ъ": "", "'": ""
};

// Функция генерации пути к аватарке
const getAvatarPath = (name) => {
  if (!name) return "/assets/avatars/default.webp";
  const latinName = name.toLowerCase().split("").map(char => translitMap[char] || char).join("");
  const fileName = latinName.replace(/\s+/g, "-") + ".webp";
  return `/assets/avatars/${fileName}`;
};

// Функция обновления reviewsData.js
const updateReviewsFile = async () => {
  try {
    // Читаем reviewsData.js
    let data = await fs.readFile("reviewsData.js", "utf8");

    // Извлекаем массив reviews из файла
    const reviewsMatch = data.match(/const reviews = (\[.*\]);/s);
    if (!reviewsMatch) {
      console.error("❌ Ошибка: Не найден массив reviews в reviewsData.js");
      return;
    }

    let reviews = eval(reviewsMatch[1]); // Преобразуем строку в массив

    // Добавляем каждому объекту свойство avatar
    reviews = reviews.map(review => ({
      ...review,
      avatar: getAvatarPath(review.name)
    }));

    // Генерируем обновленный код
    const updatedData = `const reviews = ${JSON.stringify(reviews, null, 2)};\n\nexport default reviews;`;

    // Записываем обновленный файл
    await fs.writeFile("reviewsData.js", updatedData, "utf8");
    console.log("✅ Файл reviewsData.js успешно обновлен!");
  } catch (err) {
    console.error("❌ Ошибка обработки файла:", err);
  }
};

// Запуск функции обновления
updateReviewsFile();
