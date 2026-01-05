import { useEffect } from "react";
// import styles from "../XmasLanding.module.css";

import styles from '../Styles/XmasLanding.module.css'; 
import sendLogo from '../assets/send_logo_wt.png'; 
import ContactFrom from '../components/ContactForm'; 


const CHRISTMAS_THEME = false; 
console.log('this is the christmas theme toggle \n', CHRISTMAS_THEME); 




export default function HeroTemplate() {
  useEffect(() => {
    // ----- PARTICLES -----
    if (CHRISTMAS_THEME) {
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
    }
  
    // ----- COUNTDOWN -----
    const target = new Date("December 25, 2026 18:00:00").getTime();
  
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
  
      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };
  
      if (diff <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(id => set(id, "00"));
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
          <a href="#contact">Contact</a>
          <a href="#team">Team</a>
          <a href="#newsletter" className={styles["nav-cta"]}>Register</a>
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

        
            <div class="target-date">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                December 25, 2025 at 6:00 PM
            </div>

        {/* Scroll Element */}
        
        <div class="scroll-indicator">
            <span>Scroll</span>
            <div class="line"></div>
        </div>

          {/* Add in the image section here  */}
          <section className={styles.about} id="about">
  <div className={styles["section-header"]}>
    <span className={styles["section-tag"]}>About Us</span>
    <h2 className={styles["section-title"]}>The Spirit of Christmas</h2>
    <p className={styles["section-subtitle"]}>
      Celebrating traditions, creating memories, and spreading joy
    </p>
  </div>

  <div className={styles["about-grid"]}>
    <div className={styles["about-image"]}>
      <div className={styles["about-image-stack"]}>
        <div className={`${styles["about-img-item"]} ${styles["img-1"]}`}>
          <img src="/images/christmas-pic-21.jpg" alt="Christmas Tree" />
        </div>
        <div className={`${styles["about-img-item"]} ${styles["img-2"]}`}>
          <img src="/images/christmas-pic-22.jpg" alt="Christmas Lights" />
        </div>
        <div className={`${styles["about-img-item"]} ${styles["img-3"]}`}>
          <img src="/images/christmas-pic-23.jpg" alt="Christmas Ornaments" />
        </div>
      </div>
    </div>

    <div className={styles["about-content"]}>
      <h3>
        A Time for <span>Wonder</span> & Celebration
      </h3>

      <p>
        Christmas is more than a holiday—it's a season of warmth, togetherness,
        and the simple joy of giving.
      </p>

      <p>
        Whether gathering with loved ones or finding peace in quiet moments, this
        season invites us to pause and reflect.
      </p>

      <div className={styles["about-features"]}>
        {[
          "Family Traditions",
          "Gift Giving",
          "Holiday Feasts",
          "Seasonal Music",
        ].map((text) => (
          <div key={text} className={styles["about-feature"]}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>






      </section>
    </>
  );
}
