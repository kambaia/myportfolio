import { Container } from './styles';
import cssIcon from '../../assets/css-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import mongodbIcon from '../../assets/mongodb.svg';
import phpIcon from '../../assets/php.svg';
import firebaseIcon from '../../assets/firebase-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Translate } from 'react-auto-translate';

export function About() {
  return (
    <Container id='sobre'>
      <div className='about-text'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h2>
            <Translate>Sobre mim</Translate>
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.2 * 1000}>
          <p>
            <Translate>
              Meu nome é Alberto Kambaia, sou técnico em informática,
              frequentando atualmente o curso de engenharia informática no
              Instituto Superior Politécnico de Tecnologias e Ciências (ISPTEC)
              apaixonado por programação desde os meus 12 anos de idade. Sou
              apaixonado por entregar soluções que agregam na vida das pessoas e
              ao mesmo tempo me desafiam. Aprimorei minhas habilidades como
              desenvolvedor Front-End e Back-End
            </Translate>
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='fadeInLeft'
          delay={0.4 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            <Translate>
              Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript,
              php, mongodb, sql. Tenho familiaridade em desenvolver layouts que
              me fornecem. Estou sempre me aprimorando a cada projeto que
              colocam em minhas mãos.
            </Translate>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.6 * 1000}>
          <p>
            <Translate>
              Sou uma pessoa dedicada que corre atrás para realizar os seus
              sonhos, trabalhador e orientado a resultados, sempre busco
              alcançar a minha melhor versão.
            </Translate>
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInLeft' delay={0.7 * 1000}>
          <h3>
            <Translate>
              Aqui estão as minhas principais habilidades com experiencia de 4
              anos trabalhando para empresas conhecidas a nível nacional:
            </Translate>
          </h3>
        </ScrollAnimation>
        <div>
          <h3>Empresas</h3>
          <div className='hard-skills'>
            <div className='logo-company'>
              <ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
                <img src={'/empresa-logo/ubv.webp'} alt='React' />
              </ScrollAnimation>
            </div>

            <div className='logo-company'>
              <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
                <img src={'/empresa-logo/giap.svg'} alt='React' />
              </ScrollAnimation>
            </div>

            <div className='logo-company'>
              <ScrollAnimation animateIn='fadeInUp' delay={0.3 * 1000}>
                <img src={'/empresa-logo/toqueplay.svg'} alt='React' />
              </ScrollAnimation>
            </div>

            <div className='logo-company'>
              <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
                <img src={'/empresa-logo/loja-dia.png'} alt='React' />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div>
          <h3>Princípais tecnologias</h3>
          <div>
            <div className='hard-skills'>
              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
                  <img src={reactIcon} alt='React' />
                </ScrollAnimation>
              </div>

              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
                  <img src={phpIcon} alt='php' />
                </ScrollAnimation>
              </div>

              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.3 * 1000}>
                  <img src={'/next.png'} alt='JavaScript' />
                </ScrollAnimation>
              </div>

              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
                  <img src={'/aws.png'} alt='aws' />
                </ScrollAnimation>
              </div>

              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.5 * 1000}>
                  <img src={'/mui.png'} alt='material ui' />
                </ScrollAnimation>
              </div>
              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
                  <img src={nodeIcon} alt='Node' />
                </ScrollAnimation>
              </div>

              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
                  <img src={typescriptIcon} alt='Typescript' />
                </ScrollAnimation>
              </div>
              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
                  <img src={mongodbIcon} alt='Typescript' />
                </ScrollAnimation>
              </div>
              <div className='hability'>
                <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
                  <img src={firebaseIcon} alt='Typescript' />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
          <img width={400} src='/mim.jpg' alt='Imagem de perfil' />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
