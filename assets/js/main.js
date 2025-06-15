// mobile-nav & year
const toggleBtn = document.querySelector('.nav-toggle');
const navList  = document.querySelector('nav ul');
toggleBtn?.addEventListener('click',() => navList.classList.toggle('open'));

document.getElementById('year').textContent = new Date().getFullYear();

// highlight active menu
const links = document.querySelectorAll('nav a');
links.forEach(l=>{
  if(l.pathname === location.pathname && l.hash === '') l.classList.add('active');
});
