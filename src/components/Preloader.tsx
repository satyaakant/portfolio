"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("SYNCING_ARCHIVE");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        const statusInterval = setInterval(() => {
            const statuses = [
                "DECRYPTING_ASSETS",
                "LOCALIZING_COORDINATES",
                "ESTABLISHING_NEURAL_LINK",
                "INITIALIZING_HUD_V2",
                "READY"
            ];
            setStatus(statuses[Math.floor(progress / 20)] || "READY");
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
    }, [progress]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className={styles.preloader}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    <div className={styles.content}>
                        <motion.div
                            className={styles.glitchTitle}
                            animate={{ opacity: [1, 0.5, 1], x: [0, -2, 2, 0] }}
                            transition={{ repeat: Infinity, duration: 0.2 }}
                        >
                            ARCHITECT_CORE
                        </motion.div>

                        <div className={styles.statusRow}>
                            <span className={styles.status}>{status}</span>
                            <span className={styles.percentage}>{Math.min(progress, 100)}%</span>
                        </div>

                        <div className={styles.progressTrack}>
                            <motion.div
                                className={styles.progressFill}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className={styles.metaRow}>
                            <span>V.1.0.4_BETA</span>
                            <span>SECURE_ACCESS_GRANTED</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
