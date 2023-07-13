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


//Mostrar Provincias///
function mostrar(element) {
  var container = element.nextElementSibling;
  container.style.display = "flex";
}

function ocultar() {
  var containers = document.getElementsByClassName("gmostrar");
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.display = "none";
  }
  
  var targetElement = document.getElementById("rooms");
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

//Compartir publicacion///
document.addEventListener('DOMContentLoaded', function() {
  var notaURL = window.location.href;

  var facebookLink = document.querySelector('.facebook');
  facebookLink.href += notaURL;

  var twitterLink = document.querySelector('.twitter');
  twitterLink.href += notaURL;

  var linkedinLink = document.querySelector('.linkedin');
  linkedinLink.href += notaURL;

  var whatsappLink = document.querySelector('.whatsapp');
  whatsappLink.href += notaURL;
});



