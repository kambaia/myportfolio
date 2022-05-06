import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Meu portfólio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>PCO</h3>
            <p>Uma aplicação Web criada com a finalidade de permitir os estudantes e encarregados de educação fazerem pagamentos online <a href="https://pco.vercel.app/">pco</a>.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node</li>
              <li>Express</li>
              <li>mongodb</li>
              <li>Reacjs</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/kambaia/Biblioteca-back-end" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Bibioteca Online</h3>
              <p>Uma versão mais agradável para acessar qualquer projecto de fim de curso, sendo os melhores destacados em primeiro lugar.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/kambaia/sistemapro" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sistema de G. Escolar</h3>
              <p>Um sistema de gestão escolar desktop, criado para ajudar a gerir um pequeno colégio com mais de 643 alunos.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C# (POO)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>ECASIM</h3>
            <p>Uma aplicação Web com finalidade de consutória online <a href="https://ecasim.ao/">ecasim</a>.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
            <ul className="tech-list">
              <li>React</li>
              <li>HTML</li>
              <li>Styled-Componts</li>
              <li>Firebase</li>
            </ul>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>ToquePlay</h3>
            <p>ToquePlay é um serviço de streaming e venda de músicas online <a href="https://www.toqueplay.com/">toqueplay</a>
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>HTML</li>
              <li>Styled-Componts</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>PIA</h3>
            <p>Pagamentos Instituicional Angolano é um sistema que visa melhorar a forma de pagamento de proprinas e outros serviços nas diferentes instituições escolares em angola <a href="https://pia-payment.vercel.app/"> pia(Angola)</a>
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>HTML</li>
              <li>Styled-Componts</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      </div>
    </Container>
  );
}