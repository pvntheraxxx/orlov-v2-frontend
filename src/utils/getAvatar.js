const translitMap = {
  "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e", "ж": "zh", "з": "z",
  "и": "i", "й": "i", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
  "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
  "ы": "y", "э": "e", "ю": "iu", "я": "ia", "ь": "'", "ъ": "", "'": "'" // Убираем твердый знак
};

const getAvatarPath = (name) => {
  if (!name) return "/assets/avatars/default.webp";

  const cleanName = name.trim().toLowerCase();
  const latinName = cleanName.split("").map(char => translitMap[char] || char).join("");
  const fileName = latinName.replace(/\s+/g, "-") + ".webp";
  
  console.log(`Проверяем имя: ${name} → ${fileName}`); // Логирование пути

  return `/assets/avatars/${fileName}`;
};
