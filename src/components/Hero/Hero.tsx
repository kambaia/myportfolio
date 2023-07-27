import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Illustration from '../../assets/illustration.svg';
import { NavHashLink } from 'react-router-hash-link';
import { Translate } from 'react-auto-translate';
export function Hero() {
  return (
    <Container id='home'>
      <div className='hero-text'>
        <ScrollAnimation animateIn='fadeInUp'>
          <p>
            <Translate>Olá 👋, eu sou</Translate>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
          <h1>Alberto Kambaia</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
          <h3>
            <Translate>Desenvolvedor Full Stack</Translate>
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
          <p className='small-resume'>
            <Translate>
              Sou um técnico em informática com foco em desenvolvimento Web com
              JavaScript.
            </Translate>
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={0.8 * 1000}>
          <BrowserRouter>
            <a
              href='https://api.whatsapp.com/send?phone=244944969865'
              target='_blank'
              rel='noreferrer'
              className='button'
            >
              Fale comigo
            </a>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className='hero-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={1 * 1000}>
          <img src={Illustration} alt='Ilustração' />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
