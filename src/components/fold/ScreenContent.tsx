import Link from "next/link";
import NdaChat from "@/components/NdaChat";
import Portrait from "@/components/Portrait";
import { exploring, profile, projects, services, stats, workedWith } from "@/data/portfolio";
import styles from "./Screen.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ScreenContent({ onNavigate }: { onNavigate: (id: string) => void }) {
    return (
        <div className={styles.root}>
            {/* Hero */}
            <section data-section="home" data-glow="#9db4ff" className={styles.hero}>
                <div className={styles.heroText}>
                    <p className="mono">
                        {profile.role} — {profile.location}
                    </p>
                    <div>
                        <h1 className={`display ${styles.heroName}`}>
                            {profile.firstName} {profile.lastName}
                        </h1>
                        <p className={styles.heroTag}>{profile.tagline}</p>
                        <div className={styles.heroCtas}>
                            <button className="btn btn-dark" onClick={() => onNavigate("work")}>
                                See the work ↗
                            </button>
                            <Link href="/contact" className="btn btn-light">
                                Say hello
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.heroArt}>
                    <Portrait />
                    <span className={`mono ${styles.available}`}>● Available for new work</span>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <p className="mono">The numbers so far</p>
                <div className={styles.statGrid}>
                    {stats.map((s) => (
                        <div key={s.label}>
                            <div className={`display ${styles.statValue}`}>{s.value}</div>
                            <div className={`mono ${styles.statLabel}`}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selected work */}
            <section data-section="work" className={styles.work}>
                <header className={styles.workHead}>
                    <h2 className={`display ${styles.sectionTitle}`}>Selected work</h2>
                    <Link href="/projects" className={styles.chipDark}>
                        All projects ↗
                    </Link>
                </header>
                {projects.map((p, i) => (
                    <article
                        key={p.title}
                        data-glow={p.color}
                        className={`${styles.project} ${i % 2 === 0 ? styles.imageRight : ""}`}
                        style={{ background: p.color, color: p.ink === "dark" ? "#0b0b0b" : "#fff" }}
                    >
                        <div className={styles.projectImg}>
                            <div className={styles.frame}>
                                <img src={p.image} alt={p.title} loading="lazy" />
                            </div>
                        </div>
                        <div className={styles.projectPanel}>
                            <div className={`display ${styles.projectNum}`}>{pad(i + 1)}</div>
                            <div>
                                <p className="mono">{p.genre}</p>
                                <h3 className={`display ${styles.projectTitle}`}>{p.title}</h3>
                                <p className={styles.projectSummary}>{p.summary}</p>
                                {p.highlights && (
                                    <ul className={styles.highlights}>
                                        {p.highlights.map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>
                                )}
                                {p.link ? (
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="mono">
                                        View project ↗
                                    </a>
                                ) : (
                                    <span className="mono">Private build · demo on request</span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
                <div className={styles.nda} data-glow="#3fb67a">
                    <div>
                        <h3 className={`display ${styles.ndaTitle}`}>And the rest?</h3>
                        <p className={styles.ndaText}>
                            A few of my favourite builds live behind NDAs. I asked nicely. Here&apos;s how that went.
                        </p>
                    </div>
                    <NdaChat />
                </div>
            </section>

            {/* Exploring */}
            <section data-section="exploring" data-glow={exploring[0]?.color ?? "#f2c230"} className={styles.exploring}>
                <header className={styles.exploreHead}>
                    <h2 className={`display ${styles.sectionTitle}`}>Currently exploring</h2>
                    <p className="mono">New genres I&apos;m digging into</p>
                </header>
                <div className={styles.exploreGrid}>
                    {exploring.map((e) => {
                        const Tag = e.link ? "a" : "div";
                        return (
                            <Tag
                                key={e.title}
                                {...(e.link ? { href: e.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                                className={styles.exploreCard}
                                style={{ background: e.color, color: e.ink === "dark" ? "#0b0b0b" : "#fff" }}
                            >
                                <div className={styles.exploreMeta}>
                                    <span className="mono">{e.genre}</span>
                                    <span className={`mono ${styles.status}`}>{e.status}</span>
                                </div>
                                <h3 className={`display ${styles.exploreTitle}`}>{e.title}</h3>
                                <p>{e.note}</p>
                                <span className="mono">Since {e.since}</span>
                            </Tag>
                        );
                    })}
                </div>
            </section>

            {/* Services + clients + CTA */}
            <section data-section="services" data-glow="#9db4ff" className={styles.services}>
                <p className="mono">What I do</p>
                <ol className={styles.serviceList}>
                    {services.map((s, i) => (
                        <li key={s.title}>
                            <span className="mono">{pad(i + 1)}</span>
                            <h3 className="display">{s.title}</h3>
                            <p>{s.body}</p>
                        </li>
                    ))}
                </ol>

                <p className="mono">Worked with</p>
                <ul className={styles.clients}>
                    {workedWith.map((c) => (
                        <li key={c}>{c}</li>
                    ))}
                </ul>

                <div className={styles.cta}>
                    <h3 className="display">Have an idea that needs shipping?</h3>
                    <Link href="/contact" className="btn btn-dark">
                        Start a project ↗
                    </Link>
                </div>
            </section>
        </div>
    );
}
