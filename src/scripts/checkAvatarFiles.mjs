import fs from "fs/promises";

const AVATAR_FOLDER = "../../public/assets/avatars/"; // Папка с аватарками

const checkAvatarFiles = async () => {
  try {
    // Читаем reviewsData.js
    let data = await fs.readFile("reviewsData.js", "utf8");

    // Извлекаем массив reviews
    const reviewsMatch = data.match(/const reviews = (\[.*\]);/s);
    if (!reviewsMatch) {
      console.error("❌ Ошибка: Не найден массив reviews в reviewsData.js");
      return;
    }

    let reviews = eval(reviewsMatch[1]); // Преобразуем строку в массив

    // Получаем список всех файлов в папке avatars
    let avatarFiles = await fs.readdir(AVATAR_FOLDER);

    // Список пользователей, чьи файлы отсутствуют
    const missingAvatars = [];

    reviews.forEach((review) => {
      const avatarFile = review.avatar.split("/").pop(); // Достаем имя файла из пути
      if (!avatarFiles.includes(avatarFile)) {
        missingAvatars.push({
          name: review.name,
          company: review.company,
          expectedFile: avatarFile
        });
      }
    });

    // Выводим список отсутствующих файлов
    if (missingAvatars.length > 0) {
      console.log("⚠️ Найдены несоответствия в именах аватарок:");
      missingAvatars.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name} (${user.company}) → Файл отсутствует: ${user.expectedFile}`);
      });
    } else {
      console.log("✅ Все файлы соответствуют записям в reviewsData.js!");
    }
  } catch (err) {
    console.error("❌ Ошибка при проверке файлов аватарок:", err);
  }
};

// Запуск проверки
checkAvatarFiles();
