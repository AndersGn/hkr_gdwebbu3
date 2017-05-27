$(function () {

    // There is a class name set on the nav-item that is the same as path
    // else assume we are on startpage 
    currentpageclass = window.location.pathname.replace(/^\/|\/$/g, "");

    // If no path then assume we are on startpage
    if (currentpageclass == "") {
        $('.startsida').addClass('active');
    } else {
        $('.' + currentpageclass).addClass('active');

    }
});