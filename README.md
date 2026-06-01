# CineSearch 🎬

![Deploy](https://img.shields.io/badge/deploy-vercel-black)
![Status](https://img.shields.io/badge/status-concluído-success)
![API](https://img.shields.io/badge/API-TMDB-01b4e4)

App web para busca e descoberta de filmes em tempo real, consumindo a API pública do TMDB. Projeto desenvolvido simulando o fluxo profissional de engenharia de software — desde a documentação UML até o deploy em produção.

## 🔗 Demo ao vivo
[cinesearch-taupe.vercel.app](https://cinesearch-taupe.vercel.app/)

## 🛠 Tecnologias
- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, animações)
- JavaScript vanilla (Fetch API, async/await, manipulação de DOM)
- TMDB REST API
- Git/GitHub com fluxo de branches e Pull Requests
- Deploy via Vercel

## 📋 Funcionalidades
- Listagem de filmes populares ao carregar a página
- Busca de filmes por título em tempo real
- Modal com detalhes completos — poster, gênero, nota e sinopse
- Estado de carregamento com spinner
- Tratamento de erros com mensagem amigável
- Design responsivo para mobile, tablet e desktop

## 📐 Engenharia de Software
Este projeto foi documentado seguindo práticas de engenharia de software:

- **Documento de Requisitos** — requisitos funcionais (RF) e não funcionais (RNF)
- **Diagrama de Casos de Uso** — atores e interações do sistema
- **Diagrama de Classes** — modelagem orientada a objetos
- **Diagrama de Sequência** — fluxo de busca e exibição de filmes

Os diagramas estão disponíveis na pasta `/docs`.

## 🚀 Como rodar localmente
```bash
git clone https://github.com/eng-andersonpereira/cinesearch.git
cd cinesearch
```

1. Crie uma conta gratuita em [themoviedb.org](https://www.themoviedb.org)
2. Gere sua API Key em Configurações → API
3. Abra `js/api.js` e substitua `SUA_API_KEY_AQUI` pela sua chave
4. Abra `index.html` com Live Server no VS Code

## 📁 Estrutura
```
cinesearch/
├── css/
│   └── style.css
├── js/
│   ├── api.js        # Integração com a TMDB API
│   └── main.js       # Lógica de UI e manipulação do DOM
├── docs/
│   ├── casos-de-uso.png
│   ├── diagrama-classes.png
│   └── diagrama-sequencia.png
├── assets/
├── .gitignore
└── index.html
```

## 👨‍💻 Autor
Anderson Pereira — [GitHub](https://github.com/eng-andersonpereira)

---
*Dados fornecidos por [TMDB](https://www.themoviedb.org). Este produto usa a API TMDB mas não é endossado ou certificado pelo TMDB.*
