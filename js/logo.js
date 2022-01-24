$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>=500) {
			$(".cabecera").removeClass("menu-grande").addClass("menu-pequenio");
		}else{
			$(".cabecera").removeClass("menu-pequenio").addClass("menu-grande");
		}
	});
});