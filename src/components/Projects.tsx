"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'Befin',
        category: 'Finance Web App',
        image: '/assets/images/project-1.jpg',
        link: 'https://app.thebefin.com/login',
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
        link: 'https://maytri.netlify.app/',
    },
    {
        id: 4,
        title: 'Travel Site',
        category: 'Travel & Tourism',
        image: '/assets/images/project-4.png',
        link: 'https://tripnrolltravel.com/',
    },
];

const ProjectCard = ({ project }: { project: any }) => {
    const [traceId, setTraceId] = useState("");

    useEffect(() => {
        setTraceId(Math.random().toString(36).substr(2, 9).toUpperCase());
    }, []);

    return (
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.projectId}>PROJ_00{project.id}</div>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.scanOverlay}></div>
                <div className={styles.overlay}>
                    <span className={styles.viewText}>[ ACCESS_MODULE ]</span>
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.category}>&gt; {project.category.toUpperCase()}</p>
                <div className={styles.cardFooter}>
                    <span className={styles.status}>ONLINE</span>
                    <span className={styles.trace}>TRACE_ID: {traceId || "INITIALIZING..."}</span>
                </div>
            </div>
        </Link>
    );
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className="container">
                <h2 className={`h2 ${styles.sectionTitle} text-gradient`}>Featured Projects</h2>

                <div className={styles.sliderContainer}>
                    <button className={styles.sliderBtn} onClick={prev}>&lt;</button>

                    <div className={styles.cardWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, rotateY: 20 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: -50, rotateY: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                            >
                                <ProjectCard project={projects[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className={styles.sliderBtn} onClick={next}>&gt;</button>
                </div>

                <div className={styles.dots}>
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
