import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. ESTADO: Controla o tema
  const [temaEscuro, setTemaEscuro] = useState(false);

  // 2. EFEITO: Carrega o tema salvo ao iniciar
  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
      setTemaEscuro(true);
    }
  }, []);

  // 3. EFEITO: Aplica a classe no body e salva no localStorage quando o estado muda
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
    e.preventDefault();
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
    // Fragmento <> substitui o body
    <>
      <header>
        <nav id="menu">
          <ul>
            <li>
              <a href="#video" onClick={(e) => handleScroll(e, 'video')}>
                <i className="fa-solid fa-house"></i>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>
                <i className="fa-solid fa-brain"></i>
              </a>
            </li>
            <li>
              <a href="#formacao" onClick={(e) => handleScroll(e, 'formacao')}>
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={(e) => handleScroll(e, 'projetos')}>
                <i className="fa-solid fa-trowel-bricks"></i>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                id="botao-tema" 
                onClick={(e) => {
                  e.preventDefault();
                  setTemaEscuro(!temaEscuro);
                }}
              >
                {temaEscuro ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="ficha">
          <img src="/imagens/guanabara-perfil.jpg" className="foto" alt="Foto de Perfil" />
          <h1>Gustavo Guanabara</h1>
          <p>
            Formado em Ciência da Computação, com especialização em docência superior, 
            desenvolvimento web e inteligência artificial. Apaixonado por tecnologia e sempre 
            busca de novos desafios. Atualmente atuo como professor e desenvolvedor.
          </p>
          <div id="social">
            <a href="#" target="_blank" rel="nofollow"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/CAFE2l" target="_blank" rel="nofollow"><i className="fa-brands fa-github"></i></a>
            <a href="#" target="_blank" rel="nofollow"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" target="_blank" rel="nofollow"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" target="_blank" rel="nofollow"><i className="fa-brands fa-telegram"></i></a>
          </div>
        </section>

        <section id="detalhes">
          <article id="video">
            <h2><i className="fa-solid fa-handshake"></i>Deixe-me Apresentar</h2>
            <div id="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VdWfSfWA_BQ?si=ZcOJBRz-ACX4REeO" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </article>

          <article id="skills">
            <h2><i className="fa-solid fa-brain"></i> Minhas Skills</h2>
            <div className="skill-container">
              
              <div className="item">
                <div className="info">
                  <span className="nome"><i className="fa-solid fa-code"></i>HTML5</span>
                  <span className="porcent">90%</span>
                </div>
                <div className="barra">
                  <div className="progresso" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="item">
                <div className="info">
                  <span className="nome"><i className="fa-solid fa-code"></i>CSS3</span>
                  <span className="porcent">80%</span>
                </div>
                <div className="barra">
                  <div className="progresso" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="item">
                <div className="info">
                  <span className="nome"><i className="fa-solid fa-code"></i>JavaScript</span>
                  <span className="porcent">75%</span>
                </div>
                <div className="barra">
                  <div className="progresso" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="item">
                <div className="info">
                    <span className="nome"><i className="fa-solid fa-person-rays"></i>Comunicação</span>
                    <span className="porcent">100%</span>
                </div>
                <div className="barra">
                    <div className="progresso" style={{ width: '100%',}}></div>
                </div>
              </div>

            </div>
          </article>

          <article id="formacao">
            <h2><i className="fa-solid fa-graduation-cap"></i>Formação</h2>
            <div id="formacao-container">
              <div className="curso">
                <p className="periodo">1991 - 1994</p>
                <h3 className="instituicao">Escola Técnica Carioca</h3>
                <p className="titulacao">Técnico em informática</p>
              </div>

              <div className="curso">
                <p className="periodo">1995 - 2000</p>
                <h3 className="instituicao">Instituto Superior de Tecnologia</h3>
                <p className="titulacao">Bacharelado em Ciência da Computação</p>
              </div>

              <div className="curso">
                <p className="periodo">2021 - 2024</p>
                <h3 className="instituicao">Centro de Inteligência Artificial</h3>
                <p className="titulacao">Técnicas para aplicação de IA's</p>
              </div>
            </div>
          </article>

          <article id="projetos">
            <h2><i className="fa-solid fa-trowel-bricks"></i>Projetos</h2>
            <div id="projeto-container">
              
              <div className="projeto">
                <img src="/imagens/projeto-01-videos.jpg" alt="Projeto Vídeos" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2022</p>
                  <h3 className="titulo">Projeto de Videos</h3>
                  <p>Projeto construído para treinar a inserção de vídeos em nosso site.</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </details>
                </div>
              </div>

              <div className="projeto">
                <img src="/imagens/projeto-02-cordel.jpg" alt="Projeto Cordel" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2023</p>
                  <h3 className="titulo">Projeto de Cordel</h3>
                  <p>Projeto construído para treinar efeito paralax em imagens.</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </details>
                </div>
              </div>

              <div className="projeto">
                <img src="/imagens/projeto-03-android.jpg" alt="Projeto Android" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2023</p>
                  <h3 className="titulo">Projeto Android</h3>
                  <p>Projeto construído para treinar conteúdo e imagens dinâmicas</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  </details>
                </div>
              </div>

                <div className="projeto">
                <img src="/imagens/projeto-04-links.jpg" alt="Projeto Cordel" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2023</p>
                  <h3 className="titulo">Projeto de Cordel</h3>
                  <p>Projeto construído para treinar efeito paralax em imagens.</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </details>
                </div>
              </div>

              <div className="projeto">
                <img src="/imagens/projeto-05-login.jpg" alt="Projeto Cordel" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2023</p>
                  <h3 className="titulo">Projeto de Cordel</h3>
                  <p>Projeto construído para treinar efeito paralax em imagens.</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </details>
                </div>
              </div>



                <div className="projeto">
                <img src="/imagens/projeto-06-album.jpg" alt="Projeto Cordel" className="foto" />
                <div className="projeto-info">
                  <p className="periodo">2023</p>
                  <h3 className="titulo">Projeto de Cordel</h3>
                  <p>Projeto construído para treinar efeito paralax em imagens.</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </details>
                </div>
              </div>

            </div>
          </article>
        </section>
      </main>
      
      <footer>
        Portfólio desenvolvido por <a href="https://www.cursoemvideo.com/" target="_blank" rel="nofollow">Curso em Vídeo</a> em 2025
      </footer>
    </>
  );
}

export default App;