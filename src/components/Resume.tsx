"use client";

import { ScrollReveal } from './ScrollReveal';
import styles from './Resume.module.css';
import { techLinks } from '@/lib/constants';

const education = [
    {
        institution: "JIMS Engineering Management Technical Campus",
        year: "2021 — 2025",
        degree: "B.Tech in Computer Science & Engineering"
    },
    {
        institution: "Shiksha Bharti Public School, Dwarka",
        year: "2021",
        degree: "12th Standard (CBSE)"
    },
    {
        institution: "Shiksha Bharti Public School, Dwarka",
        year: "2019",
        degree: "10th Standard (CBSE)"
    }
];

const experience = [
    {
        role: "Frontend Developer",
        company: "Navi Telematics Private Limited",
        year: "Feb 2025 — Present",
        description: "Built responsive web apps with Next.js/SSR. Implemented real-time Google Maps vehicle tracking. Deployed on AWS.",
        tech: ["Next.js", "SSR", "Google Maps", "AWS"]
    },
    {
        role: "Full Stack Developer",
        company: "Value on Shore",
        year: "Sep 2024 — Feb 2025",
        description: "Worked on on-shore client projects delivering high-quality web solutions.",
        tech: ["React", "Node.js", "Tailwind"]
    },
    {
        role: "Frontend Web Developer",
        company: "Av Tech and Services (IT)",
        year: "May 2024 — Present",
        description: "Developed optimized websites using React & Django. Collaborated with design teams to translate mockups into interactive user interfaces.",
        tech: ["React", "Django", "REST API", "Figma"]
    },
    {
        role: "Frontend Web Developer",
        company: "Sustain Mall",
        year: "Aug 2023 — Nov 2023",
        description: "Responsive website development using React and Bootstrap. Worked on REST API integration.",
        tech: ["React", "Bootstrap", "Git", "Figma"]
    },
    {
        role: "Freelance Frontend Web Developer",
        company: "Self-Employed",
        year: "2023 — Present",
        description: "Delivering responsive websites for various clients using modern web technologies.",
        tech: ["HTML/CSS", "React", "JavaScript"]
    }
];

const Resume = () => {
    return (
        <section id="resume" className={styles.resumeSection}>
            <div className="container">
                <ScrollReveal width="100%">
                    <h2 className={`h2 text-gradient ${styles.sectionTitle}`}>My Journey</h2>
                </ScrollReveal>

                <div className={styles.columns}>
                    {/* Education Column */}
                    <div className={styles.column}>
                        <ScrollReveal>
                            <h3 className={styles.columnTitle}>Education</h3>
                        </ScrollReveal>

                        <div className={styles.timeline}>
                            {education.map((item, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className={styles.timelineItem}>
                                        <span className={styles.year}>{item.year}</span>
                                        <h4 className={styles.itemTitle}>{item.institution}</h4>
                                        <p className={styles.itemSubtitle}>{item.degree}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className={styles.column}>
                        <ScrollReveal>
                            <h3 className={styles.columnTitle}>Experience</h3>
                        </ScrollReveal>

                        <div className={styles.timeline}>
                            {experience.map((item, index) => (
                                <ScrollReveal key={index} delay={index * 0.1 + 0.2}>
                                    <div className={styles.timelineItem}>
                                        <div className={styles.headerRow}>
                                            <h4 className={styles.itemTitle}>{item.role}</h4>
                                            <span className={styles.year}>{item.year}</span>
                                        </div>
                                        <p className={styles.company}>{item.company}</p>
                                        <p className={styles.description}>{item.description}</p>

                                        <div className={styles.techTags}>
                                            {item.tech.map(t => {
                                                const link = techLinks[t];
                                                return link ? (
                                                    <a
                                                        key={t}
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.tag}
                                                        title={`Learn more about ${t}`}
                                                    >
                                                        {t}
                                                    </a>
                                                ) : (
                                                    <span key={t} className={styles.tag}>{t}</span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
