"use client";

import { ScrollReveal } from "./ScrollReveal";
import styles from "./Enrichment.module.css";

const Philosophy = () => {
    return (
        <section className={styles.philosophySection}>
            <div className="container">
                <ScrollReveal width="100%">
                    <div className={styles.terminalHeader}>
                        <span className={styles.sectorId}>SECTOR: 02 // ARCHITECT_MANIFESTO</span>
                        <h2 className={styles.manifestoTitle}>
                            I don't just write code. <br />
                            <span className={styles.highlight}>I craft experiences.</span>
                        </h2>
                        <div className={styles.protocolId}>PROTOCOL_V2.0.4 // ADHERENCE: 100%</div>
                    </div>
                </ScrollReveal>

                <div className={styles.principalsGrid}>
                    <ScrollReveal delay={0.2}>
                        <div className={styles.principal}>
                            <h3>01. Pixel Perfection</h3>
                            <p>Every pixel deserves a purpose. I obsess over the details so you don't have to.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4}>
                        <div className={styles.principal}>
                            <h3>02. Performance First</h3>
                            <p>Fast is a feature. I optimize for speed, accessibility, and SEO from day one.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.6}>
                        <div className={styles.principal}>
                            <h3>03. User Centric</h3>
                            <p>Technology serves humans, not the other way around. Empathy is my favorite tool.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
