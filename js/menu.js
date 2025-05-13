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

