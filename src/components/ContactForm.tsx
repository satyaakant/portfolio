"use client";

import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { ScrollReveal } from "./ScrollReveal";
import Swal from "sweetalert2";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = formData.fullname.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.message.trim() !== "";
        setIsFormValid(isValid);
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const data = new FormData(event.currentTarget);
        data.append("access_key", "3b31ec38-086a-466b-a36b-05d4e94419b2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    text: "Thank you! Your message has been successfully sent.",
                    confirmButtonText: "OK"
                });
                setFormData({ fullname: "", email: "", message: "" });
                event.currentTarget.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                    confirmButtonText: "OK"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Network error. Please check your connection and try again.",
                confirmButtonText: "OK"
            });
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
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full name"
                                required
                                className={styles.input}
                                value={formData.fullname}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                                className={styles.input}
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={styles.button}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
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
