import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { Translate } from "react-auto-translate";

export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2><Translate>Entre em contato comigo</Translate></h2>
        <p><Translate>Se você viu o meu potencial ou quer conversar comigo, não exite em me mandar uma mensagem.</Translate></p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:kambaiaalberto@gmail.com">kambaiaalberto@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+244944969865">(244)944969865</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}