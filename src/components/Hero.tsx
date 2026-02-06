"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.gridBackground}></div>

            <div className={styles.heroContent}>
                <motion.p
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hello, I&apos;m
                </motion.p>

                <motion.h1
                    className={`${styles.name} text-gradient`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Satya Kant Mishra
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <p className={styles.title}>Co-founder of SMTech</p>
                    <p className={styles.subtitle}>Web Developer & Tech Enthusiast</p>
                </motion.div>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Link href="#projects" className={styles.primaryBtn}>
                        View Projects
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
