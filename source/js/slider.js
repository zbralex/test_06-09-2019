'use strict';
function sliderToggler(evt){
    var leftClickButton = document.querySelector('.button--left');
    var rightClickButton = document.querySelector('.button--right');
    var slider = document.querySelector('.detail-slider__list');
    var sliderImages = slider.querySelectorAll('img');
    var counter = 1;
    var size = sliderImages[0].clientWidth;
    //console.log(size, evt);
    
    
    for(var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].addEventListener('mouseover', function(evt) {
            slider.style.transform = 'translateX(' + (- evt.clientX / 10 ) + 'px)' ;
            slider.style.transition = 'all ease-in-out .3s';
            console.log(evt, evt.currentTarget);
        }) 
    }

}
sliderToggler();

