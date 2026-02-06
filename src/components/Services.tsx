"use client";

import { ScrollReveal } from './ScrollReveal';
import styles from './Services.module.css';

const services = [
    {
        title: "Web Development",
        icon: "💻",
        description: "Building lightning-fast, responsive websites with Next.js and React. I turn complex problems into elegant code.",
        tags: ["Frontend", "Backend", "Performance"]
    },
    {
        title: "UI/UX Design",
        icon: "🎨",
        description: "Creating premium, user-centric designs that wow. From wireframes to high-fidelity interactive prototypes.",
        tags: ["Figma", "Prototyping", "Design Systems"]
    },
    {
        title: "Mentorship",
        icon: "🚀",
        description: "Guiding the next generation of developers. As a co-founder, I know what it takes to build and lead teams.",
        tags: ["Code Reviews", "Leadership", "Career Growth"]
    }
];

const Services = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <ScrollReveal width="100%">
                    <h2 className={`h2 text-gradient ${styles.sectionTitle}`}>What I Do</h2>
                </ScrollReveal>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                                <div className={styles.tags}>
                                    {service.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
