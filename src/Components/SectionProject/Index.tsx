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

export default function Project() {
  return (
    <>
      <section className={style.section}>
        <div className={style.h1}>
          <h1> Projetos</h1>
        </div>
        <div className={style.container}>
          <div className={style.containerLeft}>
            <div className={style.containerImagem}>
              <a href="https://typeform-rei.vercel.app/" target="_blank">
                <Image src={Rei} alt="Rei"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>Form O Rei Dos Sites</h1>
                <p>
                  O projeto consiste em um formulário dinâmico que se adapta às
                  respostas das perguntas, fornecendo um direcionamento mais
                  preciso para atender às necessidades no momento. Atualmente, a
                  fase de desenvolvimento do backend está em andamento
                </p>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Logo-Icon"></Image>
                <Image src={Js} alt="Logo-Icon"></Image>

                <Image src={Sass} alt="Logo-Icon"></Image>
              </div>
              <div className={style.linkSite}>
                <a
                  href="https://github.com/GuilhermeLCK/typeformRei"
                  target="_blank"
                >
                  {" "}
                  <Image src={Git} alt="git"></Image>
                </a>
                <a href="https://typeform-rei.vercel.app/" target="_blank">
                  {" "}
                  <Image src={Site} alt="Site"></Image>
                </a>
              </div>
            </div>
          </div>
          <div className={style.containerRigth}>
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
                <p>
                  Landing page feita para um personal, criada desde o seu layout
                  até o seu desenvolvimento, com o objetivo de captar clientes.
                </p>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Icon-Logo"></Image>
                <Image src={Figa} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <a
                  href="https://github.com/GuilhermeLCK/personalTrainerApp"
                  target="_blank"
                >
                  {" "}
                  <Image src={Git} alt="git"></Image>
                </a>
                <a
                  href="https://personal-trainer-app-iota.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  <Image src={Site} alt="Site"></Image>
                </a>
              </div>
            </div>
          </div>
          <div className={style.containerLeft}>
            <div className={style.containerImagem}>
              <a href="https://app-cep-tan.vercel.app/" target="_blank">
                <Image src={Cep} alt="Cep"></Image>
              </a>
            </div>
            <div className={style.containerDescription}>
              <div className={style.containerTitle}>
                <h1>Buscador de CEP</h1>
                <p>
                  Projeto realizado com a finalidade didática, consiste em um
                  buscador simples que utiliza a API via CEO.
                </p>
              </div>
              <div className={style.tech}>
                <Image src={React} alt="Icon-Logo"></Image>
                <Image src={Js} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <a
                  href="https://github.com/GuilhermeLCK/AppCep"
                  target="_blank"
                >
                  {" "}
                  <Image src={Git} alt="Icon-Logo"></Image>
                </a>
                <a href="https://app-cep-tan.vercel.app/" target="_blank">
                  <Image src={Site} alt="Icon-Logo"></Image>
                </a>
              </div>
            </div>
          </div>

          <div className={style.containerRigth}>
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
                <h1>Portfólio pessoal antigo</h1>
                <p>
                  Ao longo do meu percurso de estudos, tenho a convicção de que
                  meu portfólio evoluiu consideravelmente. Com base nas
                  habilidades e conhecimentos adquiridos até agora.
                </p>
              </div>
              <div className={style.tech}>
                <Image src={Js} alt="Icon-Logo"></Image>
                <Image src={Figa} alt="Icon-Logo"></Image>
                <Image src={Sass} alt="Icon-Logo"></Image>
              </div>
              <div className={style.linkSite}>
                <a
                  href="https://github.com/GuilhermeLCK/MeuPortf-lio"
                  target="_blank"
                >
                  <Image src={Git} alt="Icon-Logo"></Image>
                </a>
                <a
                  href="https://guilhermelck.github.io/MeuPortf-lio/"
                  target="_blank"
                >
                  {" "}
                  <Image src={Site} alt="Icon-Logo"></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
