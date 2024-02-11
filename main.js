import './style.css';

// add extra padding when scrolling to prevent header from blocking content
const headerHeight = document.querySelector('header').offsetHeight;

document.documentElement.style.setProperty(
	'--scroll-padding',
	`${headerHeight}px`,
);

// mobile nav selectors
const headerBtn = document.getElementById('headerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile_link');

// mobile nav state
let isMobileNavOpen = false;

// toggle mobile nav and Y overflow

headerBtn.addEventListener('click', () => {
	isMobileNavOpen = !isMobileNavOpen;
	if (isMobileNavOpen) {
		mobileNav.style.display = 'flex';
		document.body.style.overflowY = 'hidden';
		window.scroll({ top: 0, left: 0, behavior: 'instant' });
	} else {
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
	}
});

// toggle mobile nav and Y overflow for mobile nav links
mobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		isMobileNavOpen = false;
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
	});
});

// fix bug where overflow-y remains disabled if vp size changes while mobile nav open
window.addEventListener('resize', () => {
	if (isMobileNavOpen && window.innerWidth >= 768) {
		document.body.style.overflowY = 'auto';
	}
});

// toggle dark/light theme
const lightBtn = document.getElementById('lightBtn');
const lightBtnMobile = document.getElementById('lightBtnMobile');
const darkBtn = document.getElementById('darkBtn');
const darkBtnMobile = document.getElementById('darkBtnMobile');

// check for theme on mount
const theme = localStorage.getItem('theme');

theme === 'dark-mode'
	? document.documentElement.classList.add('dark')
	: document.documentElement.classList.remove('dark');

// display moon on mount when in light mode and page is refreshed
if (theme === 'light-mode') {
	lightBtn.classList.add('hidden');
	lightBtnMobile.classList.add('hidden');
	darkBtn.classList.remove('hidden');
	darkBtnMobile.classList.remove('hidden');
}

// theme handler
const toggleTheme = () => {
	document.documentElement.classList.toggle('dark');
	lightBtn.classList.toggle('hidden');
	lightBtnMobile.classList.toggle('hidden');
	darkBtn.classList.toggle('hidden');
	darkBtnMobile.classList.toggle('hidden');

	if (document.documentElement.classList.contains('dark')) {
		localStorage.setItem('theme', 'dark-mode');
	} else {
		localStorage.setItem('theme', 'light-mode');
	}
};

lightBtn.addEventListener('click', toggleTheme);
lightBtnMobile.addEventListener('click', toggleTheme);
darkBtn.addEventListener('click', toggleTheme);
darkBtnMobile.addEventListener('click', toggleTheme);
