import fs from "fs";
import path from "path";

// Путь к папке с аватарками
const avatarDir = '../../public/assets/avatars'

// Таблица транслитерации
const translitMap = { 
   "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e", "ж": "zh", "з": "z",
   "и": "i", "й": "i", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
   "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
   "ы": "y", "э": "e", "ю": "iu", "я": "ia", "ь": "'", "ъ": "", "'": "'"
};

// Функция транслитерации
const translit = (text) => text
   .toLowerCase()
   .split("")
   .map(char => translitMap[char] || char)
   .join("")
   .replace(/\s+/g, "-");

// Читаем папку с аватарками
fs.readdir(avatarDir, (err, files) => {
   if (err) {
      console.error("❌ Ошибка чтения папки:", err);
      return;
   }

   files.forEach((file) => {
      const originalPath = path.join(avatarDir, file);
      const ext = path.extname(file);
      const nameWithoutExt = path.basename(file, ext);
      const newName = translit(nameWithoutExt) + ext;
      const newPath = path.join(avatarDir, newName);

      // Переименовываем файлы
      fs.rename(originalPath, newPath, (err) => {
         if (err) console.error(`❌ Ошибка переименования ${file}:`, err);
         else console.log(`✅ ${file} → ${newName}`);
      });
   });
});
