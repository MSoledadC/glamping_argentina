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

function mostrarContenidoAdicional() {
  var contenidoAdicional = "<p>Además de estos destinos, Argentina cuenta con muchas otras opciones para los amantes del turismo aventura. Por ejemplo, en la provincia de La Rioja es posible realizar excursiones en 4x4 por el desierto y practicar sandboard en las dunas. También hay opciones de turismo aventura en la región de Cuyo, en la provincia de San Juan, donde es posible realizar actividades como el montañismo y el parapente.</p>";
  var contenedor = document.getElementById("turismo-aventura");
  contenedor.innerHTML += contenidoAdicional;
  var boton = document.getElementById("ver-mas");
  boton.style.display = "none";
}
  
  
  