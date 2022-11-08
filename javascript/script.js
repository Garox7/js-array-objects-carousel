const myArray = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const heroPreview = document.querySelector('.hero__preview');
const heroThumb = document.querySelector('.hero__thumb');
const btnUp = document.querySelector('.control-up');
const btnDown = document.querySelector('.control-down');

function createHerotext(object) {
    
}

myArray.forEach ((object, i) => {
    
    const imgHero = document.createElement('img');
    imgHero.src = `img/${object.image}`;
    
    const heroText = document.createElement('div');
    heroText.classList.add('hero__preview__text');
    heroText.innerHTML = `<h1>${object.title}</h1><p>${object.text}</p>`;
    
    const imgThumb = document.createElement('img');
    imgThumb.src = `img/${object.image}`;
    
    if (i === 0) {
        imgHero.classList.add('active');
        imgThumb.classList.add('selected');
        heroText.classList.add('show');

    }
    
    heroPreview.append(heroText);
    heroPreview.append(imgHero);
    heroThumb.append(imgThumb);
});

const listHeroImages = heroPreview.querySelectorAll('img');
const listThumbImages = heroThumb.querySelectorAll('img');
const listTextImages = heroPreview.querySelectorAll('.hero__preview__text')

let indexImages = 0;

btnUp.addEventListener('click', function () {

    listHeroImages[indexImages].classList.remove('active');
    listThumbImages[indexImages].classList.remove('selected');
    listTextImages[indexImages].classList.remove('show');


    if (indexImages === 0) {
        indexImages = listHeroImages.length;
    }
    indexImages--;

    listHeroImages[indexImages].classList.add('active');
    listThumbImages[indexImages].classList.add('selected');
    listTextImages[indexImages].classList.add('show');


    console.log(indexImages);
});

btnDown.addEventListener('click', function() {

    listHeroImages[indexImages].classList.remove('active');
    listThumbImages[indexImages].classList.remove('selected');
    listTextImages[indexImages].classList.remove('show');


    indexImages++;
    if (indexImages === listHeroImages.length) {
        indexImages = 0;
    }

    listHeroImages[indexImages].classList.add('active');
    listThumbImages[indexImages].classList.add('selected');
    listTextImages[indexImages].classList.add('show');


    console.log(indexImages);
})