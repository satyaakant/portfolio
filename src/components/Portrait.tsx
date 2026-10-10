"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/portfolio";

const noop = () => () => {};
const isMorning = () => new Date().getHours() < 12;

/** Morning photo before 12 noon (visitor's local time), the other one after. Server render uses `later`. */
export function usePortrait() {
    const morning = useSyncExternalStore(noop, isMorning, () => false);
    return morning ? profile.photos.morning : profile.photos.later;
}

export default function Portrait({ className, alt = profile.fullName }: { className?: string; alt?: string }) {
    const photo = usePortrait();
    return <img src={photo.src} alt={alt} className={className} style={{ objectPosition: photo.focus }} />;
}
