function showDiv() {
    document.getElementById('contacts').style.display = "inline";
}

document.onmouseover = function(showPage) {
    var thisPage;
    if (!showPage) var thisPage = window.event;
    if (showPage.srcElement) thisPage = showPage.target;
    else if (showPage.srcElement) thisPage = showPage.srcElement;
    if (thisPage.nodeType == 3)
        thisPage = thisPage.parentNode;
    console.log(thisPage.id);
}
