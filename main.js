// Efecto de navbar 
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.classList.toggle("shadow-md", window.scrollY > 0);
    }
  });
  

  
  // Texto animado 
  const palabras = ["Innovative", "Creative", "Inspiring", "Modern"];
  let indice = 0;
  const elemento = document.getElementById("animated-word");
  
  setInterval(() => {
    indice = (indice + 1) % palabras.length;
    elemento.classList.remove("opacity-100");
    elemento.classList.add("opacity-0");
  
    setTimeout(() => {
      elemento.textContent = palabras[indice];
      elemento.classList.remove("opacity-0");
      elemento.classList.add("opacity-100");
    }, 300);
  }, 3000);
  
