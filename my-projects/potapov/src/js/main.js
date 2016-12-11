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

