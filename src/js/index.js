// import jquery from 'jquery';
// import 'bootstrap';

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

document.addEventListener('DOMContentLoaded', () => {
	let elements = document.querySelectorAll('[aria-orientation]');
	let ariaOrientationTimeout;

	ariaOrientation(elements);

	window.addEventListener('resize', () => {
		clearTimeout(ariaOrientationTimeout); // Resizing may be still in process, wait until the end
		ariaOrientationTimeout = setTimeout(() => {
			elements = document.querySelectorAll('[aria-orientation]');
			ariaOrientation(elements);
		}, 1000);
	});
});
