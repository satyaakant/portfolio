/**
 * Seasonal themes, picked from the visitor's local date:
 *   Dec – 10 Feb  → winter (snow)
 *   Jul – 15 Sep  → monsoon (rain)
 *   otherwise     → default (sky blue)
 *
 * Preview any theme with ?theme=winter (or monsoon, default).
 */

export type ThemeId = "default" | "winter" | "monsoon";
export type Effect = "none" | "snow" | "rain";

export const themes: Record<ThemeId, { label: string; effect: Effect; greeting?: string; note?: string; emoji?: string; color?: string }> = {
    default: { label: "Default", effect: "none" },
    winter: { label: "Winter", effect: "snow", greeting: "Winter mode", note: "Chai in one hand, code in the other", emoji: "❄️", color: "#7fb5e6" },
    monsoon: { label: "Monsoon", effect: "rain", greeting: "Monsoon mode", note: "Shipping through the rain", emoji: "🌧️", color: "#3d7ea6" },
};

export const themeIds = Object.keys(themes) as ThemeId[];

/**
 * Pure and self-contained (no outside references) — it's also serialised into an inline <head> script
 * so the theme is applied before first paint.
 */
export function resolveTheme(now: Date): ThemeId {
    const m = now.getMonth();
    const d = now.getDate();
    if (m === 11 || m === 0 || (m === 1 && d <= 10)) return "winter";
    if (m === 6 || m === 7 || (m === 8 && d <= 15)) return "monsoon";
    return "default";
}
