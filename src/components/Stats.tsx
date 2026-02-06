"use client";

import styles from "./Enrichment.module.css";

const stats = [
    { label: "Lines of Code", value: "100k+" },
    { label: "Projects Shipped", value: "25+" },
    { label: "Design Tools", value: "10" },
    { label: "Caffeine Level", value: "∞" },
];

const Stats = () => {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.statsGrid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statItem}>
                            <div className={styles.statValue} data-text={stat.value}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
