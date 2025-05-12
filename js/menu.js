document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const desplegarLinks = document.querySelectorAll('.despliega');

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  desplegarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const subMenu = this.nextElementSibling;
      if (subMenu && subMenu.classList.contains('subMenu')) {
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
