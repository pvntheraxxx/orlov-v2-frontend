import fs from "fs/promises";

// Читаем файл reviewsData.js
const checkMissingAvatars = async () => {
  try {
    let data = await fs.readFile("reviewsData.js", "utf8");

    // Извлекаем массив reviews
    const reviewsMatch = data.match(/const reviews = (\[.*\]);/s);
    if (!reviewsMatch) {
      console.error("❌ Ошибка: Не найден массив reviews в reviewsData.js");
      return;
    }

    let reviews = eval(reviewsMatch[1]); // Преобразуем строку в массив

    // Фильтруем пользователей без аватарки
    const missingAvatars = reviews.filter(
      (review) => !review.avatar || review.avatar === "/assets/avatars/default.webp"
    );

    // Выводим список пользователей без аватарки
    if (missingAvatars.length > 0) {
      console.log("⚠️ Пользователи без аватарки:");
      missingAvatars.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name} (${user.company})`);
      });
    } else {
      console.log("✅ У всех пользователей есть аватарки!");
    }
  } catch (err) {
    console.error("❌ Ошибка при проверке аватарок:", err);
  }
};

// Запуск проверки
checkMissingAvatars();
