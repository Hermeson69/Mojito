# 🍸 Mojito — Cocktail Bar Landing Page

Landing page animada e imersiva para o **Velvet Pour**, um bar de coquetéis fictício. Construída com **React**, **Vite**, **GSAP** e **Tailwind CSS**, a página oferece uma experiência visual rica com animações baseadas em scroll, efeitos parallax, divisão de texto, scrub de vídeo e transições fluídas.

---

## 🧩 Funcionalidades

| Seção | Descrição |
|-------|-----------|
| **Navbar** | Navegação fixa com logo e links âncora para todas as seções |
| **Hero** | Título com gradiente animado (SplitText), folhas decorativas com parallax, vídeo de fundo com scrub temporal e CTA "View cocktails" |
| **Cocktails** | Listas de coquetéis populares e mais amados com nome, origem, detalhes e preço; animação parallax nas folhas laterais |
| **About** | Grid de imagens, descrição da filosofia do bar, avaliação (4.5 ⭐) com +1000 clientes e animações com SplitText |
| **Art** | Seção interativa com máscara CSS animada, scroll pinado, fade de features e lista de ingredientes/técnicas |
| **Menu** | Carrossel interativo de coquetéis com abas de navegação, setas anterior/próximo, e animações de transição entre drinks |
| **Contact** | Endereço, telefone, e-mail, horários de funcionamento, redes sociais e footer com créditos |

### ✨ Animações & Interatividade
- **GSAP ScrollTrigger** — Animações disparadas por scroll em todas as seções
- **GSAP SplitText** — Animações de caracteres, palavras e linhas no Hero, About e Contact
- **Parallax** — Folhas decorativas com movimento diferencial em várias seções
- **Pin & Scrub** — Seção "The Art" com pinamento e fade progressivo
- **Video scrub** — Vídeo do Hero sincronizado com o scroll do usuário
- **Carrossel** — Slider de coquetéis com navegação por abas e setas

---

## 🛠️ Tecnologias

| Tecnologia | Função |
|------------|--------|
| [React 19](https://react.dev/) | Biblioteca UI |
| [Vite 6](https://vitejs.dev/) | Bundler e dev server |
| [GSAP 3](https://gsap.com/) | Animações de alta performance |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização utility-first |
| [react-responsive](https://github.com/contra/react-responsive) | Media queries via React |

### Plugins GSAP utilizados
- `ScrollTrigger` — Animações baseadas em scroll
- `SplitText` — Animação de caracteres/palavras/linhas

---

## 🚀 Como rodar localmente

1. **Pré-requisitos:** Node.js e npm instalados.

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa ESLint |

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.jsx      # Navegação fixa
│   ├── Hero.jsx        # Seção hero com vídeo e parallax
│   ├── Cocktals.jsx    # Listas de coquetéis
│   ├── About.jsx       # Grid sobre o bar
│   ├── Art.jsx         # Seção interativa "The Art"
│   ├── Menu.jsx        # Carrossel de coquetéis
│   └── Contact.jsx     # Footer com contato e redes sociais
├── App.jsx             # Componente raiz
├── main.jsx            # Entry point
└── index.css           # Estilos globais e Tailwind
```

---

## 📂 Material de apoio

Consulte a pasta `public/readme/` para previews visuais do projeto:
- `hero.png` — Preview geral da landing page
- `thumbnail.png` — Thumbnail do projeto
- `videokit.png` — Preview do kit de vídeo
- `jsmpro.png` — Logo do autor

## 👨‍💻 Autor

**Hermeson A.** — [GitHub](https://github.com/Hermeson69)
