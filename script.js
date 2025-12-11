// Menu mobile toggle
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Carrossel depoimentos
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
setInterval(() => {
  scrollAmount += 2;
  if (scrollAmount > carousel.scrollWidth) scrollAmount = 0;
  carousel.scrollLeft = scrollAmount;
}, 50);

// Pizza giratória - 8 partes
const pizza = document.querySelector('.pizza-girada');
for (let i = 1; i <= 8; i++) {
  let slice = document.createElement('div');
  slice.classList.add('slice');
  slice.style.backgroundImage = `url('imagens/slice${i}.png')`;
  slice.addEventListener('click', () => {
    alert(`Título do Slice ${i}\nDescrição aqui`);
  });
  pizza.appendChild(slice);
}

// Entregador animado
const entregador = document.querySelector('.gif-entregador');
let pos = -100;
function moverEntregador() {
  pos += 2;
  if (pos > window.innerWidth) pos = -100;
  entregador.style.left = pos + 'px';
  requestAnimationFrame(moverEntregador);
}
moverEntregador();

// Galeria pratos
document.querySelectorAll('.btn-galeria').forEach(btn => {
  btn.addEventListener('click', () => {
    let tipo = btn.getAttribute('data-tipo');
    let galeria = [];
    for (let i = 1; i <= 6; i++) {
      galeria.push(`imagens/${tipo}${i}.jpg`);
    }
    let html = galeria.map(img => `<img src="${img}" style="width:150px;margin:5px;">`).join('');
    const galeriaWindow = window.open('', '_blank');
    galeriaWindow.document.write(html);
  });
});
const header = document.getElementById('header');
const menuMobileFixo = document.querySelector('.menu-mobile-fixo');
const whatsappFixo = document.querySelector('.btn-whatsapp-fixo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // quando rolar 100px
    header.style.display = 'none'; // esconde o header
    menuMobileFixo.style.display = 'block';
    whatsappFixo.style.display = 'flex';
  } else {
    header.style.display = 'flex';
    menuMobileFixo.style.display = 'none';
    whatsappFixo.style.display = 'none';
  }
});
