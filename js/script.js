// ===== Menú mobile =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ===== Contador regresivo hasta el 30 de agosto =====
const fechaLimite = new Date('2026-08-30T00:00:00');

function actualizarContador(){
  const ahora = new Date();
  const diff = fechaLimite - ahora;

  const dias = document.getElementById('cd-dias');
  const horas = document.getElementById('cd-horas');
  const min = document.getElementById('cd-min');
  const seg = document.getElementById('cd-seg');

  if (diff <= 0){
    dias.textContent = '00';
    horas.textContent = '00';
    min.textContent = '00';
    seg.textContent = '00';
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  dias.textContent = String(d).padStart(2,'0');
  horas.textContent = String(h).padStart(2,'0');
  min.textContent = String(m).padStart(2,'0');
  seg.textContent = String(s).padStart(2,'0');
}

actualizarContador();
setInterval(actualizarContador, 1000);
