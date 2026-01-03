(() => {
	const toggle = document.getElementById('langToggle')
	if (!toggle) return

	const currentLang = document.documentElement.lang === 'en' ? 'en' : 'pl'
	const saved = localStorage.getItem('lang')
	if (saved && saved !== currentLang) {
		const target = saved === 'en' ? 'index-en.html' : 'index.html'
		window.location.replace(target + window.location.hash)
		return
	}

	toggle.textContent = currentLang === 'en' ? 'PL' : 'EN'

	toggle.addEventListener('click', () => {
		const next = currentLang === 'en' ? 'pl' : 'en'
		localStorage.setItem('lang', next)
		const target = next === 'en' ? 'index-en.html' : 'index.html'
		window.location.href = target + window.location.hash
	})
})()
