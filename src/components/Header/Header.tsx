import { Container, DropDown } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useContext, useEffect, useState } from "react";
import { FiChevronDown } from 'react-icons/fi';
import { Translate } from "react-auto-translate";
import Curriculo from "../../assets/kambaia-cv.pdf";
import { LanguageContext } from "../../context/context";
import { options } from "../../utils/languages";
export function Header() {
  const [isActive, setActive] = useState(false);
  const [option, setOption] = useState(false);
  const [actualLanguage, setActualLanguage] = useState(
    window.localStorage.getItem("lang")
  );
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setActualLanguage(window.localStorage.getItem("lang"));
  }, []);

  const onChooseLanguage = (value: string, lang: string) => {
    setActualLanguage(lang);
    window.localStorage.setItem("language", value);
    window.localStorage.setItem("lang", lang);
    setLanguage(value);
    setOption(!option);
  };

  console.log(options);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>K</span>
          <span>A</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
          <Translate>Home</Translate>
          </NavHashLink>
          <NavHashLink smooth to="#sobre" onClick={closeMenu}>
          <Translate>Sobre mim</Translate>
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
          <Translate>Portfólio</Translate>
          </NavHashLink>
          <NavHashLink smooth to="#contato" onClick={closeMenu}>
          <Translate> Contato</Translate>
          </NavHashLink>
          <a href={Curriculo} download className="button">
            CV
          </a>
            <DropDown>
              <div className="dropdown">
                <button className="dropbtn"> {actualLanguage?actualLanguage:"Portuguese"}<FiChevronDown /></button>
                <div className="dropdown-content">
                  {options.map((item, index) => (
                      <ul  key={index}>
                        <li
                          onClick={() =>
                            onChooseLanguage(item.value, item.label)
                          }
                        >
                          {item.label}
                        </li>
                      </ul>
                  ))}
                </div>
              </div>
            </DropDown>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
