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


//google translate

/**
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_language_translator');
}

function changeLanguage() {
  var select = document.getElementsByClassName('goog-te-combo')[0];
  select.value = 'en'; // Cambia 'en' por el código del idioma deseado
  select.dispatchEvent(new Event('change'));
}


//function changeLanguage() {
  var textElement = document.getElementById('translated-text');
  var currentLanguage = textElement.lang;

  var translations = {
    es: 'Texto traducido', // Traducción en español
    en: 'Translated text', // Traducción en inglés
    fr: 'Texte traduit' // Traducción en francés, puedes agregar más idiomas si lo deseas
  };

  // Verifica el idioma actual y cambia al siguiente idioma disponible
  if (currentLanguage === 'es') {
    textElement.innerText = translations.en; // Cambia al inglés
    textElement.lang = 'en';
  } else if (currentLanguage === 'en') {
    textElement.innerText = translations.fr; // Cambia al francés
    textElement.lang = 'fr';
  } else {
    textElement.innerText = translations.es; // Cambia al español (por defecto)
    textElement.lang = 'es';
  }
  */
