function update(prevHash, nextHash) {
    if (prevHash === undefined) {
        document.getElementsByTagName("MAIN")[0].classList.add("after");
        document.getElementsByTagName("NAV")[0].classList.add("after");
    } else document.getElementById(prevHash).classList.remove("show");

    var elem = document.getElementById(nextHash);
    elem.classList.add("show")
    if (elem.scrollIntoView === undefined) {
        window.scrollTo(0, document.getElementsByTagName("NAV")[0].offsetHeight);
    } else {
        elem.scrollIntoView({behavior: "smooth", block: "start"});
    }
}


function init() {
    window.addEventListener('hashchange', function(e) {
        update(e.oldURL.split("#")[1], e.newURL.split("#")[1])
    }, false);

    var hash = window.location.hash.substring(1);
    if (hash !== "") update(undefined, hash);
}

window.onload = init;
