"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Dykun Volleyball</h1>
        <p className={styles.subtitle}>
          Youth volleyball training in Nanton & area
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>Book a Training</button>
          <button className={styles.secondary}>Contact Coach</button>
        </div>
      </div>
    </section>
  );
}
