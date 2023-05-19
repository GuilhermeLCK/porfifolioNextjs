import style from "./styles.module.scss";
import Image from "next/image";
import Instragram from "../../Img/Insta.svg";
import Git from "../../Img/github.svg";
import Linkedin from "../../Img/icons8-linkedin.svg";
import Email from "../../Img/Email.png";
import Wpp from "../../Img/wpp.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <section className={style.container} id="contato">
        <div className={style.containerContato} data-aos="flip-up">
          <div className={style.containerImg}>
            <div className={style.redes}>
              <a
                href="https://www.instagram.com/guilherme.lcs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image src={Instragram} alt="Instragram"></Image>
              </a>
            </div>
            <div className={style.redes}>
              <a
                href="https://github.com/GuilhermeLCK/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Git} alt="Git"></Image>
              </a>
            </div>
            <div className={style.redes}>
              <a
                href="https://www.linkedin.com/in/gui-lcs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image src={Linkedin} alt="Linkedin"></Image>
              </a>
            </div>
            <div className={style.redes}>
              <a
                href="mailto:guilhermelimacost@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Email} alt="Email"></Image>
              </a>
            </div>
            <div className={style.redes}>
              <a
                href="https://wa.me/5585989728250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Wpp} alt="Wpp"></Image>
              </a>
            </div>
          </div>
          <div className={style.copy}>
            <h1>Site desenvolvido por Guilherme | &copy; 2023</h1>
          </div>
        </div>
      </section>
    </>
  );
}
