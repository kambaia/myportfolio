import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
import { Translate } from "react-auto-translate";
export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>K</span>
        <span>A</span>
      </a>
      <div>
        <p>
          <Translate>Este site foi desenvolvido por mim </Translate> <img src={reactIcon} alt="React" /> <Translate>e com muito</Translate>
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/kambaia-alberto-756a62144/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/kambaia"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://discord.com/users/Alberto#3422"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
