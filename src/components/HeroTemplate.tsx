import { useEffect } from "react";
import styles from "../XmasLanding.module.css";

import sendLogo from '../assets/send_logo_wt'; 


export default function HeroTemplate() {
  useEffect(() => {
    // ----- PARTICLES -----
    const container = document.getElementById("particles");
    if (container) {
      for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = styles.particle;
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 15 + Math.random() * 20 + "s";
        p.style.animationDelay = Math.random() * 15 + "s";
        container.appendChild(p);
      }

      for (let i = 0; i < 20; i++) {
        const s = document.createElement("div");
        s.className = styles.snowflake;
        s.textContent = "❄";
        s.style.left = Math.random() * 100 + "%";
        s.style.animationDuration = 12.5 + Math.random() * 18.75 + "s";
        s.style.animationDelay = Math.random() * 10 + "s";
        s.style.fontSize = 0.5 + Math.random() * 1 + "rem";
        s.style.opacity = 0.2 + Math.random() * 0.4;
        container.appendChild(s);
      }
    }

    // ----- COUNTDOWN -----
    const target = new Date("December 25, 2025 18:00:00").getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      if (diff <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(id =>
          set(id, "00")
        );
        return;
      }

      set("days", String(Math.floor(diff / 86400000)).padStart(2, "0"));
      set("hours", String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"));
      set("minutes", String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"));
      set("seconds", String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"));
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles["grid-bg"]} />
      <div id="particles" className={styles.particles} />

      {/* ----- HEADER ----- */}
      <header className={styles.header} id="header">
        <a href="#hero" className={styles.logo}>
          {/*   */}
        </a>

        <nav id="nav" className={styles.nav}>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#events">Contact</a>
          <a href="#traditions">Team</a>
          <a href="#newsletter" className={styles["nav-cta"]}>Subscribe</a>
        </nav>

        <div className={styles["nav-toggle"]} id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* ----- HERO SECTION ----- */}
      <section id="hero" className={styles.hero}>
        <div className={styles["hero-badge"]}>
          <span className={styles.dot} />
          Live Countdown Active
        </div>

        <h1>
          {/* Christmas <br /> */}
          <Image src={sendLogo} height={50} width={50} alt="logo" ></Image>
          {/* <span className={styles.gradient}>Countdown</span> */}
        </h1>

        {/* TODO Add in the Send Logo here  */}

        <p className={styles["hero-subtitle"]}>
          Every second brings us closer to the most magical celebration of the year
        </p>

        <div className={styles["countdown-wrapper"]}>
          <div className={styles.countdown}>
            {["days", "hours", "minutes", "seconds"].map(label => (
              <div key={label} className={styles["countdown-item"]}>
                <span id={label} className={styles["countdown-number"]}>00</span>
                <span className={styles["countdown-label"]}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
