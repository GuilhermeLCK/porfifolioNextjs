import style from "./style.module.scss";
import Image from "next/image";
import Cep from "../../Img/mobile (1).png";
import Personal from "../../Img/mobile (2).png";
import Rei from "../../Img/mobile (3).png";
import Portofolio from "../../Img/mobile (4).png";
import Js from "../../Img/jsBranco.png";
import React from "../../Img/reactBranco.png";
import Ts from "../../Img/tsBranco.png";
import Figa from "../../Img/figmaBranco.png";
import Sass from "../../Img/sassBranco.png";
import Git from "../../Img/github.svg";
import Site from "../../Img/site.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section className={style.section} id="projetos">
        <div className={style.h1}>
          <h1> Projetos</h1>
        </div>
        <div className={style.container}>
          <div className={style.containerLeft} data-aos="zoom-in-up">
            <div className={style.containerImagem}>
              <a href="https://typeform-rei.vercel.app/" target="_blank">
                <Image src={Rei} alt="Rei"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>Form O Rei Dos Sites</h1>
                <h2>Tecnologias Usadas</h2>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Logo-Icon"></Image>
                <Image src={Js} alt="Logo-Icon"></Image>
                <Image src={Sass} alt="Logo-Icon"></Image>
              </div>
              <div className={style.linkSite}>
                <button>
                  Código
                  <a
                    href="https://github.com/GuilhermeLCK/typeformRei"
                    target="_blank"
                  >
                    <Image src={Git} alt="git"></Image>
                  </a>
                </button>

                <button>
                  Live Demo
                  <a href="https://typeform-rei.vercel.app/" target="_blank">
                    <Image src={Site} alt="Site"></Image>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={style.containerRigth} data-aos="zoom-in-up">
            <div className={style.containerImagem}>
              <a
                href="https://personal-trainer-app-iota.vercel.app/"
                target="_blank"
              >
                <Image src={Personal} alt="Personal"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>André Personal</h1>
                <h2>Tecnologias Usadas</h2>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Icon-Logo"></Image>
                <Image src={Figa} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <button>
                  Código
                  <a
                    href="https://github.com/GuilhermeLCK/personalTrainerApp"
                    target="_blank"
                  >
                    {" "}
                    <Image src={Git} alt="git"></Image>
                  </a>
                </button>
                <button>
                  {" "}
                  Live Demo
                  <a
                    href="https://personal-trainer-app-iota.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <Image src={Site} alt="Site"></Image>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={style.containerLeft} data-aos="zoom-in-up">
            <div className={style.containerImagem}>
              <a href="https://app-cep-tan.vercel.app/" target="_blank">
                <Image src={Cep} alt="Cep"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>Buscador de CEP</h1>
                <h2>Tecnologias Usadas</h2>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Icon-Logo"></Image>
                <Image src={Js} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <button>
                  Código
                  <a
                    href="https://github.com/GuilhermeLCK/AppCep"
                    target="_blank"
                  >
                    <Image src={Git} alt="Icon-Logo"></Image>
                  </a>
                </button>
                <button>
                  {" "}
                  Live Demo
                  <a href="https://app-cep-tan.vercel.app/" target="_blank">
                    <Image src={Site} alt="Icon-Logo"></Image>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className={style.containerRigth} data-aos="zoom-in-up">
            <div className={style.containerImagem}>
              <a
                href="https://guilhermelck.github.io/MeuPortf-lio/"
                target="_blank"
              >
                <Image src={Portofolio} alt="Portofolio"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>Portfólio antigo</h1>
                <h2>Tecnologias Usadas</h2>
              </div>
              <div className={style.tech}>
                <Image src={Js} alt="Icon-Logo"></Image>
                <Image src={Figa} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <button>
                  Código
                  <a
                    href="https://github.com/GuilhermeLCK/MeuPortf-lio"
                    target="_blank"
                  >
                    <Image src={Git} alt="Icon-Logo"></Image>
                  </a>
                </button>
                <button>
                  Live Demo
                  <a
                    href="https://guilhermelck.github.io/MeuPortf-lio/"
                    target="_blank"
                  >
                    {" "}
                    <Image src={Site} alt="Icon-Logo"></Image>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
