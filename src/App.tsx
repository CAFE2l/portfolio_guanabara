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
            <li><a href="#"><i className="fa-solid fa-house"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-brain"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-graduation-cap"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-trowel-bricks"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-moon"></i></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="ficha">
          <img src="../imagens/guanabara-perfil.jpg" className="foto"></img>
          <h1>Gustavo Guanabara</h1>
          <p>Formado em Ciência da Computação, com especialização 
            em docência superior, desenvolvimento web e inteligência artificial.
            Apaixonado por tecnologia e sempre busca de novos desafios. Atualmente atuo 
            como professor e desenvolvedor, compartilhando conhecimento através de cursos online 
            e projetos de código aberto.
          </p>
          <div id="social">
            <a href="" target="_blank" rel="nofollow"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/CAFE2l" target="_blank" rel="nofollow"><i className="fa-brands fa-github"></i></a>
            <a href="" target="_blank" rel="nofollow"><i className="fa-brands fa-youtube"></i></a>
            <a href="" target="_blank" rel="nofollow"><i className="fa-brands fa-twitter"></i></a>
            <a href="" target="_blank" rel="nofollow"><i className="fa-brands fa-telegram"></i></a>
          </div>
        </section>

       <section id="detalhes">
          <article id="video">
            <h2><i className="fa-solid fa-handshake"></i>Deixe-me Apresentar</h2>
            <div id="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VdWfSfWA_BQ?si=ZcOJBRz-ACX4REeO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

            </div>
            </article>  
            <article id="skills">
                <h2><i className="fa-solid fa-brain"></i> Minhas Skills</h2>
            </article>

            <article id="formacao">
              <h2><i className="fa-solid fa-graduation-cap"></i>Formação</h2>

            </article>

            <article id="projetos">
              <h2><i className="fa-solid fa-trowel-bricks"></i>Projetos</h2>
            </article>
        </section>        
      </main>
      <footer>

      </footer>
    </body>
  );
}

export default App;