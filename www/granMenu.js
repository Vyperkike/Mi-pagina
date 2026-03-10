

const botonMenu=document.getElementById("botoncito");
const menu=document.getElementById("menuDesplegable");
    
    botonMenu.addEventListener("click", function() {
          menu.classList.toggle("ocultarMenu");
    });


// Seleccionamos todos los enlaces dentro del menú
const enlacesMenu = menu.querySelectorAll("a");

// Agregamos un event listener a cada enlace
enlacesMenu.forEach(function(enlace) {
  enlace.addEventListener("click", function() {
    // Ocultamos el menú
    menu.classList.add("ocultarMenu");
  });
});



    
    
    
      const apiURL = "https://mx.dolarapi.com/v1/cotizaciones/usd";

  // Función para obtener la cotización
  function obtenerCotizacion() {
    fetch(apiURL)
      .then(function(response) {
        return response.json(); // convertimos a JSON
      })
      .then(function(data) {
        // Mostramos los valores en los divs
        document.getElementById("compra").textContent = "$" + data.compra;
        document.getElementById("venta").textContent = "$" + data.venta;
        document.getElementById("compra2").textContent = "$" + data.compra;
        document.getElementById("venta2").textContent = "$" + data.venta;
      })
      .catch(function(error) {
        console.error("Error al obtener la cotización:", error);
        document.getElementById("compra").textContent = "No se pudo cargar";
        document.getElementById("venta").textContent = "No se pudo cargar";
        document.getElementById("compra2").textContent = "No se pudo cargar";
        document.getElementById("venta2").textContent = "No se pudo cargar";
      });
  }

  // Ejecutamos la función al cargar la página
  obtenerCotizacion();

  // Opcional: actualizar cada 5 minutos
  setInterval(obtenerCotizacion, 300000);
    
  
  