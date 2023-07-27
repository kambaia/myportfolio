import { Container } from './styles';
import githubIcon from '../../assets/github-icon.svg';
import externalLinkIcon from '../../assets/external-link-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Translate } from 'react-auto-translate';
import { techs } from './technology';

export function Portfolio() {
  return (
    <Container id='portfolio'>
      <h2>
        <Translate>Meu portfólio</Translate>
      </h2>
      <div className='project-company'>
        <h2>
          <Translate>Minha experiência das seguintes empresas</Translate>
        </h2>
      </div>
      <div className='projects'>
        {techs.map((item) => {
          if (item.company)
            return (
              <ScrollAnimation animateIn='flipInX'>
                <div className='project'>
                  <header>
                    <svg
                      width='50'
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#23ce6b '
                      stroke-width='1'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <title>Folder</title>
                      <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                    </svg>
                    <div className='project-links'>
                      <a
                        href='https://github.com/kambaia/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src={externalLinkIcon} alt='Visitar site' />
                      </a>
                    </div>
                  </header>
                  <div className='body'>
                    <h3>{item.title}</h3>
                    <p>
                      <Translate>{item.description}</Translate>{' '}
                      <a href={item?.link}>{item.title}</a>.
                    </p>
                  </div>
                  <footer>
                    <ul className='tech-list'>
                      {item.tech.map((tech) => (
                        <li>{tech.name}</li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </ScrollAnimation>
            );
        })}
      </div>
      <div className='project-only'>
        <h2>
          <Translate>Minha experiência pessoal</Translate>
        </h2>
      </div>
      <div className='projects'>
        {techs.map((item) => {
          if (!item.company)
            return (
              <ScrollAnimation animateIn='flipInX'>
                <div className='project'>
                  <header>
                    <svg
                      width='50'
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#23ce6b '
                      stroke-width='1'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <title>Folder</title>
                      <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                    </svg>
                    <div className='project-links'>
                      <a
                        href='https://github.com/kambaia/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src={externalLinkIcon} alt='Visitar site' />
                      </a>
                    </div>
                  </header>
                  <div className='body'>
                    <h3>{item.title}</h3>
                    <p>
                      <Translate>{item.description}</Translate>{' '}
                      <a href={item?.link} target='_blank' rel='noreferrer'>
                        {item.title}
                      </a>
                      .
                    </p>
                  </div>
                  <footer>
                    <ul className='tech-list'>
                      {item.tech.map((tech) => (
                        <li>{tech.name}</li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </ScrollAnimation>
            );
        })}
      </div>
    </Container>
  );
}
