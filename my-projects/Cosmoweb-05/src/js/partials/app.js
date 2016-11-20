$.validate();

$(".mini-img").click(function  () {
	var s = $(this).attr("src");
	$(".card-selection__title-img").attr("src",s);
});

$(".call-me__btn").click(function() {
	var s = $(".popup-call-me").css({'display':'block'});
});

$(".popup-call-me__close").click(function() {
	var s = $(".popup-call-me").css({'display':'none'});
});