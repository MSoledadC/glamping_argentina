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
 

  // Obtén la URL de la página actual
const url = window.location.href;

// Agrega el evento click a cada botón de compartir
const shareButtons = document.querySelectorAll('.share-buttons a');
shareButtons.forEach(button => {
  button.addEventListener('click', () => {
    const socialNetwork = button.classList[0]; // Obtiene la red social (facebook, twitter, linkedin)
    const shareUrl = getShareUrl(socialNetwork, url); // Obtiene la URL de compartir específica para cada red social
    window.open(shareUrl, '_blank'); // Abre una nueva ventana con la URL de compartir
  });
});

// Función para obtener la URL de compartir específica para cada red social
function getShareUrl(socialNetwork, url) {
  switch (socialNetwork) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    case 'twitter':
      return `https://twitter.com/share?url=${encodeURIComponent(url)}`;
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
    default:
      return '';
  }
} */


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
