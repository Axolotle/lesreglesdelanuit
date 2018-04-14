var targ = document.getElementsByTagName("LI");
var toShow = document.getElementsByClassName("content");
var body = document.getElementsByTagName("BODY")[0];
var nav = document.getElementsByTagName("NAV")[0];
var main = document.getElementsByTagName("MAIN")[0];

var last;

window.onresize = resize;

function showContent(a) {
    var i = Array.prototype.indexOf.call(targ, a.target);
    if (body.offsetWidth > 800 && body.offsetHeight > 600) {
        nav.style.width = "50%";
        main.style.width = "50%";
        main.style.display = "flex";
    }
    else {
        main.style.display = "block";
    }

    if (last != undefined) {
        last.style.display = "none";
        last = toShow[i];
        toShow[i].style.display = "block";
    }
    else {
        toShow[i].style.display = "block";
        last = toShow[i];
    }
}

for (var i = 0; i < targ.length; i++) {
    targ[i].addEventListener("click", showContent);
}

function resize() {
    if (body.offsetWidth < 800 || body.offsetHeight < 600 ) {
        nav.style.width = "100%";
        main.style.width = "100%";
    }
    else {
        nav.style.width = "50%";
        main.style.width = "50%";
    }
}
