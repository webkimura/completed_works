

/*Магнифик попап для картинок*/
$('.image-popup').magnificPopup({
 type: 'image'
 });

 /* Для всплывающей формы */

 $(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

/* Для всплывающей карты */

$(function () {
	$('.open-map').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.modal-map-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});