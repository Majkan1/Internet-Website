(() => {
	const toggle = document.getElementById('langToggle')
	if (!toggle) return

	const isEn = document.documentElement.lang === 'en'
	toggle.textContent = isEn ? 'PL' : 'EN'
	toggle.addEventListener('click', () => {
		window.location.href = (isEn ? 'index.html' : 'index-en.html') + window.location.hash
	})
})()