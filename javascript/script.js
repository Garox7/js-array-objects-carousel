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
/******** FUNIONI DI ATTRIBUZIONE CLASSI: ACTIVE, SELECTED, SHOW *********/
let indexImages = 0;
function upSlide() {
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
    
    console.log('vado verso su'); //DEBUG
}

function downSlide() {
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

    console.log('vado verso giù'); // DEBUG
}

/******** IMPOSTO HTML TRAMITE L'ARRAY DI OGGETTI *********/
const heroPreview = document.querySelector('.hero__preview');
const heroThumb = document.querySelector('.hero__thumb');

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
    
    heroPreview.append(imgHero, heroText);
    heroThumb.append(imgThumb);
});

/******** IMPOSTO L'AUTOPLAY VERSO IL BASSO DI DEFAULT *********/
const listHeroImages = heroPreview.querySelectorAll('img');
const listThumbImages = heroThumb.querySelectorAll('img');
const listTextImages = heroPreview.querySelectorAll('.hero__preview__text')

autoPlay = setInterval(downSlide, 3000);

/******** UP BUTTON *********/
const btnUp = document.querySelector('.control-up');

btnUp.addEventListener('click', function () {
    clearInterval(autoPlay);
    upSlide();
    autoPlay = setInterval(upSlide, 3000);
});

/******** DOWN BUTTON *********/
const btnDown = document.querySelector('.control-down');

btnDown.addEventListener('click', function() {
    clearInterval(autoPlay);
    downSlide()
    autoPlay = setInterval(downSlide, 3000);

})

/******** START/STOP BUTTON *********/
const stopStartButton = document.querySelector('.start-stop__btn');

let onOff = true;
stopStartButton.addEventListener('click', function () {
    if (onOff === true) {
        stopStartButton.innerHTML = 'Start';
        clearInterval(autoPlay);
        onOff = false;

        console.log('hai stoppato', onOff); //DEBUG

    } else if ((onOff === false) && (autoPlay = setInterval(downSlide, 3000))){
        stopStartButton.innerHTML = 'Stop';
        clearInterval(autoPlay);
        autoPlay = setInterval(downSlide, 3000);
        onOff = true;

        console.log('hai riavviato', onOff); //DEBUG

    } else {
        clearInterval(autoPlay);
        autoPlay = setInterval(upSlide, 3000);
        onOff = true;

    }
});

/******** INVERT BUTTON *********/
const invertBtn = document.querySelector('.invert-btn');

let inverted = true;
invertBtn.addEventListener('click', function() {
    if (inverted === true && onOff === true) {
        invertBtn.innerHTML = 'inverti in giù';
        clearInterval(autoPlay);
        autoPlay = setInterval(upSlide, 3000);
        inverted = false;

    } else if (inverted === false && onOff === true) {
        invertBtn.innerHTML = 'inverti in sù';
        clearInterval(autoPlay);
        autoPlay = setInterval(downSlide, 3000);
        inverted = true;
    }
})