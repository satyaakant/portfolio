"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";
import ScreenContent from "./ScreenContent";
import { ContactScreen, LockScreen } from "./OuterScreens";
import { useClock } from "./useClock";
import styles from "./Fold.module.css";

type Mode = "h" | "v";
type Dims = { vw: number; vh: number; mode: Mode; W: number; H: number; R: number };

const BEZEL = 12;
const NAV = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "exploring", label: "Exploring" },
    { id: "services", label: "Services" },
];

function measure(vw: number, vh: number): Dims {
    // Wide screens fold like a book (vertical hinge), tall screens fold top-over-bottom.
    if (vw >= 820 && vw / vh > 0.9) {
        // Short screens (phones in landscape) get less breathing room around the device.
        let H = Math.min(vh - (vh < 600 ? 90 : 170), 760);
        let W = Math.min(H * 1.46, vw - 96);
        H = Math.min(H, W / 1.3);
        W = Math.min(W, H * 1.46);
        return { vw, vh, mode: "h", W, H, R: 38 };
    }
    const W = Math.min(vw - 24, 560);
    const H = Math.min(vh - 150, W * 1.9);
    return { vw, vh, mode: "v", W, H, R: 30 };
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const ease = (t: number) => t * t * (3 - 2 * t);

export default function FoldStage() {
    const [dims, setDims] = useState<Dims | null>(null);
    const [contentH, setContentH] = useState(0);
    const [face, setFace] = useState<"lock" | "contact">("lock");
    const [active, setActive] = useState("home");
    const contentRef = useRef<HTMLDivElement>(null);
    const time = useClock();

    useEffect(() => {
        let lastW = 0;
        let lastH = 0;
        const onResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            if (w === lastW) {
                // Height-only resizes on phones come from the address bar sliding in/out while scrolling,
                // or the keyboard opening — re-measuring then would make the page jump.
                const typing = document.activeElement?.matches("input, textarea");
                if (typing || Math.abs(h - lastH) < 160) return;
            }
            lastW = w;
            lastH = h;
            setDims(measure(w, h));
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setContentH(el.offsetHeight));
        ro.observe(el);
        return () => ro.disconnect();
    }, [dims]);

    // Scroll budget: unfold → scroll through the inner screen → fold back → hold.
    const screenH = dims ? dims.H - BEZEL * 2 : 0;
    const A = dims ? dims.vh * 0.9 : 1;
    const S = Math.max(0, contentH - screenH);
    const B = dims ? dims.vh * 0.9 : 1;
    const HOLD = dims ? dims.vh * 0.5 : 0;
    const stageHeight = dims ? A + S + B + HOLD + dims.vh : "100vh";

    const { scrollY } = useScroll();
    const u = useTransform(scrollY, (y) => {
        const t = y < A + S ? y / (A * 0.85) : 1 - (y - A - S) / (B * 0.85);
        return ease(clamp01(t));
    });
    const contentY = useTransform(scrollY, (y) => -Math.min(S, Math.max(0, y - A)));

    const W = dims?.W ?? 0;
    const H = dims?.H ?? 0;
    const horizontal = dims?.mode !== "v";

    const angle = useTransform(u, (v) => (horizontal ? 180 * (1 - v) : -180 * (1 - v)));
    const shift = useTransform(u, (v) => -(1 - v) * (horizontal ? W : H) / 4);
    const clip = useTransform(u, (v) => {
        // Keep the flap's half of the screen hidden until the flap has landed, then the screen "turns on".
        if (v >= 0.9) return "inset(0 0 0 0)";
        const r = (dims?.R ?? BEZEL) - BEZEL;
        return horizontal ? `inset(0 0 0 50% round ${r}px)` : `inset(50% 0 0 0 round ${r}px)`;
    });
    const overlay = useTransform(u, (v) => clamp01(1 - (v - 0.9) / 0.1));
    const flapEvents = useTransform(u, (v) => (v > 0.97 ? "none" : "auto"));
    const wordsOpacity = useTransform(u, (v) => clamp01(1 - v / 0.45));
    const wordsSpread = useTransform(u, (v) => v * 160);
    const wordsSpreadNeg = useTransform(wordsSpread, (v) => -v);
    const shadowScale = useTransform(u, (v) => 0.5 + v * 0.5);
    const shadowY = useTransform(u, (v) => (horizontal ? 0 : (v * H) / 4));
    // While folded, the fixed half hides behind the outer screen — round all its corners so none peek out.
    const halfRadius = useTransform(u, (v) => {
        const r = dims?.R ?? 0;
        if (v < 0.5) return `${r}px`;
        return horizontal ? `0 ${r}px ${r}px 0` : `0 0 ${r}px ${r}px`;
    });
    const glowScaleX = useTransform(u, (v) => (horizontal ? 0.5 + v * 0.5 : 1));
    const glowScaleY = useTransform(u, (v) => (horizontal ? 1 : 0.5 + v * 0.5));

    useMotionValueEvent(scrollY, "change", (y) => {
        setFace(y > A + S ? "contact" : "lock");
        const content = contentRef.current;
        if (!content) return;
        const pos = Math.min(S, Math.max(0, y - A)) + screenH * 0.4;
        let current = "home";
        content.querySelectorAll<HTMLElement>("[data-section]").forEach((s) => {
            if (s.offsetTop <= pos) current = s.dataset.section!;
        });
        setActive(current);
    });

    const goTo = useCallback(
        (id: string) => {
            const el = contentRef.current?.querySelector<HTMLElement>(`[data-section="${id}"]`);
            if (!el) return;
            window.scrollTo({ top: A + Math.min(S, el.offsetTop), behavior: "smooth" });
        },
        [A, S],
    );

    // Keep keyboard users in sync: focusing something inside the screen scrolls the page to it.
    const onFocus = (e: React.FocusEvent) => {
        const content = contentRef.current;
        if (!content || !content.contains(e.target)) return;
        const offset = (e.target as HTMLElement).getBoundingClientRect().top - content.getBoundingClientRect().top;
        const visibleTop = Math.min(S, Math.max(0, window.scrollY - A));
        if (offset < visibleTop + 40 || offset > visibleTop + screenH - 120) {
            window.scrollTo({ top: A + Math.min(S, Math.max(0, offset - screenH / 3)) });
        }
    };

    const wordSize = (word: string) => {
        if (!dims) return 0;
        if (horizontal) {
            const avail = (dims.vw - W / 2) / 2 - 56;
            return Math.min(avail / (word.length * 0.43), dims.vh * 0.34);
        }
        return Math.min((dims.vw - 32) / (word.length * 0.43), ((dims.vh - H / 2) / 2) * 0.8);
    };

    const halfStyle = (side: "a" | "b"): React.CSSProperties => {
        // a = flap side (left / top), b = fixed side (right / bottom)
        const r = dims?.R ?? 0;
        if (horizontal) {
            return side === "a"
                ? { left: 0, top: 0, width: W / 2, height: H, borderRadius: `${r}px 0 0 ${r}px` }
                : { left: W / 2, top: 0, width: W / 2, height: H, borderRadius: `0 ${r}px ${r}px 0` };
        }
        return side === "a"
            ? { left: 0, top: 0, width: W, height: H / 2, borderRadius: `${r}px ${r}px 0 0` }
            : { left: 0, top: H / 2, width: W, height: H / 2, borderRadius: `0 0 ${r}px ${r}px` };
    };

    const bezelInset = (side: "a" | "b") => {
        if (horizontal) return side === "a" ? "4px 0 4px 4px" : "4px 4px 4px 0";
        return side === "a" ? "4px 4px 0 4px" : "0 4px 4px 4px";
    };

    // Front of the flap is a hollow frame so the unfolded screen shows through it.
    const ringWidths = horizontal ? `${BEZEL - 4}px 0 ${BEZEL - 4}px ${BEZEL - 4}px` : `${BEZEL - 4}px ${BEZEL - 4}px 0 ${BEZEL - 4}px`;

    return (
        <section className={styles.stage} style={{ height: stageHeight }} aria-label={`${profile.fullName} portfolio`}>
            <div className={styles.sticky} style={{ visibility: dims ? "visible" : "hidden" }}>
                {dims && (
                    <>
                        <div className={`${styles.words} ${horizontal ? styles.wordsH : styles.wordsV}`} aria-hidden>
                            <motion.span
                                className="display"
                                style={{
                                    fontSize: wordSize(profile.firstName),
                                    opacity: wordsOpacity,
                                    ...(horizontal
                                        ? { right: `calc(50% + ${W / 4 + 16}px)`, x: wordsSpreadNeg }
                                        : { bottom: `calc(50% + ${H / 4 + 12}px)`, y: wordsSpreadNeg }),
                                }}
                            >
                                {profile.firstName}
                            </motion.span>
                            <motion.span
                                className="display"
                                style={{
                                    fontSize: wordSize(profile.lastName),
                                    opacity: wordsOpacity,
                                    ...(horizontal
                                        ? { left: `calc(50% + ${W / 4 + 16}px)`, x: wordsSpread, marginTop: "4vh" }
                                        : { top: `calc(50% + ${H / 4 + 12}px)`, y: wordsSpread }),
                                }}
                            >
                                {profile.lastName}
                            </motion.span>
                        </div>

                        <motion.div
                            className={styles.glow}
                            aria-hidden
                            style={{
                                width: W * 1.04,
                                height: H * 0.96,
                                marginLeft: (-W * 1.04) / 2,
                                marginTop: (-H * 0.96) / 2,
                                scaleX: glowScaleX,
                                scaleY: glowScaleY,
                            }}
                        />

                        <motion.div
                            className={styles.shadow}
                            style={{
                                width: horizontal ? W * 0.9 : W * 0.85,
                                top: `calc(50% + ${horizontal ? H / 2 : H / 4}px)`,
                                scaleX: horizontal ? shadowScale : 1,
                                y: shadowY,
                            }}
                        />

                        <motion.div
                            className={styles.intro}
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.div
                                className={styles.device}
                                style={{
                                    width: W,
                                    height: H,
                                    marginLeft: -W / 2,
                                    marginTop: -H / 2,
                                    x: horizontal ? shift : 0,
                                    y: horizontal ? 0 : shift,
                                }}
                                onFocus={onFocus}
                            >
                                <motion.div className={styles.half} style={{ ...halfStyle("b"), borderRadius: halfRadius }}>
                                    <div className={styles.bezel} style={{ inset: bezelInset("b") }} />
                                </motion.div>

                                <motion.div
                                    className={styles.screen}
                                    style={{ inset: BEZEL, borderRadius: dims.R - BEZEL, clipPath: clip, ["--screen-h" as string]: `${screenH}px` }}
                                    onScroll={(e) => (e.currentTarget.scrollTop = 0)}
                                >
                                    <div className={styles.statusBar} aria-hidden>
                                        <span>{time}</span>
                                        <span>5G ▮</span>
                                    </div>
                                    <motion.div ref={contentRef} className={styles.content} style={{ y: contentY }}>
                                        <ScreenContent onNavigate={goTo} />
                                    </motion.div>
                                    <nav className={styles.pill} aria-label="Sections">
                                        {NAV.map((n) => (
                                            <button
                                                key={n.id}
                                                className={active === n.id ? styles.pillActive : ""}
                                                onClick={() => goTo(n.id)}
                                            >
                                                {n.label}
                                            </button>
                                        ))}
                                    </nav>
                                </motion.div>

                                <motion.div
                                    className={styles.flap}
                                    style={{
                                        ...halfStyle("a"),
                                        borderRadius: 0,
                                        rotateY: horizontal ? angle : 0,
                                        rotateX: horizontal ? 0 : angle,
                                        transformOrigin: horizontal ? "right center" : "center bottom",
                                        pointerEvents: flapEvents,
                                    }}
                                >
                                    <div
                                        className={`${styles.face} ${styles.frontRing}`}
                                        style={{ borderRadius: halfStyle("a").borderRadius, borderWidth: bezelInset("a") }}
                                    >
                                        <div className={styles.ringBezel} style={{ borderWidth: ringWidths }}>
                                            <motion.div className={styles.innerShade} style={{ opacity: overlay }} />
                                        </div>
                                    </div>
                                    <div
                                        className={styles.face}
                                        style={{
                                            borderRadius: dims.R,
                                            transform: horizontal ? "rotateY(180deg)" : "rotateX(180deg)",
                                        }}
                                    >
                                        <div className={styles.bezel} style={{ inset: 4 }}>
                                            <div className={styles.outerScreen} style={{ inset: BEZEL - 4, borderRadius: dims.R - BEZEL }}>
                                                {face === "lock" ? <LockScreen time={time} /> : <ContactScreen />}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                    </>
                )}
            </div>
        </section>
    );
}
