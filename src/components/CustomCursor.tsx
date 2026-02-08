"use client";

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (isTouchDevice) return null;

    return (
        <div
            className={`${styles.cursor} ${isPointer ? styles.pointer : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
            <div className={styles.crosshair}>
                <div className={styles.ring1}></div>
                <div className={styles.ring2}></div>
                <div className={styles.dot}></div>
            </div>
            {isPointer && <div className={styles.label}>[ INTERACT ]</div>}
        </div>
    );
};

export default CustomCursor;
