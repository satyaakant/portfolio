import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import styles from "@/components/Pages.module.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact — Satya Kant Mishra" };

export default function ContactPage() {
    return (
        <main className="page">
            <h1 className={`display ${styles.title}`}>Say hello</h1>
            <div className={styles.contactGrid}>
                <div className={styles.contactSide}>
                    <p className={styles.lede}>Got a brief, a half-baked idea or just want to talk shop? Drop a line.</p>
                    <a href={`mailto:${profile.email}`} className={`display ${styles.bigMail}`}>
                        {profile.email}
                    </a>
                    <div className={styles.tags}>
                        {profile.socials.map((s) => (
                            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="chip">
                                {s.label} ↗
                            </a>
                        ))}
                    </div>
                </div>
                <ContactForm />
            </div>
        </main>
    );
}
