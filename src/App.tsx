import { useState, useEffect } from 'react'; // Importamos os hooks necessários
import './App.css';

function App() {
  // 1. ESTADO: Para controlar se é tema escuro ou não
  const [temaEscuro, setTemaEscuro] = useState(false);

  // 2. EFEITO: Roda ao carregar a página para pegar o tema salvo
  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
      setTemaEscuro(true);
    }
  }, []);

  // 3. EFEITO: Toda vez que o estado "temaEscuro" muda, ele atualiza o Body e o LocalStorage
  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add('escuro');
      localStorage.setItem('tema', 'escuro');
    } else {
      document.body.classList.remove('escuro');
      localStorage.setItem('tema', 'claro');
    }
  }, [temaEscuro]);

  // 4. FUNÇÃO: Scroll Suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Evita o pulo seco padrão
    
    const target = document.getElementById(targetId);
    const header = document.querySelector('header');

    if (target && header) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Note que removemos a tag <body>, usamos apenas <> (Fragment) ou uma <div>
    <body>
      <header>
        <nav id="menu">          
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Formação</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Tema</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Em breve...</h1>
      </main>
      <footer>

      </footer>
    </body>
  );
}

export default App;