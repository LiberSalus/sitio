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
  document.querySelector('.btnMenu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  });

  document.querySelectorAll('.despliega').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
  
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