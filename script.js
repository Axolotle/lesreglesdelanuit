var targ = document.getElementsByClassName("targ");
var toShow = document.getElementsByClassName("content");

var last;

function showContent(a) {
    var i = Array.prototype.indexOf.call(targ, a.target);
    document.getElementById("left").style.width = "50%";
    document.getElementById("right").style.width = "50%";

    document.getElementById("second").style.display = "block";

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
