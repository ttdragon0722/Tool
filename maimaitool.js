javascript: void (function (d) {
    const HISTORY = {};
    $('.sub_title').each(function(){
        if ( $(this).children('.v_b').eq(0).html()==="TRACK 01" ) {
            if (!HISTORY[$(this).children('.v_b').eq(1).html().split(" ")[0]]) {
                HISTORY[$(this).children('.v_b').eq(1).html().split(" ")[0]]=1;
            }else{
                HISTORY[$(this).children('.v_b').eq(1).html().split(" ")[0]]++;
            };
        }
    });
    let message = '';
    for (let key in HISTORY) {
        money = 30 * HISTORY[key];
        message += key+" 打了 "+HISTORY[key]+"道  ( "+money+" )\n";
    };
    alert(message);
})(document)