
/*=================================================================
             UTRUST JS - All Rights Reserved.
==================================================================*/
// Slider




//youtube popup
if ( $('.popup-youtube').length ){
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        // preloader: false,
        // fixedContentPos: false
   });
}

//img-cover
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += ' ' + className;
}
var imgContainers, len;
if (!Modernizr.objectfit) {
    imgContainers = document.querySelectorAll('.pic');
    len = imgContainers.length;
    for (var i = 0; i < len; i++) {
        if (window.CP.shouldStopExecution(1)) {
            break;
        }
        var $container = imgContainers[i], imgUrl = $container.querySelector('img').getAttribute('src');
        if (imgUrl) {
            $container.style.backgroundImage = 'url(' + imgUrl + ')';
            addClass($container, 'compat-object-fit');
        }
    }
    window.CP.exitedLoop(1);
}
