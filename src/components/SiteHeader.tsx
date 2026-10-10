"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";
import styles from "./SiteHeader.module.css";

const links = [
    { label: "Home", href: "/" },
    { label: "Archive", href: "/projects" },
    { label: "About", href: "/resume" },
    { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <Link href="/" className={`display ${styles.logo}`}>
                {profile.firstName} {profile.lastName}
                <sup>®</sup>
            </Link>
            <nav className={styles.nav} aria-label="Primary">
                {links.map((l) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={`${styles.link} ${pathname === l.href ? styles.active : ""}`}
                        aria-current={pathname === l.href ? "page" : undefined}
                    >
                        {l.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
