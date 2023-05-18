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


/////
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


  
  