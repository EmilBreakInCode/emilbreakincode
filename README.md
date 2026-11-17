# ZernoMonitor — система мониторинга температуры и влажности в бурте зерна

Учебный проект: статический сайт-документация вымышленной системы мониторинга
температуры и влажности в бурте зерна (тема №10 «Документация системы мониторинга»).
Сайт публикуется через GitHub Pages и используется как Origin для экспериментов с CDN Cloudflare.

## Паспорт лабораторной работы

- **ФИО:** _впиши свои ФИО_
- **Группа:** _впиши свою группу_
- **Номер лабораторной работы:** _впиши номер_ (Git-workflow); сопутствующие лабы по CDN: 0, 1, 2.1, 2.2, 3.1–3.4
- **Тема:** документация системы мониторинга температуры и влажности в бурте зерна (ZernoMonitor)
- **Цель работы:** освоить командную разработку средствами Git (ветки main/develop/feature/docs,
  commit после каждого задания, merge, разрешение конфликтов, release-тег v1.0.0) и развернуть
  многостраничный статический сайт как Origin для последующего подключения CDN Cloudflare.

## Структура проекта (по методичке)

```text
emilbreakincode.github.io/
├── index.html                  # главная: обзор системы ZernoMonitor + навигация
├── style.css                   # общие стили сайта
├── images/
│   └── test.jpg                # тестовое изображение (схема бурта с датчиками)
├── about/
│   └── index.html              # о сайте / о системе
├── blog/
│   └── post1.html              # первая запись блога (зачем мониторинг бурта)
└── docs/
    ├── index.html              # обзор проекта
    ├── getting-started/
    │   ├── index.html          # установка
    │   ├── configuration.html
    │   └── first-steps.html
    ├── guides/
    │   ├── index.html
    │   ├── authentication.html
    │   ├── api-basics.html
    │   ├── advanced-usage.html
    │   └── troubleshooting.html
    ├── api/
    │   ├── index.html
    │   ├── users.html
    │   ├── orders.html
    │   └── webhooks.html
    ├── examples/
    │   ├── index.html
    │   ├── example-1.html
    │   └── example-2.html
    ├── changelog.html
    ├── faq.html
    ├── assets/
    │   ├── css/
    │   │   ├── docs.css
    │   │   └── syntax-highlight.css
    │   ├── js/
    │   │   ├── search.js
    │   │   ├── sidebar.js
    │   │   └── copy-code.js
    │   ├── images/
    │   │   ├── architecture-diagram.svg
    │   │   ├── flow-chart.png
    │   │   └── screenshots/
    │   │       └── dashboard.png
    │   └── videos/
    │       └── demo.mp4
    └── search-index.json       # для клиентского поиска
```

## Ветки и релизы

Разработка ведётся в ветке `main` (упрощённый сценарий практикума);
стабильная версия фиксируется release-тегом `v1.0.0`.

## Публикация

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
Адрес сайта: https://emilbreakincode.github.io/