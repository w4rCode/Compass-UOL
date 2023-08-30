var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    } else{
        ul.classList.add('open');
    }
}

// Função para rolar até o topo da página

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mostrar ou ocultar o botão conforme o scroll

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
};

// Carrousel 

$('.carrosel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
    
        {
          breakpoint: 986,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  ScrollReveal().reveal('tecnology', {
    origin: 'bottom',
    distance: '100px'
  });
  ScrollReveal().reveal('.pilars-imgs', {
    delay: 400, 
    origin: 'top',
    distance: '100px',
    duration: 1200, });


  ScrollReveal().reveal('.reveal', {
    delay: 400, 
   origin: 'top',
   distance: '100px',
   duration: 1200,
 });

  