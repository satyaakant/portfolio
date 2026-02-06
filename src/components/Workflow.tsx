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
            <div className="container">
                <ScrollReveal>
                    <h2 className={`h2 text-gradient ${styles.sectionHeader}`}>The Process</h2>
                </ScrollReveal>

                <div className={styles.workflowGrid}>
                    {steps.map((step, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepNum}>{step.num}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
