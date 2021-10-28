// import vendor jQuery plugin example
// import 'app/libs/jquery/jquery.min.js'
import '~/app/libs/slick/slick.js'

document.addEventListener('DOMContentLoaded', () => {

	// ниже пишем код

	$('.slider__wrapper').slick({
		dots: true,
		autoplay: true,
	});

})
