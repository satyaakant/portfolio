"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PatternRecall.module.css';

const PATTERN_LENGTH = 3;

const PatternRecall = ({ onComplete }: { onComplete: () => void }) => {
    const [targetPattern, setTargetPattern] = useState<number[]>([]);
    const [userPattern, setUserPattern] = useState<number[]>([]);
    const [gameState, setGameState] = useState<'IDLE' | 'FLASHING' | 'WAITING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [activeFlash, setActiveFlash] = useState<number | null>(null);

    const startSequence = useCallback(() => {
        const newPattern = Array.from({ length: PATTERN_LENGTH }, () => Math.floor(Math.random() * 9));
        setTargetPattern(newPattern);
        setUserPattern([]);
        setGameState('FLASHING');

        // Sequential flashing
        newPattern.forEach((nodeId, index) => {
            setTimeout(() => {
                setActiveFlash(nodeId);
                setTimeout(() => setActiveFlash(null), 600);

                if (index === newPattern.length - 1) {
                    setTimeout(() => setGameState('WAITING'), 1000);
                }
            }, index * 800 + 500);
        });
    }, []);

    useEffect(() => {
        startSequence();
    }, [startSequence]);

    const handleNodeClick = (id: number) => {
        if (gameState !== 'WAITING') return;

        const nextPattern = [...userPattern, id];
        setUserPattern(nextPattern);

        // Verification logic
        if (nextPattern.length === targetPattern.length) {
            const isCorrect = nextPattern.every((n, i) => n === targetPattern[i]);
            if (isCorrect) {
                setGameState('SUCCESS');
                setTimeout(onComplete, 1000);
            } else {
                setGameState('ERROR');
                setTimeout(startSequence, 1500);
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.statusBox}>
                {gameState === 'FLASHING' && "[ OBSERVE_PATTERN ]"}
                {gameState === 'WAITING' && "[ REPRODUCE_PATTERN ]"}
                {gameState === 'SUCCESS' && "[ SYNC_COMPLETE ]"}
                {gameState === 'ERROR' && "[ SYNC_FAILED_RETRYING ]"}
            </div>

            <div className={styles.grid}>
                {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`
                            ${styles.node} 
                            ${activeFlash === i ? styles.flash : ''} 
                            ${userPattern.includes(i) && gameState === 'WAITING' ? styles.active : ''}
                            ${targetPattern.includes(i) && gameState === 'SUCCESS' ? styles.success : ''}
                            ${gameState === 'ERROR' ? styles.error : ''}
                        `}
                        onClick={() => handleNodeClick(i)}
                        whileHover={gameState === 'WAITING' ? { scale: 1.1 } : {}}
                    />
                ))}
            </div>

            <div className={styles.progress}>
                {Array.from({ length: PATTERN_LENGTH }).map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.dot} ${i < userPattern.length ? styles.dotFilled : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PatternRecall;
