export const setupMobileNav = () => {
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
};
