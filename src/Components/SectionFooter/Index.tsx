import style from "./styles.module.scss";
import Image from "next/image";
import Instragram from "../../Img/Insta.svg";
import Git from "../../Img/github.svg";
import Linkedin from "../../Img/icons8-linkedin.svg";
import Email from "../../Img/Email.png";
import Wpp from "../../Img/wpp.svg";

export default function Footer() {
  return (
    <>
      <section className={style.container}>
        <div>
          <div className={style.redes}>
            <Image src={Instragram} alt="Instragram"></Image>
          </div>
          <div className={style.redes}>
            <Image src={Git} alt="Git"></Image>
          </div>
          <div className={style.redes}>
            <Image src={Linkedin} alt="Linkedin"></Image>
          </div>
          <div className={style.redes}>
            <Image src={Email} alt="Email"></Image>
          </div>
          <div className={style.redes}>
            <Image src={Wpp} alt="Wpp"></Image>
          </div>
        </div>
      </section>
    </>
  );
}
