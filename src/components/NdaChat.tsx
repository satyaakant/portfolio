"use client";

import { motion } from "framer-motion";
import { confidentialCount } from "@/data/portfolio";
import styles from "./NdaChat.module.css";

const messages = [
    { me: true, text: "Hey! That build turned out great. Mind if I put it in my portfolio? 🙏", time: "10:02" },
    { me: false, text: "Haha. No.", time: "10:03" },
    { me: false, text: "Legal says hi 👋", time: "10:03" },
    { me: true, text: "Can I at least show a blurred screenshot?", time: "10:04" },
    { me: false, text: "The blur is also confidential.", time: "10:04" },
    { me: true, text: "Fair.", time: "10:05" },
];

/** A tongue-in-cheek chat explaining the projects that can't be shown. Bubbles pop in as it scrolls into view. */
export default function NdaChat({ className }: { className?: string }) {
    if (confidentialCount <= 0) return null;

    return (
        <div className={`${styles.chat} ${className ?? ""}`}>
            <div className={styles.head}>
                <span className={styles.avatar} aria-hidden>
                    🔒
                </span>
                <div>
                    <strong>Client (under NDA)</strong>
                    <span>online</span>
                </div>
            </div>

            <div className={styles.body}>
                {messages.map((m, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.bubble} ${m.me ? styles.me : styles.them}`}
                        initial={{ opacity: 0, y: 14, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ delay: i * 0.35, duration: 0.3, ease: "easeOut" }}
                    >
                        {m.text}
                        <span className={styles.meta}>
                            {m.time}
                            {m.me && <span className={styles.ticks}>✓✓</span>}
                        </span>
                    </motion.div>
                ))}
                <motion.p
                    className={styles.system}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: messages.length * 0.35 + 0.2 }}
                >
                    🔒 {confidentialCount}+ more projects shipped under NDA
                </motion.p>
            </div>
        </div>
    );
}
