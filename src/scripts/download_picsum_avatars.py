import os
import json
import requests
from PIL import Image
from io import BytesIO
import unidecode  # Для транслитерации имен в латиницу

# Загружаем данные из reviews.json
with open("reviews.json", "r", encoding="utf-8") as file:
    reviews = json.load(file)

# Создаем папку для изображений
folder_name = "picsum_avatars"
os.makedirs(folder_name, exist_ok=True)

# Функция транслитерации имен в латиницу
def transliterate(name):
    return unidecode.unidecode(name).lower().replace(" ", "-")

# Подсчитываем количество уже скачанных файлов
existing_files = set(os.listdir(folder_name))

print(f"🔹 Уже скачано: {len(existing_files)} из {len(reviews)}")

# Скачиваем аватарки только для тех, которых нет
for review in reviews:
    name = review["name"]
    filename = transliterate(name) + ".webp"  # Пример: "alexandr-kozlov.webp"
    file_path = os.path.join(folder_name, filename)

    # Пропускаем, если файл уже есть
    if filename in existing_files:
        print(f"✅ Уже существует: {file_path}, пропускаем...")
        continue

    url = f"https://picsum.photos/150/150?random={hash(name) % 10000}"  # Уникальная картинка для каждого

    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            img.convert("RGB").save(file_path, "WEBP")  # Сохраняем в WebP
            print(f"✅ Сохранено: {file_path}")
        else:
            print(f"⚠ Ошибка загрузки: {url}")
    except Exception as e:
        print(f"❌ Ошибка: {e}")

print("✅ Все недостающие изображения скачаны в формате WebP!")
