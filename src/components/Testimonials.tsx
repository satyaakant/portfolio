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
        name: "Aditya",
        company: "A.V Tech",
        text: "We approached Satya to develop the website for Trip and Roll, and we couldn't be happier with the results. His commitment to delivering high-quality work on time makes him an exceptional partner.",
        avatar: "/assets/images/avatar-4.png",
        color: "#00ccff",
        rotate: 5
    },
    {
        name: "Daniel Lewis",
        company: "Corporate Identity",
        text: "We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Highly recommended for any design projects.",
        avatar: "/assets/images/avatar-1.png", // Reuse
        color: "#ffcc00",
        rotate: -2
    }
];

export const Testimonials = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Client Love <span style={{ fontSize: '1rem' }}>(Drag us!)</span></h2>
            <div className={styles.scatterGrid}>
                {testimonials.map((t, i) => (
                    <DraggableCard
                        key={i}
                        className={styles.card}
                        initial={{ x: 0, y: 0, rotate: t.rotate }}
                    >
                        <div className={styles.tape}></div>
                        <div className={styles.inner} style={{ borderColor: t.color }}>
                            <p className={styles.quote}>"{t.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ background: t.color }}>
                                    {t.name[0]}
                                </div>
                                <div>
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
