(function () {
    var root = document.currentScript.src.replace(/assets\/js\/search\.js.*$/, '');
    var input = document.getElementById('search-input');
    var list = document.getElementById('search-results');
    var index = null;
    fetch(root + 'search-index.json')
        .then(function (r) { return r.json(); })
        .then(function (data) { index = data; })
        .catch(function () { index = []; });
    input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        list.innerHTML = '';
        if (!q || !index) { return; }
        index.filter(function (e) {
            return (e.title + ' ' + e.keywords).toLowerCase().indexOf(q) !== -1;
        }).slice(0, 8).forEach(function (e) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = root + e.url;
            a.textContent = e.title;
            li.appendChild(a);
            list.appendChild(li);
        });
    });
})();