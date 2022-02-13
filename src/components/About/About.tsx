import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import phpIcon from "../../assets/php.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Meu nome é Alberto Kambaia, sou técnico em informática, frequentando atualmente o curso de engenharia informática no  Instituto Superior Politécnico de Tecnologias e Ciências (ISPTEC) apaixonado por programação desde os meus 12 anos de idade. Sou apaixonado por entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor Front-End e Back-End</p>
        </ScrollAnimation>
	
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript. Tenho familiaridade em desenvolver layouts que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Sou uma pessoa dedicada que corre atrás para realizar os seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar a minha melhor versão.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades com experiencia de 4 anos trabalhando para empresas conhecidas a nível nacional:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={phpIcon} alt="php" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>
		  <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={mongodbIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>
		  <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={firebaseIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img width={400} src="https://scontent.flad1-1.fna.fbcdn.net/v/t1.6435-9/64883354_1266181256873105_2276378365332029440_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFufmkdt1WBGVBtmqkFWC59YxNzgsYMfUljE3OCxgx9SctSXvcF3opk5sqAu25cBbpsixdRVWg7tFEKAyeJqXd7&_nc_ohc=BdAsmwXPR8UAX-clPsn&_nc_ht=scontent.flad1-1.fna&oh=00_AT_q9R_hsHJT0V29WuT6pUpx4asbztZMaxV9SGQgbQx4Gw&oe=622C88DE" alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
