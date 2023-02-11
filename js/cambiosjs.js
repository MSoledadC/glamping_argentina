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
  
  
  
  
  
  