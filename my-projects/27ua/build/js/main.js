// Slider
var slides = $('.slider .slider__item');
var switch_item = $('.slider__swicth .switch__item');
var arrow_left = $('.slider__arrows .arrow--left');
var arrow_right = $('.slider__arrows .arrow--right');
var currentSlide = 0;

$('.slider__swicth .switch__item').click(function () {

	currentSlide = $(this).index();
	nextSlide();
});

$('.slider__arrows .arrow--left').click(function () {
	currentSlide = currentSlide ? currentSlide - 1 : 4;
	nextSlide();
});

$('.slider__arrows .arrow--right').click(function () {
	currentSlide = (currentSlide + 1) % 5;
	nextSlide();
});

function nextSlide() {
	for (var i = 0; i < switch_item.length; i++) {
		slides[i].className = 'slider__item';
		switch_item[i].className = 'switch__item';
	}
	slides[currentSlide].className = 'slider__item slider__item--active';
	switch_item[currentSlide].className = 'switch__item switch__item--active';
}

// deteail__count
$('.deteail__count .arrow--top').click(function () {
	var s = (+$('.deteail__count input').val() + 1);
	$('.deteail__count input').val(s < 10 ? '0' + s : s);
});
$('.deteail__count .arrow--down').click(function () {
	var s = (+$('.deteail__count input').val() - 1) ? (+$('.deteail__count input').val() - 1) : 1;
	$('.deteail__count input').val(s < 10 ? '0' + s : s);
});