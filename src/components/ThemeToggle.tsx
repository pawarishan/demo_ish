"use client";

import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ width: 40, height: 40 }} />; // Placeholder to prevent layout shift
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle btn-icon"
            aria-label="Toggle theme"
            title={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className={`icon-container ${resolvedTheme === 'dark' ? 'is-dark' : ''}`}>
                {/* Sun Icon for Light Mode */}
                <svg
                    className="sun-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>

                {/* Moon Icon for Dark Mode */}
                <svg
                    className="moon-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </div>

            <style jsx>{`
                .theme-toggle {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    color: var(--color-text);
                    transition: background-color 0.3s ease, color 0.3s ease;
                    overflow: hidden;
                    position: relative;
                }

                .theme-toggle:hover {
                    background-color: var(--color-background-alt);
                    color: var(--color-primary);
                }

                .icon-container {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sun-icon, .moon-icon {
                    position: absolute;
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                /* Default state (Light Mode) */
                .sun-icon {
                    transform: scale(1) rotate(0deg);
                    opacity: 1;
                }
                .moon-icon {
                    transform: scale(0) rotate(90deg);
                    opacity: 0;
                }

                /* Dark Mode state */
                .is-dark .sun-icon {
                    transform: scale(0) rotate(-90deg);
                    opacity: 0;
                }
                .is-dark .moon-icon {
                    transform: scale(1) rotate(0deg);
                    opacity: 1;
                }
            `}</style>
        </button>
    );
}
