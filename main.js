import './style.css';

// add extra padding when scrolling to prevent header from blocking content

const header = document.querySelector('header');
const headerHeight = document.querySelector('header').clientHeight;

document.documentElement.style.setProperty(
	'--scroll-padding',
	`${headerHeight}px`,
);
