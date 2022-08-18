const content = document.querySelectorAll('.content');
const img = document.querySelectorAll('.planet');
const buttonPlanet = document.querySelectorAll('.button');

function showPlanet() {
	const name = this.textContent;
	console.log(name);
	buttonPlanet.forEach(() => {
		if (!this.classList.contains('active')) {
			content.forEach((el) => {
				if (el.classList.contains(name)) {
					el.classList.add('show');
				} else {
					el.classList.remove('show');
				}
			});
			img.forEach((el) => {
				if (el.classList.contains(name)) {
					el.classList.add('show');
				} else {
					el.classList.remove('show');
				}
			});
			buttonPlanet.forEach((el) => {
				el.classList.remove('active');
			});
			this.classList.add('active');
		}
	});
}

buttonPlanet.forEach((el) => {
	el.addEventListener('click', showPlanet);
});
