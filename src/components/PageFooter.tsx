import Link from "next/link";
import { profile } from "@/data/portfolio";
import styles from "./Pages.module.css";

export default function PageFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerCta}>
                <h2 className="display">Have an idea that needs shipping?</h2>
                <Link href="/contact" className="btn btn-dark">
                    Start a project ↗
                </Link>
            </div>
            <div className={styles.footerMeta}>
                <a href={`mailto:${profile.email}`} className="mono">
                    {profile.email}
                </a>
                <div className={styles.footerLinks}>
                    {profile.socials.map((s) => (
                        <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="mono">
                            {s.label} ↗
                        </a>
                    ))}
                    <span className="mono">
                        © {new Date().getFullYear()} {profile.fullName}
                    </span>
                </div>
            </div>
        </footer>
    );
}
