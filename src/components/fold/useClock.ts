"use client";

import { useEffect, useState } from "react";

/** Live "HH:MM" — empty on the server so hydration never mismatches. */
export function useClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () =>
            setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
        tick();
        const id = setInterval(tick, 10_000);
        return () => clearInterval(id);
    }, []);

    return time;
}
