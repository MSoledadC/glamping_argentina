/**
 */

// BUSCADOR//

 function search() {
    let input = document.getElementById("searchInput").value;
    let items = document.getElementById("list").getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
      if (items[i].innerHTML.toLowerCase().includes(input.toLowerCase())) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  }

  // espera a que la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function() {

  // obtiene el botón de consulta
  var botonConsulta = document.getElementById("botonconsulta");

  // obtiene la posición vertical de la mitad de la página
  var mitadPagina = window.innerHeight / 2;

  // agrega un evento de desplazamiento de ventana para detectar cuando se alcanza la mitad de la página
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > mitadPagina) {
      botonConsulta.classList.add("hide-on-scroll");
    } else {
      botonConsulta.classList.remove("hide-on-scroll");
    }
  });
});

  
  
  
  