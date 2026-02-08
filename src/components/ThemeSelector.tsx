"use client";

import { useTheme } from './ThemeProvider';
import styles from './ThemeSelector.module.css';
import { motion } from 'framer-motion';

const ThemeSelector = () => {
    const { activeTheme, setTheme, availableThemes } = useTheme();

    return (
        <div className={styles.container}>
            <div className={styles.label}>PALETTE_SELECT</div>
            <div className={styles.options}>
                {availableThemes.map((t) => (
                    <motion.button
                        key={t}
                        className={`${styles.swatch} ${activeTheme === t ? styles.active : ''}`}
                        onClick={() => setTheme(t)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title={t.toUpperCase()}
                        style={{ backgroundColor: `var(--theme-accent-1)` }} // This will reflect current theme in a cool way or we can hardcode for distinction
                    >
                        {activeTheme === t && <motion.div layoutId="active" className={styles.indicator} />}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSelector;
