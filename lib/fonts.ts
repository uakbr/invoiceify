// Next Google Fonts with better error handling and fallbacks
import {
    Alex_Brush,
    Dancing_Script,
    Great_Vibes,
    Outfit,
    Parisienne,
} from "next/font/google";

// Default Fonts
export const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
    fallback: ['system-ui', 'arial'],
});

// Signature fonts
export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-dancing-script",
    display: "swap",
    fallback: ['cursive', 'system-ui'],
    adjustFontFallback: true,
    preload: false,
});

export const parisienne = Parisienne({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-parisienne",
    display: "swap",
    fallback: ['cursive', 'system-ui'],
    adjustFontFallback: true,
    preload: false,
});

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-great-vibes",
    display: "swap",
    fallback: ['cursive', 'system-ui'],
    adjustFontFallback: true,
    preload: false,
});

export const alexBrush = Alex_Brush({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-alex-brush",
    display: "swap",
    fallback: ['cursive', 'system-ui'],
    adjustFontFallback: true,
    preload: false,
});
