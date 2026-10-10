import type { Metadata } from "next";
import PageFooter from "@/components/PageFooter";
import Portrait from "@/components/Portrait";
import styles from "@/components/Pages.module.css";
import { education, experience, profile, skills } from "@/data/portfolio";
import { techLinks } from "@/lib/constants";

export const metadata: Metadata = { title: "About — Satya Kant Mishra" };

export default function ResumePage() {
    return (
        <main className="page">
            <div className={styles.aboutHead}>
                <Portrait className={styles.aboutAvatar} />
                <div>
                    <p className="mono">
                        {profile.role} — {profile.location}
                    </p>
                    <h1 className={`display ${styles.title}`}>About</h1>
                </div>
            </div>
            <div className={styles.intro}>
                {profile.intro.map((p) => (
                    <p key={p}>{p}</p>
                ))}
            </div>

            <section className={styles.block}>
                <h2 className="mono">Experience</h2>
                <ul className={styles.timeline}>
                    {experience.map((x) => (
                        <li key={x.company + x.role}>
                            <span className="mono">{x.year}</span>
                            <div>
                                <h3 className="display">{x.role}</h3>
                                <p className={styles.company}>{x.company}</p>
                                <p>{x.description}</p>
                                <div className={styles.tags}>
                                    {x.tech.map((t) => (
                                        <span key={t} className="chip">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.block}>
                <h2 className="mono">Education</h2>
                <ul className={styles.timeline}>
                    {education.map((e) => (
                        <li key={e.degree}>
                            <span className="mono">{e.year}</span>
                            <div>
                                <h3 className="display">{e.degree}</h3>
                                <p className={styles.company}>{e.institution}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.block}>
                <h2 className="mono">Toolkit</h2>
                <div className={styles.tags}>
                    {skills.map((s) =>
                        techLinks[s] ? (
                            <a key={s} href={techLinks[s]} target="_blank" rel="noopener noreferrer" className="chip">
                                {s}
                            </a>
                        ) : (
                            <span key={s} className="chip">
                                {s}
                            </span>
                        ),
                    )}
                </div>
            </section>

            <PageFooter />
        </main>
    );
}
