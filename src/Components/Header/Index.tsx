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
  // Header mobile

  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div
          className={`${active ? styles.iconActive : styles.icon}`}
          onClick={ToggleMode}
        >
          <div className={styles.hamburguer}></div>
        </div>
        <div className={`${active ? styles.menuOpen : styles.menuClose}`}>
          <button className={styles.button} onClick={() => setActive(false)}>
            <a href="#sobre">Sobre</a>
          </button>
          <button className={styles.button} onClick={() => setActive(false)}>
            Conhecimento
          </button>
          <button className={styles.button} onClick={() => setActive(false)}>
            Projetos
          </button>
          <button className={styles.button} onClick={() => setActive(false)}>
            Contato
          </button>
        </div>
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
