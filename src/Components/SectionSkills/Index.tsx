import sass from "../../Img/sass.svg";
import figma from "../../Img/figma.svg";
import git from "../../Img/git.svg";
import js from "../../Img/js.svg";
import react from "../../Img/reactjs.svg";
import css from "../../Img/css.svg";
import html from "../../Img/html.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillMe() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <section id="conhecimento" data-aos="zoom-out-left">
        <div className={styles.container}>
          <div className={styles.containerH2}>
            <h1>Habilidades</h1>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.item}>
              <Image src={html} alt="html"></Image>
            </div>
            <div className={styles.item}>
              <Image src={css} alt="css"></Image>
            </div>
            <div className={styles.item}>
              <Image src={react} alt="react"></Image>
            </div>
            <div className={styles.item}>
              <Image src={js} alt="js"></Image>
            </div>
            <div className={styles.item}>
              <Image src={git} alt="git"></Image>
            </div>
            <div className={styles.item}>
              <Image src={figma} alt="figma"></Image>
            </div>
            <div className={styles.item}>
              <Image src={sass} alt="sass"></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
