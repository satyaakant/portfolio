"use client";

import { ScrollReveal } from "./ScrollReveal";
import styles from "./Enrichment.module.css";

const steps = [
    { num: "01", title: "Discovery", desc: "Understanding the vision, the audience, and the 'why'." },
    { num: "02", title: "Strategy", desc: "Planning the architecture, the stack, and the user journey." },
    { num: "03", title: "Development", desc: "Writing clean, scalable code. Turning coffee into components." },
    { num: "04", title: "Launch", desc: "Deployment, testing, and optimization. Liftoff." },
];

const Workflow = () => {
    return (
        <section className={styles.workflowSection}>
            <div className="container" id="workflow">
                <ScrollReveal width="100%">
                    <div className={styles.terminalHeader}>
                        <span className={styles.sectorId}>SECTOR: 04 // EXECUTION_PROCEDURE</span>
                        <h2 className="h2 text-gradient" style={{ textAlign: 'left', marginBottom: '1.5rem', fontWeight: '800' }}>MY WORKFLOW</h2>
                        <div className={styles.protocolId}>METHODOLOGY: AGILE_SCRUM_V3 // SYNC_FREQ: 24H_CYCLES</div>
                    </div>
                </ScrollReveal>

                <div className={styles.workflowGrid}>
                    {steps.map((step, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={styles.step}>
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepContent}>
                                    <h4 className={styles.stepTitle}>{step.title}</h4>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
