const moon = document.querySelector('.moon');
const titan = document.querySelector('.titan');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');
const buttonPlanet = document.querySelectorAll('.button')


const showPlanet = () => {
        console.log(this);
}

buttonPlanet.forEach (el => {
    el.addEventListener('click', showPlanet)
})
