document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

// 初始化FastClick
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

document.documentElement.addEventListener('touchmove', function(e) {
    // console.log(e.touches);
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, false);