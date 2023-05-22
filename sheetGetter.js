javascript: void (function (d) {
    try {
        sheets = document.getElementsByClassName("EEnGW");
        sheetBox = document.getElementById('jmuse-scroller-component');
        sheetHeight = sheetBox.scrollHeight / sheets.length;
        h = 0;
        console.log(document.getElementsByClassName("KfFlO")[0].src);
        sheetBox.scroll(0, h);
        h = sheetHeight + h;
        for (var times = 0; times < sheets.length; times++) {
            setTimeout(function () {
                console.log(document.getElementsByClassName("KfFlO")[0].src);
                sheetBox.scroll(0, h);
                h = sheetHeight + h;
            }, 3000);
        }
    } catch (e) {
        alert(e);
    }
})(document)

javascript: void (function (d) {
    try {
        sheets = document.getElementsByClassName("EEnGW");
        sheetBox = document.getElementById('jmuse-scroller-component');
        sheetHeight = sheetBox.scrollHeight / sheets.length;
        sheetBox.scroll(0, sheetHeight);
    } catch (e) {
        alert(e);
    }

})(document)