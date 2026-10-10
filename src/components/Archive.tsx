"use client";

import { useState } from "react";
import { exploring, genres, projects } from "@/data/portfolio";
import NdaChat from "./NdaChat";
import PageFooter from "./PageFooter";
import styles from "./Pages.module.css";

export default function Archive() {
    const [genre, setGenre] = useState<string | null>(null);
    const work = projects.filter((p) => !genre || p.genre === genre);
    const explore = exploring.filter((e) => !genre || e.genre === genre);

    return (
        <main className="page">
            <h1 className={`display ${styles.title}`}>Archive</h1>
            <p className={styles.lede}>
                Everything I&apos;ve shipped, and the genres I&apos;m exploring next. Filter by genre.
            </p>

            <div className={styles.filters} role="group" aria-label="Filter by genre">
                <button className={`chip ${!genre ? styles.chipOn : ""}`} aria-pressed={!genre} onClick={() => setGenre(null)}>
                    All <span className={styles.count}>{projects.length + exploring.length}</span>
                </button>
                {genres.map((g) => (
                    <button
                        key={g}
                        className={`chip ${genre === g ? styles.chipOn : ""}`}
                        aria-pressed={genre === g}
                        onClick={() => setGenre(genre === g ? null : g)}
                    >
                        {g}
                    </button>
                ))}
            </div>

            {work.length > 0 && (
                <section className={styles.block}>
                    <h2 className="mono">Projects · {work.length}</h2>
                    <div className={styles.grid}>
                        {work.map((p) => {
                            const Card = p.link ? "a" : "div";
                            return (
                                <Card
                                    key={p.title}
                                    {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className={styles.card}
                                    style={{ background: p.color, color: p.ink === "dark" ? "#0b0b0b" : "#fff" }}
                                >
                                    <div className={styles.cardImg}>
                                        <img src={p.image} alt={p.title} loading="lazy" />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className="mono">
                                            {p.genre}
                                            {p.year ? ` · ${p.year}` : ""}
                                        </span>
                                        <h3 className="display">{p.title}</h3>
                                        <p>{p.summary}</p>
                                        {p.highlights && (
                                            <ul className={styles.highlights}>
                                                {p.highlights.map((h) => (
                                                    <li key={h}>{h}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <span className={`mono ${styles.cardCta}`}>
                                            {p.link ? "View project ↗" : "Private build · demo on request"}
                                        </span>
                                    </div>
                                </Card>
                            );
                        })}
                        {!genre && <NdaChat className={styles.ndaCard} />}
                    </div>
                </section>
            )}

            {explore.length > 0 && (
                <section className={styles.block}>
                    <h2 className="mono">Exploring · {explore.length}</h2>
                    <ul className={styles.rows}>
                        {explore.map((e) => (
                            <li key={e.title}>
                                <span className={styles.dot} style={{ background: e.color }} />
                                <div>
                                    <h3 className="display">
                                        {e.link ? (
                                            <a href={e.link} target="_blank" rel="noopener noreferrer">
                                                {e.title} ↗
                                            </a>
                                        ) : (
                                            e.title
                                        )}
                                    </h3>
                                    <p>{e.note}</p>
                                </div>
                                <span className="mono">{e.genre}</span>
                                <span className={`mono ${styles.badge}`}>
                                    {e.status} · {e.since}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <PageFooter />
        </main>
    );
}
