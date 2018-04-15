function showContent(a) {
    var elem = content[Array.prototype.indexOf.call(targ, a.target)];

    if (last === undefined) {
        document.getElementsByTagName("MAIN")[0].classList.add("after");
        document.getElementsByTagName("NAV")[0].classList.add("after");
    } else {
        last.style.display = "none";
    }

    elem.style.display = "block";
    if (elem.scrollIntoView === undefined) {
        window.scrollTo(0, document.getElementsByTagName("NAV")[0].offsetHeight);
    } else {
        elem.scrollIntoView({behavior: "smooth", block: "start"});
    }
    last = elem;
}

var targ = document.getElementsByTagName("LI");
var content = document.getElementsByClassName("content");
var last;

for (var i = 0; i < targ.length; i++) {
    targ[i].addEventListener("click", showContent);
}
document.getElementsByClassName("contact")[0].onclick = function () {
    showContent({target: targ[targ.length - 1]})
}
