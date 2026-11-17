(function () {
    document.querySelectorAll('pre > code').forEach(function (code) {
        var btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.textContent = 'Копировать';
        btn.addEventListener('click', function () {
            var text = code.innerText;
            function done() {
                btn.textContent = 'Скопировано';
                setTimeout(function () { btn.textContent = 'Копировать'; }, 1500);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done);
            } else {
                var ta = document.createElement('textarea');
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                done();
            }
        });
        code.parentNode.appendChild(btn);
    });
})();