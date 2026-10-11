"use client";

import { useSyncExternalStore } from "react";
import { themes, type ThemeId } from "@/data/themes";

const subscribe = (cb: () => void) => {
    const mo = new MutationObserver(cb);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
};
const read = () => (document.documentElement.dataset.theme as ThemeId) || "default";

/** The active seasonal theme (set on <html data-theme> by ThemeScript). */
export function useSiteTheme() {
    const id = useSyncExternalStore(subscribe, read, () => "default" as ThemeId);
    return { id, ...(themes[id] ?? themes.default) };
}
