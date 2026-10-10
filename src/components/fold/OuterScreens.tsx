"use client";

import ContactForm from "@/components/ContactForm";
import Portrait from "@/components/Portrait";
import { profile, updates } from "@/data/portfolio";
import { LinkedInIcon, MailIcon } from "./Icons";
import styles from "./Fold.module.css";

const linkedIn = profile.socials.find((s) => s.label === "LinkedIn");

export function LockScreen({ time }: { time: string }) {
    return (
        <div className={styles.lock}>
            <Portrait className={styles.lockPhoto} />
            <div className={styles.lockTop}>
                <div className={`display ${styles.clock}`}>{time || " "}</div>
                <p className={styles.lockRole}>
                    {profile.role} · {profile.location}
                </p>
            </div>

            <ul className={styles.notes}>
                {updates.map((n) => (
                    <li key={n.title} className={styles.note}>
                        <span className={styles.noteIcon} style={{ background: n.color }}>
                            {n.image ? <img src={n.image} alt="" /> : null}
                        </span>
                        <span className={styles.noteText}>
                            <strong>{n.title}</strong>
                            <span className="mono">
                                {n.meta} · {n.time}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>

            <div className={styles.lockBar}>
                {linkedIn ? (
                    <a href={linkedIn.href} target="_blank" rel="noopener noreferrer" className={styles.round} aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                ) : (
                    <span />
                )}
                <span className={styles.hint}>Scroll to unfold</span>
                <a href={`mailto:${profile.email}`} className={styles.round} aria-label="Email">
                    <MailIcon />
                </a>
            </div>
        </div>
    );
}

export function ContactScreen() {
    return (
        <div className={styles.contact}>
            <div className={styles.contactTop}>
                <div className={`display ${styles.contactTitle}`}>Say hello</div>
                <p>Got a project in mind? Drop a line.</p>
            </div>
            <ContactForm className={styles.deviceForm} />
            <a href={`mailto:${profile.email}`} className={`mono ${styles.contactMail}`}>
                {profile.email}
            </a>
        </div>
    );
}
