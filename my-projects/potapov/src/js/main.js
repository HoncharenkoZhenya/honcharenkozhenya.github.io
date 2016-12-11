// Slider
var slides = $('#slides .slider__slide');
var switch_item = $('.slider__switch .switch-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

$('.slider__switch .switch-item').click(function () {
	clearTimeout(slideInterval);
	for (var i = 0; i < slides.length; i++) {
		slides[i].className = 'slider__slide';
		switch_item[i].className = 'switch-item';
	}
	currentSlide = $(this).index() ? $(this).index() - 1 : 6;
	slideInterval = setInterval(nextSlide,5000);
	nextSlide();
});

function nextSlide() {
	slides[currentSlide].className = 'slider__slide';
	switch_item[currentSlide].className = 'switch-item';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slider__slide slider__slide--showing';
	switch_item[currentSlide].className = 'switch-item switch-item--active';
}

//Foreword
var forewordSlides = $('.foreword__paragraph');
var forewordSwitch = $('.foreword__switch .switch-item');
var forewordCurrentSlide = 0;

$('.foreword__switch .switch-item').click(function () {
	for (var i = 0; i < forewordSlides.length; i++) {
		forewordSlides[i].className = 'foreword__paragraph';
		forewordSwitch[i].className = 'switch-item';
	}
	forewordCurrentSlide = $(this).index();
	forewordSlides[forewordCurrentSlide].className = 'foreword__paragraph foreword__paragraph--active';
	forewordSwitch[forewordCurrentSlide].className = 'switch-item switch-item--active';
});

// expedition
var expeditionSlides = $('.img');
var expeditionSwitch = $('.note__switch .switch-item');
var expeditionCurrentSlide = 0;

$('.note__switch .switch-item').click(function () {
	expeditionCurrentSlide = $(this).index();
	expeditionNextImg();
});

function expeditionNextImg() {
	for (var i = 0; i < expeditionSlides.length; i++) {
		expeditionSlides[i].className = 'img';
		expeditionSwitch[i].className = 'switch-item';
	}
	expeditionSlides[expeditionCurrentSlide].className = 'img img--active';
	expeditionSwitch[expeditionCurrentSlide].className = 'switch-item switch-item--active';
	$('#page-switch__num').text(expeditionCurrentSlide + 1);
	$('.note__num').text('0' + (expeditionCurrentSlide + 1));
}

$('.switch-left').click(function () {
	expeditionCurrentSlide = expeditionCurrentSlide ? expeditionCurrentSlide - 1 : 7;
	expeditionNextImg();
});
$('.switch-right').click(function () {
	expeditionCurrentSlide = (expeditionCurrentSlide + 1) % 8;
	expeditionNextImg();
});

