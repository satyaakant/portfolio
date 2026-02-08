"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PatternRecall from './PatternRecall';
import styles from './Preloader.module.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [showGame, setShowGame] = useState(false);
    const [status, setStatus] = useState("SYNCING_ARCHIVE");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGame(true);
            setStatus("NEURAL_SYNC_REQUIRED");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleComplete = () => {
        setStatus("ACCESS_GRANTED");
        setTimeout(() => setLoading(false), 1000);
    };

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
                        </div>

                        <AnimatePresence mode="wait">
                            {showGame ? (
                                <motion.div
                                    key="game"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={styles.gameContent}
                                >
                                    <PatternRecall onComplete={handleComplete} />

                                    <motion.button
                                        className={styles.bypassBtn}
                                        onClick={handleComplete}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        [ BYPASS_AUTHENTICATION ]
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="sync"
                                    className={styles.syncing}
                                    exit={{ opacity: 0 }}
                                >
                                    [ SCANNING_DNA_SEQUENCE... ]
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className={styles.metaRow}>
                            <span>V.1.0.4_BETA</span>
                            <span>SECURE_ACCESS_REQUIRED</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
