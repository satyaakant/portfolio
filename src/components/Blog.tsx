"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';
import styles from './Blog.module.css';

const blogPosts = [
    {
        id: 1,
        title: "Data Types and Data Structures",
        category: "Tech",
        date: "Feb 23, 2022",
        description: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
        image: "/assets/images/blog-1.jpg",
        link: "https://www.notion.so/DATA-TYPES-AND-DATA-STRUCTURES-b601f43203ed402cb10eac012eb2fb19"
    },
    // Placeholder for potential future posts or restored ones
];

const Blog = () => {
    return (
        <section id="blog" className={styles.blogSection}>
            <div className="container">
                <ScrollReveal width="100%">
                    <h2 className={`h2 text-gradient ${styles.sectionTitle}`}>Latest Articles</h2>
                </ScrollReveal>

                <div className={styles.grid}>
                    {blogPosts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={index * 0.1}>
                            <Link href={post.link} target="_blank" className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className={styles.categoryBadge}>{post.category}</div>
                                </div>

                                <div className={styles.content}>
                                    <time className={styles.date}>{post.date}</time>
                                    <h3 className={styles.title}>{post.title}</h3>
                                    <p className={styles.description}>{post.description}</p>
                                    <span className={styles.readMore}>Read Article →</span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
