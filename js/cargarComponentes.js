// función para cargar un fragmento HTML dentro de un contenedor por id
function loadHTML(id, url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar: ${url}, status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error('Error al cargar archivo:', error);
      document.getElementById(id).innerHTML = "<p>Error al cargar el contenido.</p>";
    });
}

// Carga nav y footer
Promise.all([
  loadHTML('nav-placeholder', '../html/componentes/nav.html'),
  loadHTML('footer-placeholder', '../html/componentes/footer.html')
]).then(() => {
  //  scripts que dependan del nav o footer ya cargados
  
  initMenuResponsive();
});


function initMenuResponsive() {
  const btnMenu = document.querySelector('#nav-placeholder .menu-btn');
  const nav = document.querySelector('#nav-placeholder nav');

  if (btnMenu && nav) {
    btnMenu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
}