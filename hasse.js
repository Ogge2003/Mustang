

// Utgås ifrån först efter användaren börjar skrolla
window.onscroll = function() {scrollFunction()};

//Skapar en konstant för huvudsektionen
const bg = document.getElementById('headsec');

//Sänker huvudsektionens synlighet och ökar bakgrundens storlek vid skrollning
window.addEventListener('scroll', function(){
  //Ökar bakgrundens storlek för att skapa en parallax effekt
  bg.style.backgroundSize =  130 + +bg.style.width + window.pageYOffset/12 + '%';
  //Minskar huvudsektionens opacitet
  bg.style.opacity = 1 - +window.pageYOffset / 800 + '';
})

/* Hamburgeranimering */
/*
function navSlide(){
  //skapar konstanter för olika klasser i html-indexen
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () =>{

        //Burger animation
        burger.classList.toggle('toggle');

        //Toggla nav
        nav.classList.toggle('nav-active');

        //Animera länkar
        navLinks.forEach((link, index) => {
            if (link.style.animation == true)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = 'navLinkFade 0.3s ease-in-out';
            }
        });  
    });  
}
*/

navSlide();