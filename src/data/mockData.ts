
// Моковые данные для демонстрации
export const mockNews = [
  {
    id: "1",
    title: "Технологический гигант представил новую линейку смартфонов с революционными возможностями",
    summary: "Компания представила три новые модели смартфонов с улучшенными камерами, мощными процессорами и инновационными функциями дополненной реальности, которые могут изменить способ взаимодействия с мобильными устройствами.",
    category: "Технологии",
    imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "12 мая 2025",
    author: "Алексей Петров",
    commentsCount: 48,
    likes: 156,
    featured: true
  },
  {
    id: "2",
    title: "Глобальное соглашение по климату подписано лидерами 150 стран",
    summary: "На саммите по климатическим изменениям достигнуто историческое соглашение, предусматривающее значительное сокращение выбросов парниковых газов и инвестиции в зеленые технологии.",
    category: "Политика",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D",
    publishedAt: "11 мая 2025",
    author: "Мария Соколова",
    commentsCount: 87,
    likes: 245
  },
  {
    id: "3",
    title: "Крупнейший банк страны анонсировал снижение ставок по ипотеке",
    summary: "С 1 июня ведущий финансовый институт снизит процентные ставки по ипотечным кредитам, что может привести к оживлению рынка недвижимости и сделать жилье более доступным.",
    category: "Бизнес",
    imageUrl: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "11 мая 2025",
    author: "Иван Сергеев",
    commentsCount: 32,
    likes: 105
  },
  {
    id: "4",
    title: "Ученые обнаружили потенциальные признаки жизни на спутнике Юпитера",
    summary: "Исследователи NASA нашли органические молекулы в образцах, полученных с поверхности Европы, что может свидетельствовать о возможности существования микробиологической жизни в подледном океане спутника.",
    category: "Наука",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVwaXRlciUyMG1vb258ZW58MHx8MHx8fDA%3D",
    publishedAt: "10 мая 2025",
    author: "Дмитрий Волков",
    commentsCount: 64,
    likes: 198
  },
  {
    id: "5",
    title: "Новый сериал стал абсолютным рекордсменом по просмотрам в первую неделю",
    summary: "Фантастический сериал о путешествиях во времени привлек более 200 миллионов зрителей в первую неделю после премьеры, побив все предыдущие рекорды стриминговых сервисов.",
    category: "Культура",
    imageUrl: "https://images.unsplash.com/photo-1586899028174-e7098604235b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHYlMjBzZXJpZXN8ZW58MHx8MHx8fDA%3D",
    publishedAt: "9 мая 2025",
    author: "Елена Смирнова",
    commentsCount: 92,
    likes: 275
  },
  {
    id: "6",
    title: "Министерство здравоохранения запускает программу профилактики сердечно-сосудистых заболеваний",
    summary: "Новая национальная программа предусматривает бесплатную диагностику, профилактические меры и обучение населения для снижения смертности от сердечно-сосудистых заболеваний.",
    category: "Здоровье",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhcnQlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D",
    publishedAt: "8 мая 2025",
    author: "Татьяна Романова",
    commentsCount: 27,
    likes: 134
  }
];

export const mockComments = [
  {
    id: "101",
    author: {
      name: "Анна К.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    newsId: "1",
    newsTitle: "Технологический гигант представил новую линейку смартфонов",
    content: "Интересно, насколько улучшились камеры по сравнению с предыдущей моделью. Надеюсь, также решили проблему с батареей.",
    createdAt: "2 часа назад"
  },
  {
    id: "102",
    author: {
      name: "Михаил Д."
    },
    newsId: "2",
    newsTitle: "Глобальное соглашение по климату подписано лидерами 150 стран",
    content: "Наконец-то серьезный шаг вперед, но важно не только подписать бумаги, но и реально сократить выбросы. Будем наблюдать за выполнением.",
    createdAt: "3 часа назад"
  },
  {
    id: "103",
    author: {
      name: "Екатерина П.",
      avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    newsId: "3",
    newsTitle: "Крупнейший банк страны анонсировал снижение ставок по ипотеке",
    content: "Отличная новость! Давно думали о покупке квартиры, возможно, сейчас самое время.",
    createdAt: "5 часов назад"
  },
  {
    id: "104",
    author: {
      name: "Сергей В."
    },
    newsId: "4",
    newsTitle: "Ученые обнаружили потенциальные признаки жизни на спутнике Юпитера",
    content: "Такие открытия всегда захватывают! Интересно, какие перспективы это открывает для дальнейших исследований космоса.",
    createdAt: "вчера"
  },
  {
    id: "105",
    author: {
      name: "Ольга Н.",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    newsId: "5",
    newsTitle: "Новый сериал стал абсолютным рекордсменом по просмотрам",
    content: "Посмотрела первые три серии, действительно затягивает! Особенно впечатляют спецэффекты и работа оператора.",
    createdAt: "вчера"
  }
];
