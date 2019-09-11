'use strict';
function sliderToggler(){
    var leftClickButton = document.querySelector('.button--left');
    var rightClickButton = document.querySelector('.button--right');
    var slider = document.querySelector('.detail-slider__list');
    slider.style.background = 'red';
    var left = 0;

    leftClickButton.addEventListener('mouseover', function(evt) {
        console.log(evt);
        left -= 120;
        slider.style.left = left + 'px';
        if (left <= -600) {
            left = 0;
        }
    });
    rightClickButton.addEventListener('mouseover', function() {
        
        left += 120;
        slider.style.left = 'inherit';
        slider.style.right = left + 'px';
        if (left >= 600) {
            left = 0;
        }
    })

}
sliderToggler();

