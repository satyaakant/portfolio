"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { ScrollReveal } from "./ScrollReveal";

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "3b31ec38-086a-466b-a36b-05d4e94419b2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.currentTarget.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollReveal width="100%">
                    <h2 className={`h2 text-gradient ${styles.title}`}>Get In Touch</h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <form onSubmit={onSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
                            <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
                        </div>
                        <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>

                        <button type="submit" disabled={isSubmitting} className={styles.button}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {result && <p className={styles.result}>{result}</p>}
                    </form>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className={styles.socials}>
                        <a href="mailto:satyakantmishra50@gmail.com" className={styles.socialLink}>
                            <span>📧</span> Email
                        </a>
                        <a href="https://www.linkedin.com/in/satyakant-mishra-958847203/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span>💼</span> LinkedIn
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span>📸</span> Instagram
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section >
    );
}
