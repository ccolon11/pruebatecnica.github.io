const header = document.getElementById("top-bar");

$(window).scroll(function () {
    if ($("#top-bar").offset().top > 56) {
        // Cambiar color de fondo y texto cuando se desplaza hacia abajo
        header.style.backgroundColor = "#fff";
        header.style.color = "#003768";

        // Cambiar color del texto dentro de las etiquetas p e i
        $("#top-bar p, #top-bar i,#top-bar a").css("color", "#003768");
    } else {
        // Restaurar propiedades originales
        header.style.backgroundColor = "";
        header.style.color = "";

        // Restaurar color del texto dentro de las etiquetas p e i
        $("#top-bar p, #top-bar i,#top-bar a").css("color", "");
    }
});

const main = document.getElementById("navbar");
const togglerButton = document.querySelector(".custom-toggler");
const collapseMenu = document.querySelector("#navbarCollapse");

$(window).scroll(function () {
    if ($("#navbar").offset().top > 56) {
        main.style.backgroundColor = "#99dbff";
        main.style.color = "#fff";
        togglerButton.style.backgroundColor = "#99dbff"; // Color del botón
        collapseMenu.style.backgroundColor = "#99dbff"; // Color del menú desplegable
    } else {
        // Restaurar propiedades originales
        main.style.backgroundColor = "";
        togglerButton.style.backgroundColor = "";
        collapseMenu.style.backgroundColor = "";
    }
});


  // carousel
  $( document ).ready( function() {
  $(".carousel1").owlCarousel({
    //autoplay: true,
    margin: 30,
    loop: true,
    responsive: {
      0:{
        items: 1
      },
      576:{
        items: 1
      },
      768:{
        items: 2
      },
      992:{
        items: 4
      }
    }
  });
});
//esconder menú on click bootstrap
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

