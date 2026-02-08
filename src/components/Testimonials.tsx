"use client";

import { DraggableCard } from "./DraggableCard";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        name: "Aryan",
        company: "SUSTAIN MALL",
        text: "Satya was hired to create a corporate identity for our company, and we were extremely pleased with the work delivered. He has a wealth of experience and an exceptional ability to understand client needs.",
        avatar: "/assets/images/avatar-1.png",
        color: "#ff0055",
        rotate: -5
    },
    {
        name: "Value on Shore",
        company: "Client Project",
        text: "We approached Satya to develop a comprehensive business valuation model. His technical expertise and attention to detail resulted in a robust solution that exceeded our expectations.",
        avatar: "/assets/images/avatar-4.png",
        color: "#00ccff",
        rotate: 3
    },
    {
        name: "AVTech Services",
        company: "Technology Partner",
        text: "Satya's work on our web development projects has been outstanding. His ability to deliver high-quality solutions on time makes him a valuable partner for any technical project.",
        avatar: "/assets/images/avatar-1.png",
        color: "#00ff88",
        rotate: -3
    },
    {
        name: "Surbhi Kansal",
        company: "Freelance Client",
        text: "Satya delivered exceptional website development services. His professionalism and ability to translate our vision into a functional, beautiful site was impressive. Highly recommend!",
        avatar: "/assets/images/avatar-4.png",
        color: "#ffcc00",
        rotate: -2
    }
];

export const Testimonials = () => {
    return (
        <section className={styles.container} id="testimonials">
            <div className={styles.terminalHeader}>
                <span className={styles.sectorId}>SECTOR: 05 // NEURAL_FEEDBACK</span>
                <h2 className={styles.title}>Client Love <span className={styles.hint}>(Drag us!)</span></h2>
            </div>
            <div className={styles.scatterGrid}>
                <div className={styles.techGrid}></div>
                {testimonials.map((t, i) => (
                    <DraggableCard
                        key={i}
                        className={styles.card}
                        style={{
                            left: `${(i * 340 + 50)}px`,
                            top: `100px`,
                            rotate: `${t.rotate}deg`
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className={styles.inner}>
                            <div className={styles.cardHeader}>
                                <div className={styles.dot}></div>
                                <div className={styles.protocol}>DOSSIER_EXP_{i + 1}</div>
                            </div>
                            <p className={styles.quote}>"{t.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {t.name[0]}
                                </div>
                                <div className={styles.authorMeta}>
                                    <h4 className={styles.name}>{t.name}</h4>
                                    <small className={styles.company}>{t.company}</small>
                                </div>
                            </div>
                        </div>
                    </DraggableCard>
                ))}
            </div>
        </section>
    );
};
