const content = document.querySelectorAll('.content');
const img = document.querySelectorAll('.planet');
const description = document.querySelectorAll('.description');
const crew = document.querySelectorAll('.pic');
const button = document.querySelectorAll('button');
const body = document.querySelector('body');
const menu = document.querySelectorAll('.linkMenu');

function nav() {
	const adress = window.location.pathname.split('/').pop()
	menu.forEach((el) => {
		el.classList.remove('active')
		if(adress === el.getAttribute('href')){
			el.classList.add('active')
		}
	})
}
function show() {
	const name = this.id;
	console.log(name);
	button.forEach(() => {
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
			description.forEach((el) => {
				if (el.classList.contains(name)) {
					el.classList.add('show');
				} else {
					el.classList.remove('show');
				}
			});
			crew.forEach((el) => {
				if (el.classList.contains(name)) {
					el.classList.add('show');
				} else {
					el.classList.remove('show');
				}
			});
			button.forEach((el) => {
				el.classList.remove('active');
			});
			this.classList.add('active');
			if (body.getAttribute('data-technology')) {
				button.forEach((el) => {
					el.classList.remove('act');
				});
				this.classList.add('act');
			}
		}
	});
}

button.forEach((el) => {
	el.addEventListener('click', show);
});
nav()