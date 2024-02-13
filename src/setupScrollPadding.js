export const setupScrollPadding = () => {
	// add extra padding when scrolling to prevent header from blocking content
	const headerHeight = document.querySelector('header').offsetHeight;

	document.documentElement.style.setProperty(
		'--scroll-padding',
		`${headerHeight}px`,
	);
};
