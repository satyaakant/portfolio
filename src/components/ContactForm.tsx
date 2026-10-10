"use client";

import { useState } from "react";
import styles from "./Pages.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/** `className` swaps the page styling for a custom skin (e.g. the compact form on the folded phone). */
export default function ContactForm({ className }: { className?: string }) {
    const [status, setStatus] = useState<Status>("idle");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");

        const data = new FormData(form);
        data.append("access_key", "3b31ec38-086a-466b-a36b-05d4e94419b2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
            const result = await response.json();
            if (result.success) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <form className={className ?? styles.form} onSubmit={onSubmit}>
            <label>
                <span className="mono">Name</span>
                <input name="fullname" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
                <span className="mono">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
            </label>
            <label>
                <span className="mono">Message</span>
                <textarea name="message" rows={6} required placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message ↗"}
            </button>
            <p className={className ? undefined : styles.formStatus} role="status">
                {status === "sent" && "Thanks — your message is on its way."}
                {status === "error" && "Something went wrong. Try again or email me directly."}
            </p>
        </form>
    );
}
