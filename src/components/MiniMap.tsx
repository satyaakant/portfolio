"use client";

import { useEffect, useState } from 'react';
import styles from './MiniMap.module.css';

const sections = [
    { id: 'hero', label: '01' },
    { id: 'about', label: '02' },
    { id: 'philosophy', label: '03' },
    { id: 'workflow', label: '04' },
    { id: 'testimonials', label: '05' },
    { id: 'projects', label: '06' },
    { id: 'contact', label: '07' }
];

const MiniMap = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.mapContainer}>
            <div className={styles.mapHeader}>[ NAV_MAP ]</div>
            <div className={styles.nodes}>
                {sections.map((s) => (
                    <div
                        key={s.id}
                        className={`${styles.node} ${activeSection === s.id ? styles.active : ''}`}
                        onClick={() => scrollTo(s.id)}
                    >
                        <span className={styles.label}>{s.label}</span>
                        <div className={styles.line}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniMap;
