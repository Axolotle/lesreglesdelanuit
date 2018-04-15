var targ = document.getElementsByTagName("LI");
var content = document.getElementsByClassName("content");
var last;

function showContent(a) {
    var i = Array.prototype.indexOf.call(targ, a.target);

    if (last != undefined) {
        last.style.display = "none";
        last = content[i];
        content[i].style.display = "block";
    } else {
        document.getElementsByTagName("MAIN")[0].classList.add("after");
        document.getElementsByTagName("NAV")[0].classList.add("after");
        content[i].style.display = "block";
        last = content[i];
    }
}

for (var i = 0; i < targ.length; i++) {
    targ[i].addEventListener("click", showContent);
}
