import './style.css';

// add extra padding when scrolling to prevent header from blocking content

const headerHeight = document.querySelector('header').offsetHeight;

document.documentElement.style.setProperty(
	'--scroll-padding',
	`${headerHeight}px`,
);

// mobile nav

const headerBtn = document.getElementById('headerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile_link');

let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
	isMobileNavOpen = !isMobileNavOpen;
	if (isMobileNavOpen) {
		mobileNav.style.display = 'flex';
		document.body.style.overflowY = 'hidden';
		window.scrollTo(0, 0);
	} else {
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
	}
});

mobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		isMobileNavOpen = false;
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
	});
});
