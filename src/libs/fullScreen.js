//下拉全屏、缩小
$('#zoomin .bottom img').click(function(){
    var this_state = $(this).attr('class');
    if(this_state == 'fd'){
        $(this).hide();
        $(this).siblings().show();
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
            el.mozRequestFullScreen || el.msRequestFullScreen;
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        } else if(typeof window.ActiveXObject != "undefined") {
            //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if(wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }else{
        $(this).hide();
        $(this).siblings().show();
        var el = document;
        var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
            el.mozCancelFullScreen || el.exitFullScreen;
        if(typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        } else if(typeof window.ActiveXObject != "undefined") {
            //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if(wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    $('#zoomin .borderhide').fadeIn(50);
    $('#zoomin .borderhide').fadeOut(50);
})