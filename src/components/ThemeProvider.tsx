"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemePalette = {
    name: string;
    accent1: string;
    accent2: string;
    glow: string;
    secondaryGlow: string;
};

const palettes: Record<string, ThemePalette> = {
    cyber: {
        name: "Cyber",
        accent1: "#00f3ff",
        accent2: "#bc13fe",
        glow: "rgba(0, 243, 255, 0.4)",
        secondaryGlow: "rgba(188, 19, 254, 0.4)"
    },
    amber: {
        name: "Amber",
        accent1: "#ffb000",
        accent2: "#ff4e00",
        glow: "rgba(255, 176, 0, 0.4)",
        secondaryGlow: "rgba(255, 78, 0, 0.4)"
    },
    emerald: {
        name: "Emerald",
        accent1: "#00ff8a",
        accent2: "#00b8ff",
        glow: "rgba(0, 255, 138, 0.4)",
        secondaryGlow: "rgba(0, 184, 255, 0.4)"
    },
    rose: {
        name: "Rose",
        accent1: "#ff007a",
        accent2: "#7a00ff",
        glow: "rgba(255, 0, 122, 0.4)",
        secondaryGlow: "rgba(122, 0, 255, 0.4)"
    }
};

type ThemeContextType = {
    activeTheme: string;
    setTheme: (name: string) => void;
    availableThemes: string[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTheme, setActiveTheme] = useState("cyber");

    useEffect(() => {
        const palette = palettes[activeTheme];
        const root = document.documentElement;
        root.style.setProperty('--theme-accent-1', palette.accent1);
        root.style.setProperty('--theme-accent-2', palette.accent2);
        root.style.setProperty('--theme-glow', palette.glow);
        root.style.setProperty('--theme-secondary-glow', palette.secondaryGlow);
    }, [activeTheme]);

    return (
        <ThemeContext.Provider value={{ activeTheme, setTheme: setActiveTheme, availableThemes: Object.keys(palettes) }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};
