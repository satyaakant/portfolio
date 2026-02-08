import Link from 'next/link';
import styles from './AboutContact.module.css';
import { techLinks } from '@/lib/constants';

const skills = [
    "Next.js", "React", "TypeScript", "Node.js",
    "HTML5", "CSS3", "Tailwind (Expert)", "Vanilla CSS",
    "Git", "REST APIs", "Django", "C++", "AWS EC2"
];

export const About = () => {
    return (
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
            <div className="container">
                <div className={styles.terminalHeader}>
                    <span className={styles.sectorId}>SECTOR: 01 // ARCHITECT_DOSSIER</span>
                    <h2 className="h2 text-gradient" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '3rem', fontWeight: '800', textTransform: 'uppercase' }}>Who Am I?</h2>
                </div>

                <div className={styles.aboutGrid}>

                    <div className={styles.imageStack}>
                        <div className={styles.neuralGrid}></div>
                        <div className={styles.scanline}></div>
                        <img
                            src="/assets/images/my-avatar.png"
                            alt="Satya"
                            className={styles.avatar}
                        />
                        <div className={styles.cornerMarker + " " + styles.tl}></div>
                        <div className={styles.cornerMarker + " " + styles.br}></div>
                    </div>

                    <div>
                        <p className={styles.text}>
                            I’m <span className={styles.highlightName}>Satya Kant Mishra</span>, a Co-Founder & Full Stack Developer who lives for the code.
                            I don't just build websites; I build digital experiences.
                        </p>
                        <p className={styles.text}>
                            From rapid prototyping to scalable architecture, I bridge the gap between "cool idea" and "shipped product".
                        </p>

                        <h3 className={styles.skillsTitle}>The Arsenal</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill) => {
                                const link = techLinks[skill];
                                return link ? (
                                    <a
                                        key={skill}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.skillTag}
                                        title={`Learn more about ${skill}`}
                                    >
                                        {skill}
                                    </a>
                                ) : (
                                    <span key={skill} className={styles.skillTag}>{skill}</span>
                                );
                            })}
                        </div>
                    </div>
                </div>            </div>
        </section>
    );
};

export const Contact = () => {
    return (
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
            <div className="container">
                <div className={styles.terminalHeader}>
                    <span className={styles.sectorId}>LINK_PROTOCOL: ESTABLISHING_COMMUNICATION</span>
                    <h2 className="h2 text-gradient" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '700' }}>Get In Touch</h2>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.contactCard}>
                        <p className={styles.text} style={{ textAlign: 'center' }}>
                            I'm currently available for freelance projects and full-time opportunities.
                            If you have a project that needs some creative touch, feel free to contact me.
                        </p>

                        <a href="mailto:satyakantmishra50@gmail.com" className={styles.contactEmail}>
                            satyakantmishra50@gmail.com
                        </a>

                        <div className={styles.socialSelect}>
                            {/* Add social icons if needed, or just keep it minimal */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
