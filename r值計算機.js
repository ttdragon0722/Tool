javascript: void (function (d) {
    if (['maimaidx-eng.com', 'maimaidx.jp'].indexOf(d.location.host) >= 0) {
        var s = d.createElement('script');
        s.src = 'https://myjian.github.io/mai-tools/scripts/all-in-one.js?t=' + Math.floor(Date.now() / 60000);
        d.body.append(s);
    }
})(document)