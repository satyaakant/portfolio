"use client";

import React from 'react';
import styles from './DossierLayout.module.css';
import { motion } from 'framer-motion';

const DossierLayout = ({ children, title, sector }: { children: React.ReactNode, title: string, sector: string }) => {
    return (
        <div className={styles.dossierWrapper}>
            <div className={styles.gridBackground}></div>

            <div className={styles.frame}>
                <div className={styles.header}>
                    <div className={styles.sectorInfo}>
                        <span className={styles.label}>SECTOR:</span>
                        <span className={styles.value}>{sector}</span>
                    </div>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {title}
                    </motion.h1>
                    <div className={styles.protocol}>PROTOCOL_ACCESS: GRANTED</div>
                </div>

                <div className={styles.content}>
                    {children}
                </div>

                {/* Decorative Brackets */}
                <div className={`${styles.bracket} ${styles.tl}`}></div>
                <div className={`${styles.bracket} ${styles.tr}`}></div>
                <div className={`${styles.bracket} ${styles.bl}`}></div>
                <div className={`${styles.bracket} ${styles.br}`}></div>
            </div>
        </div>
    );
};

export default DossierLayout;
