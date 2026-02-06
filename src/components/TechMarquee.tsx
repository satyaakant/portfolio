import styles from './FunkyStyles.module.css';

const stack = [
    "React", "Next.js", "TypeScript", "Node.js", "Django", "Tailwind", "AWS", "Figma", "Git", "Google Maps API", "Redux", "GraphQL"
];

const TechMarquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {stack.map((tech, i) => (
                    <span key={i} className={styles.marqueeItem}>
                        {tech} <span>//</span>
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {stack.map((tech, i) => (
                    <span key={`dup-${i}`} className={styles.marqueeItem}>
                        {tech} <span>//</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
