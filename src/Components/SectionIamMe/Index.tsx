import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./styles.module.scss";
import github from "../../Img/github.svg";
import linkedin from "../../Img/Linkedin.png";
import insta from "../../Img/Insta.svg";
import pdf from "../../Img/icons8-pdf-50.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function IamMe() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front End", "A caminho do Full-Stack", "Freelancer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.ola}>
          <h1>
            Óla, sou o <span className={styles.name}>Guilherme</span> <br />
            <span>{text}</span>
            <span style={{ color: "#ff6464" }}>
              <Cursor cursorStyle="<" />
            </span>
          </h1>
        </div>
        <div className={styles.redes}>
          <a href="https://github.com/GuilhermeLCK/" target="_blank">
            {" "}
            <Image src={github} alt="Logo-Git" className={styles.img}></Image>
          </a>
          <a href="https://www.linkedin.com/in/gui-lcs/" target="_blank">
            <Image
              src={linkedin}
              alt="Logo-Linke"
              className={styles.img}
            ></Image>
          </a>
          <a href="https://www.instagram.com/guilherme.lcs/" target="_blank">
            <Image src={insta} alt="Logo-Insta" className={styles.img}></Image>
          </a>
          <a href="#" target="_blank">
            <Image src={pdf} alt="Logo-Insta" className={styles.img}></Image>
          </a>
        </div>
      </section>
    </>
  );
}
