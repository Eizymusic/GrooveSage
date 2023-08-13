document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los enlaces de navegación
  const homeLink = document.getElementById("home-link");
  const ensayoLink = document.getElementById("ensayo-link");
  const articuloLink = document.getElementById("articulo-link");
  const musicaLink = document.getElementById("musica-link");

  // Agregar clases 'active' a los enlaces de navegación según la página actual
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "index.html") {
    homeLink.classList.add("active");
  } else if (currentPage === "ensayos.html") {
    ensayoLink.classList.add("active");
  } else if (currentPage === "articulos.html") {
    articuloLink.classList.add("active");
  } else if (currentPage === "musica.html") {
    musicaLink.classList.add("active");
  }
});
