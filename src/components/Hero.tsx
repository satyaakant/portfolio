"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.gridBackground}></div>

            <div className={styles.heroContent}>
                <motion.div
                    className={styles.statusLine}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>STATUS: INITIALIZING_ARCHITECT_CORE_V1.0</span>
                </motion.div>

                <motion.h1
                    className={`${styles.name} text-gradient`}
                    initial={{ opacity: 0, skewX: 10 }}
                    animate={{ opacity: 1, skewX: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    SATYA KANT MISHRA
                </motion.h1>

                <div className={styles.metaInfo}>
                    <motion.p
                        className={styles.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        &gt; CLASSIFICATION: FULL_STACK_ARCHITECT
                    </motion.p>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        &gt; LOCATION: NEW_DELHI // REMOTE_ACCESS_GRANTED
                    </motion.p>
                </div>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Link href="#projects" className={styles.primaryBtn}>
                        [ ACCESS_WORKS ]
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        [ ESTABLISH_LINK ]
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
