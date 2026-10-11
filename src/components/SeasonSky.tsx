"use client";

import { useEffect, useRef } from "react";
import type { Effect } from "@/data/themes";
import { useSiteTheme } from "./useSiteTheme";

type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; c: string; t: number };

function spawn(effect: Effect, w: number, h: number, anywhere: boolean): P {
    const x = Math.random() * w;
    const y = anywhere ? Math.random() * h : 0;
    const t = Math.random() * Math.PI * 2;
    switch (effect) {
        case "snow":
            return { x, y: anywhere ? y : -10, r: 1.5 + Math.random() * 3, vx: 0, vy: 0.4 + Math.random() * 0.9, a: 0.5 + Math.random() * 0.4, c: "#9fb8d4", t };
        case "rain":
            return { x, y: anywhere ? y : -30, r: 10 + Math.random() * 14, vx: -1.2, vy: 7 + Math.random() * 5, a: 0.18 + Math.random() * 0.2, c: "#4f7fa6", t };
        default:
            return { x, y, r: 0, vx: 0, vy: 0, a: 0, c: "#000", t };
    }
}

/** Full-screen, click-through snow or rain for the seasonal theme. Nothing renders for the default theme. */
export default function SeasonSky() {
    const { effect } = useSiteTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || effect === "none") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        let particles: P[] = [];
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.min(110, Math.round((w * h) / (effect === "rain" ? 9000 : 14000)));
            particles = Array.from({ length: count }, () => spawn(effect, w, h, true));
        };
        resize();
        window.addEventListener("resize", resize);

        let raf = 0;
        const tick = () => {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.t += 0.02;
                p.x += p.vx + (effect === "snow" ? Math.sin(p.t) * 0.4 : 0);
                p.y += p.vy;

                ctx.globalAlpha = p.a;
                if (effect === "rain") {
                    ctx.strokeStyle = p.c;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.vx * 2.4, p.y + p.r);
                    ctx.stroke();
                } else {
                    ctx.fillStyle = p.c;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                }

                if (p.y > h + 40 || p.x < -100 || p.x > w + 100) particles[i] = spawn(effect, w, h, false);
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            ctx.clearRect(0, 0, w, h);
        };
    }, [effect]);

    if (effect === "none") return null;
    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
        />
    );
}
