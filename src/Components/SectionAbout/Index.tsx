import styles from "./styles.module.scss";
import Image from "next/image";
import Banner from "../../Img/Imagem do WhatsApp de 2023-05-17 à(s) 11.59.16.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className={styles.about} id="sobre">
        <div className={styles.containerImagem} data-aos="fade-right">
          <Image
            className={styles.banner}
            src={Banner}
            alt="bannerLogo"
          ></Image>{" "}
        </div>
        <div className={styles.containerAbout} data-aos="fade-left">
          <h1>Minha história</h1>
          <p>
            Desde setembro de 2022, iniciei uma nova trajetória profissional na
            área da programação. Durante minha jornada, descobri minha paixão
            por programar e tenho desenvolvido habilidades em diferentes
            linguagens e projetos, como sistemas básicos, portfólios pessoais e
            landing pages. Atualmente, estou me dedicando a aprofundar meu
            conhecimento em React, para expandir ainda mais minhas habilidades
            na área. Embora a transição de carreira tenha sido desafiadora,
            estou empolgado e motivado em seguir esse novo caminho. Aprender e
            crescer na programação é uma jornada contínua, e estou ansioso para
            continuar a desenvolver minhas habilidades e contribuir para
            projetos empolgantes e desafiadores.
          </p>
        </div>
      </div>
    </>
  );
}
