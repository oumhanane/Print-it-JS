const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// On est sur la première slide
let slideIndex = 1;

//Fonction pour afficher une slide
showSlides(slideIndex);

//Afficher la slide suivante
function plusSlides(n) {
	slideIndex += n
    showSlides(slideIndex);
}

//Afficher la slide n

function currentSlide(n) {
	slideIndex = n
    showSlides(slideIndex);
}

function showSlides(n) {
	//Récupérer toutes les slides
	let slides = document.getElementsByClassName('banner-img');
	//Récupérer tous les points
	let dots = document.getElementsByClassName('dot');
	
	// Réinitialiser notre slide à 1
	if(n > slides.length) { slideIndex = 1 }
	
	// Afficher la dernière slide la slide 4
	if(n < 1 ) { slideIndex = slides.length }
	
	// Cacher toutes les slides
	for(let i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	
	// Retirer "active" de tous les points
	for(let i = 0; i < dots.length; i++) {
	  dots[i].classList.remove('active');
	}
	
	// Afficher la slide demandée
	slides[slideIndex - 1].style.display = 'block';
	
	// Ajouter "active" sur le point cliqué
	dots[slideIndex - 1].classList.add('active');
  }
