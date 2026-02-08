"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './HUD.module.css';

const HUD = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [time, setTime] = useState("");
    const [section, setSection] = useState("SEC_01 // SOURCE");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);

        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setSection(`SEC_${sections.indexOf(id) + 1} // ${id.toUpperCase()}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.hudContainer}>
            {/* Top Bar */}
            <div className={styles.topHud}>
                <div className={styles.systemInfo}>
                    <span className={styles.label}>SYS_STATUS:</span>
                    <span className={styles.value}>OPERATIONAL</span>
                </div>
                <div className={styles.clock}>
                    <span className={styles.label}>TIMESTAMP:</span>
                    <span className={styles.value}>{time}</span>
                </div>
            </div>

            {/* Side Indicators */}
            <div className={styles.leftHud}>
                <div className={styles.verticalText}>{section}</div>
            </div>

            {/* Bottom Progress */}
            <div className={styles.bottomHud}>
                <div className={styles.progressLabel}>LOAD_STATE</div>
                <div className={styles.progressBar}>
                    <motion.div className={styles.progressFill} style={{ scaleX }} />
                </div>
            </div>

            {/* Decorative Brackets */}
            <div className={`${styles.bracket} ${styles.topLeft}`}></div>
            <div className={`${styles.bracket} ${styles.topRight}`}></div>
            <div className={`${styles.bracket} ${styles.bottomLeft}`}></div>
            <div className={`${styles.bracket} ${styles.bottomRight}`}></div>
        </div>
    );
};

export default HUD;
