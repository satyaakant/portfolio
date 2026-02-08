"use client";

import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import Projects from "@/components/Projects";
import { About, Contact } from "@/components/AboutContact";
import Philosophy from "@/components/Philosophy";
import Workflow from "@/components/Workflow";
import styles from "@/components/FunkyStyles.module.css";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor />
      <div className={styles.floatingShapes}>
        <div className={styles.shape} style={{ width: 300, height: 300, top: '10%', left: '-10%' }}></div>
        <div className={styles.shape} style={{ width: 200, height: 200, top: '40%', right: '-5%', animationDelay: '2s' }}></div>
        <div className={styles.shape} style={{ width: 150, height: 150, bottom: '20%', left: '10%', animationDelay: '4s' }}></div>
      </div>

      <section id="hero">
        <Hero />
      </section>
      <div style={{ transform: 'rotate(-2deg)', margin: '2rem 0', background: '#000', borderTop: '2px solid var(--theme-accent-1)', borderBottom: '2px solid var(--theme-accent-2)' }}>
        <TechMarquee />
      </div>

      <div id="about">
        <About />
      </div>

      <section id="philosophy">
        <Philosophy />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 className={`h2 text-gradient ${styles.glitch}`} data-text="SELECTED WORKS">SELECTED WORKS</h2>
      </div>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
