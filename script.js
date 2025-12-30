// Carrossel de depoimentos
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

if (carousel) {
  setInterval(() => {
    scrollAmount += 2;
    if (scrollAmount > carousel.scrollWidth) scrollAmount = 0;
    carousel.scrollLeft = scrollAmount;
  }, 50);
}

// Galeria interna em espelho translúcido
const modal = document.getElementById('galeria-modal');
const grid = document.querySelector('.galeria-grid');
const fecharBtn = document.querySelector('.fechar-galeria');

document.querySelectorAll('.btn-galeria').forEach(btn => {
  btn.addEventListener('click', () => {
    const tipo = btn.getAttribute('data-tipo');
    grid.innerHTML = '';

    for (let i = 1; i <= 12; i++) {
      const img = document.createElement('img');
      img.src = `imagens/comidas/${tipo}${i}.jpg`;
      grid.appendChild(img);
    }

    modal.style.display = 'flex';
  });
});

fecharBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Animação dos pontos com reset por visibilidade
const locaisSection = document.getElementById('locais');
const pontos = document.querySelectorAll('.linha-pontos, .linha-vertical-pontos');

function iniciarAnimacaoPontos() {
  pontos.forEach((ponto, index) => {
    setTimeout(() => {
      ponto.style.opacity = '1';
    }, index * 600);
  });
}

function resetarAnimacaoPontos() {
  pontos.forEach(ponto => {
    ponto.style.opacity = '0';
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      resetarAnimacaoPontos();
      iniciarAnimacaoPontos();
    } else {
      resetarAnimacaoPontos();
    }
  });
}, { threshold: 0.3 });

observer.observe(locaisSection);

// Modal de depoimentos
const depoimentoModal = document.getElementById('depoimento-modal');
const depoimentoModalImg = document.getElementById('depoimento-modal-img');
const fecharDepoimento = document.querySelector('.fechar-depoimento');

document.querySelectorAll('.espelho.depoimento img').forEach(img => {
  img.addEventListener('click', () => {
    depoimentoModalImg.src = img.src;
    depoimentoModal.style.display = 'flex';
  });
});

fecharDepoimento.addEventListener('click', () => {
  depoimentoModal.style.display = 'none';
});

depoimentoModal.addEventListener('click', (e) => {
  if (e.target === depoimentoModal) {
    depoimentoModal.style.display = 'none';
  }
});
