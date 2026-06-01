// ===== CONFIGURAÇÃO DA API =====
const API_KEY = '5a4469e5d6c16abf76c28981fafa7c72';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// ===== FUNÇÕES DA API =====
async function buscarPopulares() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );
  if (!response.ok) throw new Error('Erro ao buscar filmes populares');
  const data = await response.json();
  return data.results;
}

async function buscarPorTitulo(titulo) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(titulo)}`
  );
  if (!response.ok) throw new Error('Erro ao buscar filmes');
  const data = await response.json();
  return data.results;
}

async function buscarDetalhes(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );
  if (!response.ok) throw new Error('Erro ao buscar detalhes');
  return await response.json();
}