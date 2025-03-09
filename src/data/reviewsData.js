const reviews = [
  {
    "name": "Александр Козлов",
    "company": "Москва",
    "text": "Отличное качество материалов, чехол выглядит дорого и стильно!",
    "rating": 5,
    "avatar": "/assets/avatars/aleksandr-kozlov.webp"
  },
  {
    "name": "Екатерина Смирнова",
    "company": "Санкт-Петербург",
    "text": "Очень понравилось! Чехол приятный на ощупь, идеально сидит на телефоне.",
    "rating": 5,
    "avatar": "/assets/avatars/ekaterina-smirnova.webp"
  },
  {
    "name": "Иван Петров",
    "company": "Казань",
    "text": "Заказывал кожаный чехол – шикарный! Цвет соответствует фото, доставка быстрая.",
    "rating": 5,
    "avatar": "/assets/avatars/ivan-petrov.webp"
  },
  {
    "name": "Мария Васильева",
    "company": "Екатеринбург",
    "text": "Брала в подарок. Получатель в восторге! Упаковка тоже на высоте.",
    "rating": 5,
    "avatar": "/assets/avatars/mariia-vasilьeva.webp"
  },
  {
    "name": "Артем Сидоров",
    "company": "Сочи",
    "text": "Очень стильный аксессуар, приятно держать в руках. Магазин супер!",
    "rating": 5,
    "avatar": "/assets/avatars/artem-sidorov.webp"
  },
  {
    "name": "Ольга Морозова",
    "company": "Ростов-на-Дону",
    "text": "Не ожидала такого качества, просто превосходно! Теперь буду заказывать только здесь.",
    "rating": 5,
    "avatar": "/assets/avatars/olьga-morozova.webp"
  },
  {
    "name": "Дмитрий Иванов",
    "company": "Челябинск",
    "text": "Чехол премиум-класса, идеальная посадка. Доволен покупкой!",
    "rating": 5,
    "avatar": "/assets/avatars/dmitrii-ivanov.webp"
  },
  {
    "name": "Анна Тихонова",
    "company": "Владивосток",
    "text": "Невероятно красивые аксессуары. Брала кожаный кардхолдер – просто восторг!",
    "rating": 5,
    "avatar": "/assets/avatars/anna-tikhonova.webp"
  },
  {
    "name": "Павел Григорьев",
    "company": "Краснодар",
    "text": "Магазин реально топ! Чехлы как в бутике, но по нормальной цене.",
    "rating": 5,
    "avatar": "/assets/avatars/pavel-grigorьev.webp"
  },
  {
    "name": "Светлана Лебедева",
    "company": "Нижний Новгород",
    "text": "Качество выше всех похвал, чехол сел идеально. Рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/svetlana-lebedeva.webp"
  },
  {
    "name": "Виктория Александрова",
    "company": "Самара",
    "text": "Шикарные аксессуары, приятная текстура, стильный дизайн!",
    "rating": 5,
    "avatar": "/assets/avatars/viktoriia-aleksandrova.webp"
  },
  {
    "name": "Максим Егоров",
    "company": "Уфа",
    "text": "Заказывал несколько раз – ни разу не разочаровался. Очень доволен сервисом!",
    "rating": 5,
    "avatar": "/assets/avatars/maksim-egorov.webp"
  },
  {
    "name": "Дарья Николаева",
    "company": "Иркутск",
    "text": "Не просто чехол, а настоящее произведение искусства!",
    "rating": 5,
    "avatar": "/assets/avatars/darьia-nikolaeva.webp"
  },
  {
    "name": "Руслан Орлов",
    "company": "Тюмень",
    "text": "Брал себе и жене, оба чехла отличного качества, люкс!",
    "rating": 5,
    "avatar": "/assets/avatars/ruslan-orlov.webp"
  },
  {
    "name": "Елена Федорова",
    "company": "Калининград",
    "text": "Цвет, текстура, упаковка – все на высоте. Настоящий премиум!",
    "rating": 5,
    "avatar": "/assets/avatars/elena-fedorova.webp"
  },
  {
    "name": "Николай Захаров",
    "company": "Саратов",
    "text": "Один из лучших магазинов! Реально качественные вещи.",
    "rating": 5,
    "avatar": "/assets/avatars/nikolai-zakharov.webp"
  },
  {
    "name": "София Беляева",
    "company": "Воронеж",
    "text": "Классика и элегантность в одном. Чехол бомба!",
    "rating": 5,
    "avatar": "/assets/avatars/sofiia-beliaeva.webp"
  },
  {
    "name": "Андрей Макаров",
    "company": "Тольятти",
    "text": "Купил чехол из натуральной кожи – просто шик! Спасибо!",
    "rating": 5,
    "avatar": "/assets/avatars/andrei-makarov.webp"
  },
  {
    "name": "Марина Серова",
    "company": "Пенза",
    "text": "Приятный сюрприз – чехол лучше, чем ожидала. Стильно и дорого!",
    "rating": 5,
    "avatar": "/assets/avatars/marina-serova.webp"
  },
  {
    "name": "Сергей Волков",
    "company": "Киров",
    "text": "Прочный, стильный, удобный – просто идеальный аксессуар!",
    "rating": 5,
    "avatar": "/assets/avatars/sergei-volkov.webp"
  },
  {
    "name": "Лилия Антонова",
    "company": "Омск",
    "text": "Сомневалась, но вживую чехол выглядит даже круче. Спасибо!",
    "rating": 5,
    "avatar": "/assets/avatars/liliia-antonova.webp"
  },
  {
    "name": "Алексей Павлов",
    "company": "Новосибирск",
    "text": "Лучший магазин аксессуаров, что я встречал!",
    "rating": 5,
    "avatar": "/assets/avatars/aleksei-pavlov.webp"
  },
  {
    "name": "Татьяна Миронова",
    "company": "Владимир",
    "text": "Роскошь во всем! Теперь хочу заказать еще и кардхолдер.",
    "rating": 5,
    "avatar": "/assets/avatars/tatьiana-mironova.webp"
  },
  {
    "name": "Кирилл Семенов",
    "company": "Барнаул",
    "text": "Качественно, красиво, дорого смотрится. Лучший выбор!",
    "rating": 5,
    "avatar": "/assets/avatars/kirill-semenov.webp"
  },
  {
    "name": "Оксана Громова",
    "company": "Тула",
    "text": "Доставка быстрая, чехол идеально упакован. Всё супер!",
    "rating": 5,
    "avatar": "/assets/avatars/oksana-gromova.webp"
  },
  {
    "name": "Егор Ковалев",
    "company": "Белгород",
    "text": "Приятно удивлен уровнем сервиса. Товар огонь!",
    "rating": 5,
    "avatar": "/assets/avatars/egor-kovalev.webp"
  },
  {
    "name": "Жанна Карпова",
    "company": "Иваново",
    "text": "Заказываю здесь уже третий раз – всегда довольна покупкой.",
    "rating": 5,
    "avatar": "/assets/avatars/zhanna-karpova.webp"
  },
  {
    "name": "Роман Степанов",
    "company": "Архангельск",
    "text": "Чехлы для iPhone просто супер, выглядит реально дорого.",
    "rating": 5,
    "avatar": "/assets/avatars/roman-stepanov.webp"
  },
  {
    "name": "Вера Никифорова",
    "company": "Мурманск",
    "text": "Шикарные аксессуары, на фото не передать всей красоты.",
    "rating": 5,
    "avatar": "/assets/avatars/vera-nikiforova.webp"
  },
  {
    "name": "Илья Мельников",
    "company": "Якутск",
    "text": "Покупка на 5+. Чехол – настоящее удовольствие!",
    "rating": 5,
    "avatar": "/assets/avatars/ilьia-melьnikov.webp"
  },
  {
    "name": "Алла Прохорова",
    "company": "Курган",
    "text": "Стильный и удобный, давно искала такой чехол!",
    "rating": 5,
    "avatar": "/assets/avatars/alla-prokhorova.webp"
  },
  {
    "name": "Анатолий Королев",
    "company": "Брянск",
    "text": "Настоящий люкс, ощущение как в дорогом бутике.",
    "rating": 5,
    "avatar": "/assets/avatars/anatolii-korolev.webp"
  },
  {
    "name": "Галина Сафонова",
    "company": "Чебоксары",
    "text": "Потрясающий выбор, хочется купить всё!",
    "rating": 5,
    "avatar": "/assets/avatars/galina-safonova.webp"
  },
  {
    "name": "Денис Руденко",
    "company": "Нальчик",
    "text": "Чехол выглядит так, будто купил в дорогом бутике.",
    "rating": 5,
    "avatar": "/assets/avatars/denis-rudenko.webp"
  },
  {
    "name": "Ярослав Богданов",
    "company": "Грозный",
    "text": "Премиальный аксессуар по доступной цене!",
    "rating": 5,
    "avatar": "/assets/avatars/iaroslav-bogdanov.webp"
  },
  {
    "name": "Снежана Елисеева",
    "company": "Махачкала",
    "text": "Очень довольна, буду рекомендовать друзьям.",
    "rating": 5,
    "avatar": "/assets/avatars/snezhana-eliseeva.webp"
  },
  {
    "name": "Виталий Борисов",
    "company": "Астрахань",
    "text": "Упаковка, качество – всё на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/vitalii-borisov.webp"
  },
  {
    "name": "Кристина Голубева",
    "company": "Чита",
    "text": "Доставили быстро, сервис отличный.",
    "rating": 5,
    "avatar": "/assets/avatars/kristina-golubeva.webp"
  },
  {
    "name": "Константин Лазарев",
    "company": "Хабаровск",
    "text": "Лучшая покупка за последнее время!",
    "rating": 5,
    "avatar": "/assets/avatars/konstantin-lazarev.webp"
  },
  {
    "name": "Людмила Захарова",
    "company": "Вологда",
    "text": "Спасибо за такую красоту!",
    "rating": 5,
    "avatar": "/assets/avatars/liudmila-zakharova.webp"
  },
  {
    "name": "Олег Новиков",
    "company": "Владивосток",
    "text": "Чехол просто супер, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/oleg-novikov.webp"
  },
  {
    "name": "Маргарита Фролова",
    "company": "Ростов-на-Дону",
    "text": "Очень доволен покупкой, стиль и качество!",
    "rating": 5,
    "avatar": "/assets/avatars/margarita-frolova.webp"
  },
  {
    "name": "Петр Соколов",
    "company": "Новосибирск",
    "text": "Доставка быстрая, а чехол выглядит премиально!",
    "rating": 5,
    "avatar": "/assets/avatars/petr-sokolov.webp"
  },
  {
    "name": "Нина Орлова",
    "company": "Екатеринбург",
    "text": "Прекрасный аксессуар, качество материалов радует!",
    "rating": 5,
    "avatar": "/assets/avatars/nina-orlova.webp"
  },
  {
    "name": "Георгий Васильев",
    "company": "Казань",
    "text": "Очень качественный продукт, рекомендую всем!",
    "rating": 5,
    "avatar": "/assets/avatars/georgii-vasilьev.webp"
  },
  {
    "name": "Светлана Михайлова",
    "company": "Самара",
    "text": "Чехол отлично защищает телефон, выглядит стильно!",
    "rating": 5,
    "avatar": "/assets/avatars/svetlana-mikhailova.webp"
  },
  {
    "name": "Виктор Гусев",
    "company": "Санкт-Петербург",
    "text": "Качество на высшем уровне, дизайн просто класс!",
    "rating": 5,
    "avatar": "/assets/avatars/viktor-gusev.webp"
  },
  {
    "name": "Лариса Миронова",
    "company": "Тверь",
    "text": "Очень понравился дизайн, качество оправдывает ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/larisa-mironova.webp"
  },
  {
    "name": "Евгений Федоров",
    "company": "Уфа",
    "text": "Отличный чехол, все соответствует описанию!",
    "rating": 5,
    "avatar": "/assets/avatars/evgenii-fedorov.webp"
  },
  {
    "name": "Анна Белова",
    "company": "Волгоград",
    "text": "Очень довольна покупкой, стильный и качественный аксессуар!",
    "rating": 5,
    "avatar": "/assets/avatars/anna-belova.webp"
  },
  {
    "name": "Андрей Волков",
    "company": "Омск",
    "text": "Чехол выглядит дорого и надежно, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/andrei-volkov.webp"
  },
  {
    "name": "Оксана Никитина",
    "company": "Пермь",
    "text": "Прекрасный дизайн, качественные материалы – супер!",
    "rating": 5,
    "avatar": "/assets/avatars/oksana-nikitina.webp"
  },
  {
    "name": "Вадим Соловьев",
    "company": "Красноярск",
    "text": "Качественный продукт, стильный внешний вид!",
    "rating": 5,
    "avatar": "/assets/avatars/vadim-solovьev.webp"
  },
  {
    "name": "Ирина Крылова",
    "company": "Саратов",
    "text": "Очень понравился чехол, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/irina-krylova.webp"
  },
  {
    "name": "Роман Ефимов",
    "company": "Нижний Новгород",
    "text": "Заказ пришел быстро, а качество превзошло ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/roman-efimov.webp"
  },
  {
    "name": "Тамара Белова",
    "company": "Владимир",
    "text": "Чехол стильно выглядит и прекрасно защищает телефон!",
    "rating": 5,
    "avatar": "/assets/avatars/tamara-belova.webp"
  },
  {
    "name": "Максим Иванов",
    "company": "Ростов-на-Дону",
    "text": "Прочный и красивый чехол, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/maksim-ivanov.webp"
  },
  {
    "name": "Елена Сидорова",
    "company": "Тюмень",
    "text": "Качество на высоте, а дизайн просто отличный!",
    "rating": 5,
    "avatar": "/assets/avatars/elena-sidorova.webp"
  },
  {
    "name": "Николай Смирнов",
    "company": "Калининград",
    "text": "Очень стильный аксессуар, полностью оправдал ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/nikolai-smirnov.webp"
  },
  {
    "name": "Людмила Романова",
    "company": "Пенза",
    "text": "Классный дизайн и отличное качество, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/liudmila-romanova.webp"
  },
  {
    "name": "Сергей Фролов",
    "company": "Самара",
    "text": "Очень понравился чехол, стильный и надежный!",
    "rating": 5,
    "avatar": "/assets/avatars/sergei-frolov.webp"
  },
  {
    "name": "Мария Громова",
    "company": "Воронеж",
    "text": "Чехол идеально сочетается с моим стилем, очень довольна!",
    "rating": 5,
    "avatar": "/assets/avatars/mariia-gromova.webp"
  },
  {
    "name": "Алексей Зайцев",
    "company": "Сочи",
    "text": "Отличное качество, все соответствует описанию!",
    "rating": 5,
    "avatar": "/assets/avatars/aleksei-zaitsev.webp"
  },
  {
    "name": "Ольга Васильева",
    "company": "Барнаул",
    "text": "Качественные материалы и стильный дизайн, супер!",
    "rating": 5,
    "avatar": "/assets/avatars/olьga-vasilьeva.webp"
  },
  {
    "name": "Денис Козлов",
    "company": "Киров",
    "text": "Очень доволен покупкой, чехол отличный!",
    "rating": 5,
    "avatar": "/assets/avatars/denis-kozlov.webp"
  },
  {
    "name": "Ирина Орлова",
    "company": "Челябинск",
    "text": "Чехол выглядит премиум, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/irina-orlova.webp"
  },
  {
    "name": "Владимир Соколов",
    "company": "Уфа",
    "text": "Отличный продукт, полностью оправдал ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/vladimir-sokolov.webp"
  },
  {
    "name": "Наталья Михайлова",
    "company": "Москва",
    "text": "Качественный и стильный аксессуар, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/natalьia-mikhailova.webp"
  },
  {
    "name": "Георгий Павлов",
    "company": "Санкт-Петербург",
    "text": "Прекрасное качество и дизайн, очень доволен!",
    "rating": 5,
    "avatar": "/assets/avatars/georgii-pavlov.webp"
  },
  {
    "name": "Светлана Егорова",
    "company": "Казань",
    "text": "Чехол очень стильно выглядит, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/svetlana-egorova.webp"
  },
  {
    "name": "Антон Романов",
    "company": "Екатеринбург",
    "text": "Купил и остался доволен, стиль и качество!",
    "rating": 5,
    "avatar": "/assets/avatars/anton-romanov.webp"
  },
  {
    "name": "Марина Федорова",
    "company": "Нижний Новгород",
    "text": "Отличное качество, быстро доставили, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/marina-fedorova.webp"
  },
  {
    "name": "Павел Иванов",
    "company": "Томск",
    "text": "Очень качественный и стильный аксессуар!",
    "rating": 5,
    "avatar": "/assets/avatars/pavel-ivanov.webp"
  },
  {
    "name": "Екатерина Орлова",
    "company": "Пермь",
    "text": "Чехол выглядит шикарно, качество отличное!",
    "rating": 5,
    "avatar": "/assets/avatars/ekaterina-orlova.webp"
  },
  {
    "name": "Василий Михайлов",
    "company": "Волгоград",
    "text": "Продукт премиум-класса, полностью оправдал ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/vasilii-mikhailov.webp"
  },
  {
    "name": "Людмила Соколова",
    "company": "Омск",
    "text": "Стильный дизайн и высокое качество, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/liudmila-sokolova.webp"
  },
  {
    "name": "Роман Крылов",
    "company": "Тверь",
    "text": "Отличное сочетание стиля и качества, супер!",
    "rating": 5,
    "avatar": "/assets/avatars/roman-krylov.webp"
  },
  {
    "name": "Ольга Федорова",
    "company": "Саратов",
    "text": "Очень понравился чехол, качественный и стильный!",
    "rating": 5,
    "avatar": "/assets/avatars/olьga-fedorova.webp"
  },
  {
    "name": "Андрей Новиков",
    "company": "Владимир",
    "text": "Продукт высокого качества, дизайн радует глаз!",
    "rating": 5,
    "avatar": "/assets/avatars/andrei-novikov.webp"
  },
  {
    "name": "Наталья Соколова",
    "company": "Сочи",
    "text": "Качественный чехол, отлично защищает телефон!",
    "rating": 5,
    "avatar": "/assets/avatars/natalьia-sokolova.webp"
  },
  {
    "name": "Дмитрий Миронов",
    "company": "Киров",
    "text": "Очень доволен покупкой, стиль и надежность!",
    "rating": 5,
    "avatar": "/assets/avatars/dmitrii-mironov.webp"
  },
  {
    "name": "Елена Иванова",
    "company": "Уфа",
    "text": "Качественный аксессуар, рекомендую всем!",
    "rating": 5,
    "avatar": "/assets/avatars/elena-ivanova.webp"
  },
  {
    "name": "Сергей Беляев",
    "company": "Москва",
    "text": "Чехол выглядит стильно и дорого, полностью доволен!",
    "rating": 5,
    "avatar": "/assets/avatars/sergei-beliaev.webp"
  },
  {
    "name": "Маргарита Орлова",
    "company": "Санкт-Петербург",
    "text": "Отличное качество и дизайн, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/margarita-orlova.webp"
  },
  {
    "name": "Иван Фролов",
    "company": "Казань",
    "text": "Прекрасный чехол, все соответствует описанию!",
    "rating": 5,
    "avatar": "/assets/avatars/ivan-frolov.webp"
  },
  {
    "name": "Оксана Павлова",
    "company": "Екатеринбург",
    "text": "Чехол премиум-класса, дизайн радует глаз!",
    "rating": 5,
    "avatar": "/assets/avatars/oksana-pavlova.webp"
  },
  {
    "name": "Петр Николаев",
    "company": "Самара",
    "text": "Очень качественный продукт, все на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/petr-nikolaev.webp"
  },
  {
    "name": "Анна Козлова",
    "company": "Воронеж",
    "text": "Чехол стильный, качество оправдывает ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/anna-kozlova.webp"
  },
  {
    "name": "Вадим Сидоров",
    "company": "Сочи",
    "text": "Качество и дизайн на высшем уровне, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/vadim-sidorov.webp"
  },
  {
    "name": "Лариса Иванова",
    "company": "Барнаул",
    "text": "Продукт высокого качества, стильный и надежный!",
    "rating": 5,
    "avatar": "/assets/avatars/larisa-ivanova.webp"
  },
  {
    "name": "Андрей Федоров",
    "company": "Киров",
    "text": "Очень доволен покупкой, чехол отличный!",
    "rating": 5,
    "avatar": "/assets/avatars/andrei-fedorov.webp"
  },
  {
    "name": "Ольга Николаева",
    "company": "Челябинск",
    "text": "Чехол выглядит премиум, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/olьga-nikolaeva.webp"
  },
  {
    "name": "Владимир Смирнов",
    "company": "Уфа",
    "text": "Отличный продукт, полностью оправдал ожидания!",
    "rating": 5,
    "avatar": "/assets/avatars/vladimir-smirnov.webp"
  },
  {
    "name": "Наталья Михайлова",
    "company": "Москва",
    "text": "Качественный и стильный аксессуар, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/natalьia-mikhailova.webp"
  },
  {
    "name": "Георгий Павлов",
    "company": "Санкт-Петербург",
    "text": "Прекрасное качество и дизайн, очень доволен!",
    "rating": 5,
    "avatar": "/assets/avatars/georgii-pavlov.webp"
  },
  {
    "name": "Светлана Егорова",
    "company": "Казань",
    "text": "Чехол очень стильно выглядит, качество на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/svetlana-egorova.webp"
  },
  {
    "name": "Антон Романов",
    "company": "Екатеринбург",
    "text": "Купил и остался доволен, стиль и качество!",
    "rating": 5,
    "avatar": "/assets/avatars/anton-romanov.webp"
  },
  {
    "name": "Марина Федорова",
    "company": "Нижний Новгород",
    "text": "Отличное качество, быстро доставили, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/marina-fedorova.webp"
  },
  {
    "name": "Дмитрий Кузнецов",
    "company": "Москва",
    "text": "Чехол идеально сел, качество супер!",
    "rating": 5,
    "avatar": "/assets/avatars/dmitrii-kuznetsov.webp"
  },
  {
    "name": "Анна Васильева",
    "company": "Санкт-Петербург",
    "text": "Приятный на ощупь, красивый дизайн!",
    "rating": 5,
    "avatar": "/assets/avatars/anna-vasilьeva.webp"
  },
  {
    "name": "Сергей Иванов",
    "company": "Казань",
    "text": "Доставка моментальная, всё на высоте!",
    "rating": 5,
    "avatar": "/assets/avatars/sergei-ivanov.webp"
  },
  {
    "name": "Екатерина Смирнова",
    "company": "Ростов-на-Дону",
    "text": "Лучший чехол, что у меня был!",
    "rating": 5,
    "avatar": "/assets/avatars/ekaterina-smirnova.webp"
  },
  {
    "name": "Александр Петров",
    "company": "Екатеринбург",
    "text": "Очень стильно, нравится текстура.",
    "rating": 5,
    "avatar": "/assets/avatars/aleksandr-petrov.webp"
  },
  {
    "name": "Николай Орлов",
    "company": "Тюмень",
    "text": "Приятное качество, идеальная посадка.",
    "rating": 5,
    "avatar": "/assets/avatars/nikolai-orlov.webp"
  },
  {
    "name": "Ольга Морозова",
    "company": "Челябинск",
    "text": "Выбор отличный, чехол замечательный!",
    "rating": 5,
    "avatar": "/assets/avatars/olьga-morozova.webp"
  },
  {
    "name": "Максим Сидоров",
    "company": "Самара",
    "text": "Всё соответствует описанию, доволен.",
    "rating": 5,
    "avatar": "/assets/avatars/maksim-sidorov.webp"
  },
  {
    "name": "Мария Тихонова",
    "company": "Краснодар",
    "text": "Огонь! Очень нравится, спасибо!",
    "rating": 5,
    "avatar": "/assets/avatars/mariia-tikhonova.webp"
  },
  {
    "name": "Артем Григорьев",
    "company": "Уфа",
    "text": "Лучший выбор, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/artem-grigorьev.webp"
  },
  {
    "name": "Светлана Никитина",
    "company": "Омск",
    "text": "Очень удобный, красиво смотрится.",
    "rating": 5,
    "avatar": "/assets/avatars/svetlana-nikitina.webp"
  },
  {
    "name": "Андрей Лебедев",
    "company": "Новосибирск",
    "text": "Круто! Выглядит дорого.",
    "rating": 5,
    "avatar": "/assets/avatars/andrei-lebedev.webp"
  },
  {
    "name": "Татьяна Миронова",
    "company": "Владивосток",
    "text": "Качество выше всех похвал!",
    "rating": 5,
    "avatar": "/assets/avatars/tatьiana-mironova.webp"
  },
  {
    "name": "Иван Захаров",
    "company": "Барнаул",
    "text": "Очень красивый, стильный аксессуар.",
    "rating": 5,
    "avatar": "/assets/avatars/ivan-zakharov.webp"
  },
  {
    "name": "Егор Ковалёв",
    "company": "Воронеж",
    "text": "Долго выбирал, и не прогадал!",
    "rating": 5,
    "avatar": "/assets/avatars/egor-kovalev.webp"
  },
  {
    "name": "Лилия Антонова",
    "company": "Саратов",
    "text": "Смотрится идеально, текстура супер!",
    "rating": 5,
    "avatar": "/assets/avatars/liliia-antonova.webp"
  },
  {
    "name": "Виктория Беляева",
    "company": "Иркутск",
    "text": "Стильный, удобный, защищает телефон.",
    "rating": 5,
    "avatar": "/assets/avatars/viktoriia-beliaeva.webp"
  },
  {
    "name": "Константин Волков",
    "company": "Киров",
    "text": "Рекомендую, качество лучше ожиданий.",
    "rating": 5,
    "avatar": "/assets/avatars/konstantin-volkov.webp"
  },
  {
    "name": "Жанна Карпова",
    "company": "Белгород",
    "text": "Прекрасная упаковка и отличный сервис.",
    "rating": 5,
    "avatar": "/assets/avatars/zhanna-karpova.webp"
  },
  {
    "name": "Павел Егоров",
    "company": "Томск",
    "text": "Лучший чехол, что у меня был!",
    "rating": 5,
    "avatar": "/assets/avatars/pavel-egorov.webp"
  },
  {
    "name": "Галина Соколова",
    "company": "Тула",
    "text": "Прекрасный аксессуар, очень довольна.",
    "rating": 5,
    "avatar": "/assets/avatars/galina-sokolova.webp"
  },
  {
    "name": "Наталья Фролова",
    "company": "Хабаровск",
    "text": "Выглядит премиально, доставка быстрая.",
    "rating": 5,
    "avatar": "/assets/avatars/natalьia-frolova.webp"
  },
  {
    "name": "Руслан Семёнов",
    "company": "Мурманск",
    "text": "Реально стильный, не царапается.",
    "rating": 5,
    "avatar": "/assets/avatars/ruslan-semenov.webp"
  },
  {
    "name": "Олег Степанов",
    "company": "Нижний Новгород",
    "text": "Качество отличное, спасибо!",
    "rating": 5,
    "avatar": "/assets/avatars/oleg-stepanov.webp"
  },
  {
    "name": "Елена Васильева",
    "company": "Ярославль",
    "text": "Очень удобный, мягкий материал.",
    "rating": 5,
    "avatar": "/assets/avatars/elena-vasilьeva.webp"
  },
  {
    "name": "Алексей Лазарев",
    "company": "Пенза",
    "text": "Заказал второй такой же, супер!",
    "rating": 5,
    "avatar": "/assets/avatars/aleksei-lazarev.webp"
  },
  {
    "name": "Дарья Романова",
    "company": "Чебоксары",
    "text": "Очень довольна, хороший сервис.",
    "rating": 5,
    "avatar": "/assets/avatars/darьia-romanova.webp"
  },
  {
    "name": "Илья Бобров",
    "company": "Грозный",
    "text": "Доставка на высоте, товар топ!",
    "rating": 5,
    "avatar": "/assets/avatars/ilьia-bobrov.webp"
  },
  {
    "name": "Марина Кузнецова",
    "company": "Владимир",
    "text": "Прекрасный дизайн, чехол защищает.",
    "rating": 5,
    "avatar": "/assets/avatars/marina-kuznetsova.webp"
  },
  {
    "name": "Тимур Никифоров",
    "company": "Астрахань",
    "text": "Очень качественный, буду заказывать ещё.",
    "rating": 5,
    "avatar": "/assets/avatars/timur-nikiforov.webp"
  },
  {
    "name": "Оксана Громова",
    "company": "Калининград",
    "text": "Красивый, удобный, защита отличная!",
    "rating": 5,
    "avatar": "/assets/avatars/oksana-gromova.webp"
  },
  {
    "name": "Сергей Фёдоров",
    "company": "Вологда",
    "text": "Лучший выбор, рекомендую!",
    "rating": 5,
    "avatar": "/assets/avatars/sergei-fedorov.webp"
  },
  {
    "name": "Анастасия Смирнова",
    "company": "Курган",
    "text": "Идеальная посадка, цвет супер.",
    "rating": 5,
    "avatar": "/assets/avatars/anastasiia-smirnova.webp"
  },
  {
    "name": "Игорь Макаров",
    "company": "Тольятти",
    "text": "Очень понравилось, берите!",
    "rating": 5,
    "avatar": "/assets/avatars/igorь-makarov.webp"
  },
  {
    "name": "Кристина Тимофеева",
    "company": "Орёл",
    "text": "Текстура супер, цвет шикарный.",
    "rating": 5,
    "avatar": "/assets/avatars/kristina-timofeeva.webp"
  },
  {
    "name": "Максим Захаров",
    "company": "Новороссийск",
    "text": "Заказывал в подарок, все довольны!",
    "rating": 5,
    "avatar": "/assets/avatars/maksim-zakharov.webp"
  },
  {
    "name": "Евгений Князев",
    "company": "Смоленск",
    "text": "Чехол премиум-класса, отличный выбор.",
    "rating": 5,
    "avatar": "/assets/avatars/evgenii-kniazev.webp"
  },
  {
    "name": "Василиса Королёва",
    "company": "Тверь",
    "text": "Очень довольна, стильный чехол!",
    "rating": 5,
    "avatar": "/assets/avatars/vasilisa-koroleva.webp"
  }
];

export default reviews;