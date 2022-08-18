const content = document.querySelectorAll('.content');
const buttonPlanet = document.querySelectorAll('.button');

function showPlanet() {
	buttonPlanet.forEach(() => {
		const name = this.textContent;
		if (!this.classList.contains('active')) {
			content.forEach((el) => {
				if (el.classList.contains(name)) {
					el.classList.add('show');
				} else {
					el.classList.remove('show');
				}
			});
		}
	});
}

buttonPlanet.forEach((el) => {
	el.addEventListener('click', showPlanet);
});
