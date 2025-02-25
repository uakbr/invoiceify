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

// Signature fonts with fallback strategy
export const dancingScript = (() => {
    try {
        return Dancing_Script({
            subsets: ["latin"],
            weight: "400",
            variable: "--font-dancing-script",
            display: "swap",
            fallback: ['cursive', 'system-ui'],
            adjustFontFallback: true,
            preload: false,
        });
    } catch (e) {
        console.warn('Failed to load Dancing Script from Google Fonts, using system fonts');
        return {
            className: '',
            style: { fontFamily: 'cursive' },
            variable: '--font-dancing-script'
        };
    }
})();

export const parisienne = (() => {
    try {
        return Parisienne({
            subsets: ["latin"],
            weight: "400",
            variable: "--font-parisienne",
            display: "swap",
            fallback: ['cursive', 'system-ui'],
            adjustFontFallback: true,
            preload: false,
        });
    } catch (e) {
        console.warn('Failed to load Parisienne from Google Fonts, using system fonts');
        return {
            className: '',
            style: { fontFamily: 'cursive' },
            variable: '--font-parisienne'
        };
    }
})();

export const greatVibes = (() => {
    try {
        return Great_Vibes({
            subsets: ["latin"],
            weight: "400",
            variable: "--font-great-vibes",
            display: "swap",
            fallback: ['cursive', 'system-ui'],
            adjustFontFallback: true,
            preload: false,
        });
    } catch (e) {
        console.warn('Failed to load Great Vibes from Google Fonts, using system fonts');
        return {
            className: '',
            style: { fontFamily: 'cursive' },
            variable: '--font-great-vibes'
        };
    }
})();

export const alexBrush = (() => {
    try {
        return Alex_Brush({
            subsets: ["latin"],
            weight: "400",
            variable: "--font-alex-brush",
            display: "swap",
            fallback: ['cursive', 'system-ui'],
            adjustFontFallback: true,
            preload: false,
        });
    } catch (e) {
        console.warn('Failed to load Alex Brush from Google Fonts, using system fonts');
        return {
            className: '',
            style: { fontFamily: 'cursive' },
            variable: '--font-alex-brush'
        };
    }
})();
