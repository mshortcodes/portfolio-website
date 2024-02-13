export const setupThemeToggle = () => {
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
};
