import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'Befin',
        category: 'Finance Web App',
        image: '/assets/images/project-1.jpg',
        link: 'https://www.thebefin.com/',
    },
    {
        id: 2,
        title: 'Commhawk',
        category: 'Communication Tech',
        image: '/assets/images/project-2.png',
        link: 'https://commhawk.in/',
    },
    {
        id: 3,
        title: 'ERP System',
        category: 'Enterprise Resource Planning',
        image: '/assets/images/project-3.jpg',
        link: 'https://maytri.netlify.app/login',
    },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className="container">
                <h2 className={`h2 ${styles.sectionTitle} text-gradient`}>Featured Projects</h2>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id} target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.viewText}>View Project</span>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.category}>{project.category}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
