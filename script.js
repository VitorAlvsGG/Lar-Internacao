const toggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
