// ===== ELEMENTOS DO DOM =====
const filmesGrid = document.getElementById('filmes-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loading = document.getElementById('loading');
const erro = document.getElementById('erro');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const sectionTitle = document.getElementById('section-title');

// ===== FUNÇÕES DE UI =====
function mostrarLoading() {
  loading.classList.add('ativo');
  filmesGrid.innerHTML = '';
  erro.classList.remove('ativo');
}

function esconderLoading() {
  loading.classList.remove('ativo');
}

function mostrarErro(msg) {
  erro.textContent = msg;
  erro.classList.add('ativo');
  esconderLoading();
}

function renderizarCards(filmes) {
  esconderLoading();
  if (!filmes.length) {
    mostrarErro('Nenhum filme encontrado.');
    return;
  }
  filmesGrid.innerHTML = filmes.map(filme => `
    <div class="card" onclick="abrirModal(${filme.id})">
      ${filme.poster_path
        ? `<img class="card__poster" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}" loading="lazy">`
        : `<div class="card__poster--placeholder">🎬</div>`
      }
      <div class="card__info">
        <p class="card__titulo">${filme.title}</p>
        <div class="card__meta">
          <span>${filme.release_date ? filme.release_date.slice(0,4) : 'N/A'}</span>
          <span class="card__nota">⭐ ${filme.vote_average ? filme.vote_average.toFixed(1) : 'N/A'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

async function abrirModal(id) {
  modal.classList.add('ativo');
  modalBody.innerHTML = '<div style="padding:2rem;text-align:center">Carregando...</div>';
  try {
    const filme = await buscarDetalhes(id);
    modalBody.innerHTML = `
      ${filme.poster_path
        ? `<img class="modal__poster" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}">`
        : ''
      }
      <div class="modal__info">
        <h2 class="modal__titulo">${filme.title}</h2>
        <p class="modal__meta">${filme.release_date ? filme.release_date.slice(0,4) : ''} ${filme.genres ? '• ' + filme.genres.map(g => g.name).join(', ') : ''}</p>
        <p class="modal__nota">⭐ ${filme.vote_average ? filme.vote_average.toFixed(1) : 'N/A'} / 10</p>
        <p class="modal__sinopse">${filme.overview || 'Sinopse não disponível.'}</p>
      </div>
    `;
  } catch {
    modalBody.innerHTML = '<p style="padding:2rem;color:#ff6b6b">Erro ao carregar detalhes.</p>';
  }
}

function fecharModal() {
  modal.classList.remove('ativo');
}

// ===== EVENTOS =====
modalClose.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', fecharModal);

searchBtn.addEventListener('click', async () => {
  const titulo = searchInput.value.trim();
  if (!titulo) return;
  mostrarLoading();
  sectionTitle.textContent = `🔍 Resultados para "${titulo}"`;
  try {
    const filmes = await buscarPorTitulo(titulo);
    renderizarCards(filmes);
  } catch {
    mostrarErro('Erro ao buscar filmes. Tente novamente.');
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});

// ===== INICIALIZAÇÃO =====
(async () => {
  mostrarLoading();
  try {
    const filmes = await buscarPopulares();
    renderizarCards(filmes);
  } catch {
    mostrarErro('Erro ao carregar filmes. Verifique sua conexão.');
  }
})();