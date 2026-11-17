(function () {
    var root = document.currentScript.src.replace(/assets\/js\/sidebar\.js.*$/, '');
    var menu = [
        ['Документация', [['index.html', 'Обзор']]],
        ['Начало работы', [
            ['getting-started/index.html', 'Установка'],
            ['getting-started/configuration.html', 'Настройка'],
            ['getting-started/first-steps.html', 'Первые шаги']
        ]],
        ['Руководства', [
            ['guides/index.html', 'Обзор руководств'],
            ['guides/authentication.html', 'Аутентификация'],
            ['guides/api-basics.html', 'Основы API'],
            ['guides/advanced-usage.html', 'Продвинутое использование'],
            ['guides/troubleshooting.html', 'Диагностика']
        ]],
        ['REST API', [
            ['api/index.html', 'Обзор API'],
            ['api/users.html', '/users'],
            ['api/orders.html', '/orders'],
            ['api/webhooks.html', '/webhooks']
        ]],
        ['Примеры', [
            ['examples/index.html', 'Обзор примеров'],
            ['examples/example-1.html', 'Python-опрос'],
            ['examples/example-2.html', 'JS-дашборд']
        ]],
        ['Прочее', [
            ['changelog.html', 'История версий'],
            ['faq.html', 'FAQ']
        ]]
    ];
    var aside = document.getElementById('sidebar');
    var html = '<h2>ZernoMonitor Docs</h2>' +
        '<input id="search-input" type="search" placeholder="Поиск по документации…" autocomplete="off">' +
        '<ul id="search-results" class="results"></ul>';
    var here = decodeURIComponent(location.pathname);
    menu.forEach(function (group) {
        html += '<div class="group">' + group[0] + '</div>';
        group[1].forEach(function (item) {
            var active = here.endsWith('/docs/' + item[0]) ? ' class="active"' : '';
            html += '<a href="' + root + item[0] + '"' + active + '>' + item[1] + '</a>';
        });
    });
    html += '<div class="group">Сайт</div><a href="' + root + '../index.html">← Главная сайта</a>';
    aside.innerHTML = html;
})();