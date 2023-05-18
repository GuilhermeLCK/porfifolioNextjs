import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollY / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <button className={styles.button}>
          <a href="#sobre">Sobre</a>
        </button>
        <button className={styles.button}>Conhecimento</button>
        <button className={styles.button}>Projetos</button>
        <button className={styles.button}>Contato</button>
      </header>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      >
        <div className={styles.progressIndicator}></div>
      </div>
    </>
  );
}
