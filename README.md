# 🚛 MiniTrucks

Site vitrine de miniaturas de caminhão feito com React. Ele exibe o catálogo de miniaturas, uma página de detalhes para cada modelo (com fotos, descrição e comparação "Original x Miniatura") e links diretos de contato para pedir orçamento.

🔗 **Demo:** https://thiagoo-franca.github.io/Minitrucks/

## ✨ Funcionalidades

- Listagem em cards com nome, foto e descrição de cada miniatura
- Página de detalhes por modelo (`/Miniaturas/:id`) com galeria de fotos e texto descritivo
- Comparação entre o caminhão original e a miniatura (quando disponível)
- Botão de orçamento que leva direto ao WhatsApp
- Página "Sobre" e rodapé com links para WhatsApp, Instagram e YouTube
- Navegação entre páginas com React Router

## 🛠️ Tecnologias

- [React 19](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- CSS Modules
- ESLint
- gh-pages (deploy)

## 📁 Estrutura do projeto

```
src/
├── assets/
│   ├── dataBase/caminhoes.js   # dados das miniaturas (nome, descrição, fotos)
│   └── images/                 # fotos dos modelos e logos
├── components/                 # Header, Footer, Dashboard e Post (card)
├── pages/                      # Home, Miniatura (detalhes) e Sobre
├── App.jsx                     # rotas da aplicação
└── main.jsx
```

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/Thiagoo-Franca/Minitrucks.git
cd Minitrucks

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Com o `base` configurado como `/Minitrucks/`, o Vite exibe no terminal a URL local (normalmente `http://localhost:5173/Minitrucks/`).

## 📜 Scripts disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o ambiente de desenvolvimento        |
| `npm run build`   | Gera a build de produção na pasta `dist`    |
| `npm run preview` | Visualiza a build de produção localmente    |
| `npm run lint`    | Executa o ESLint                            |
| `npm run deploy`  | Faz build e publica no GitHub Pages         |

## ➕ Como adicionar uma nova miniatura

1. Coloque as fotos em uma nova pasta dentro de `src/assets/images/`.
2. Importe as imagens e adicione um novo objeto em `src/assets/dataBase/caminhoes.js`, seguindo o formato dos itens existentes (`id`, `nome`, `descricao`, `texto` e `img`, `img2`, `img3`... para as fotos).
3. O card e a página de detalhes são gerados automaticamente a partir desses dados.

## 🌐 Deploy

O projeto é publicado no GitHub Pages com o pacote `gh-pages`:

```bash
npm run deploy
```

## 📬 Contato

- [WhatsApp](https://api.whatsapp.com/send/?phone=5573988485292&text&type=phone_number&app_absent=0)
- [Instagram](https://www.instagram.com/minitrucksfranca/)
- [YouTube](https://www.youtube.com/@MiniaturasFran%C3%A7a)

---

Desenvolvido por [Thiago França](https://github.com/Thiagoo-Franca).
