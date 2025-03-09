import fs from "fs/promises";
import path from "path";

const AVATAR_FOLDER = "../../public/assets/avatars";

const fixAvatarNames = async () => {
  try {
    // Проверяем, существует ли папка
    try {
      await fs.access(AVATAR_FOLDER);
    } catch {
      console.error(`❌ Ошибка: Папка с аватарками не найдена: ${AVATAR_FOLDER}`);
      return;
    }

    let avatarFiles = await fs.readdir(AVATAR_FOLDER);

    for (let file of avatarFiles) {
      let newFileName = file.replace("'", ""); // Удаляем апостроф
      if (file !== newFileName) {
        let oldPath = path.join(AVATAR_FOLDER, file);
        let newPath = path.join(AVATAR_FOLDER, newFileName);
        await fs.rename(oldPath, newPath);
        console.log(`✅ Переименовано: ${file} → ${newFileName}`);
      }
    }
    console.log("🚀 Все файлы обновлены!");
  } catch (err) {
    console.error("❌ Ошибка при переименовании файлов:", err);
  }
};

// Запускаем переименование
fixAvatarNames();
