'use strict';
function sliderToggler(){
    var leftClickButton = document.querySelector('.button--left');
    var rightClickButton = document.querySelector('.button--right');
    var slider = document.querySelector('.detail-slider__list');
    var sliderImages = slider.querySelectorAll('img');
    var counter = 1;
    var size = sliderImages[0].clientWidth;
    console.log(size, sliderImages);
     
    leftClickButton.addEventListener('click', function() {
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
       counter++;
        console.log(size);
    });
    rightClickButton.addEventListener('click', function() {
        slider.style.transform = 'translateX(' + (size * counter) + 'px)';
        counter--; 
       
    })

}
sliderToggler();

