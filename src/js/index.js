import * as $ from 'jquery';
// import 'bootstrap';
import 'bootstrap/js/dist/modal';

// window.$ = window.jQuery = jquery;

// Aria orientation handler START
function ariaOrientation(elements) {
	elements.forEach((element) => {
		const { offsetWidth, offsetHeight } = element;

		if (offsetHeight > offsetWidth) {
			element.setAttribute('aria-orientation', 'vertical');
		} else {
			element.setAttribute('aria-orientation', 'horizontal');
		}
	});
}
// Aria orientation handler END

document.addEventListener('DOMContentLoaded', () => {
	// Aria orientation START
	let elements = document.querySelectorAll('hr[aria-orientation]');
	let ariaOrientationTimeout;

	ariaOrientation(elements);

	window.addEventListener('resize', () => {
		clearTimeout(ariaOrientationTimeout); // Resizing may be still in process, wait until the end
		ariaOrientationTimeout = setTimeout(() => {
			elements = document.querySelectorAll('hr[aria-orientation]');
			ariaOrientation(elements);
		}, 1000);
	});
	// Aria orientation END

	// Owl carousel START
	jQuery('.owl-carousel').owlCarousel({
		// autoWidth: true,
		// margin: 20,
		dots: false,
		lazyLoad: true,
		lazyLoadEager: 1,
		// autoplay: true,
		// loop: true,
		autoplayHoverPause: true,
		// center: true,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			576: {
				items: 2,
				margin: 0
			},
			992: {
				items: 3,
				margin: 0
			},
			1202: {
				margin: 20
			}
		}
	});
	// Owl carousel END

	// Subscribe form START
	$('#subscribe-form').on('submit', (event) => {
		event.preventDefault();
		const input = event.target.elements[0];
		const submitBtn = event.target.elements[1];

		input.value = '';

		$.ajax({
			url: 'https://raw.githubusercontent.com/Andrew-Dyachenko/UspioLTD/main/public/ajax.txt',
			dataType: 'text',
			success: function (res) {
				$(submitBtn)
					.text(res)
					.removeClass('btn-atlantis')
					.addClass('btn-black');
			}
		});
	});
	// Subscribe form END
});
