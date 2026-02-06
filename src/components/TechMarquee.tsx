import styles from './FunkyStyles.module.css';
import { techLinks } from '@/lib/constants';

const stack = [
    "React", "Next.js", "TypeScript", "Node.js", "Django", "Tailwind", "AWS", "Figma", "Git", "Google Maps API", "Redux", "GraphQL"
];

const TechMarquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {stack.map((tech, i) => {
                    const link = techLinks[tech];
                    return (
                        <span key={i} className={styles.marqueeItem}>
                            {link ? (
                                <a href={link} target="_blank" rel="noopener noreferrer" title={`Learn more about ${tech}`}>
                                    {tech}
                                </a>
                            ) : tech}
                            <span> //</span>
                        </span>
                    );
                })}
                {/* Duplicate for seamless loop */}
                {stack.map((tech, i) => {
                    const link = techLinks[tech];
                    return (
                        <span key={`dup-${i}`} className={styles.marqueeItem}>
                            {link ? (
                                <a href={link} target="_blank" rel="noopener noreferrer" title={`Learn more about ${tech}`}>
                                    {tech}
                                </a>
                            ) : tech}
                            <span> //</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default TechMarquee;
