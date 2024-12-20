// components/ToggleSwitchDarkMode.js

'use client'; // Add this line to mark the component as a client component

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // Load the theme from localStorage or default to light
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Toggle dark mode and save the preference
    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button onClick={toggleTheme} className="rounded-full bg-dark dark:bg-light w-9 aspect-square flex dark:border-dark border-light border-2 transition-colors duration-300">
            <span className="rounded-full bg-light dark:bg-dark w-5 aspect-square flex m-auto transition-colors duration-300"></span>
        </button>
    );
};

export default ThemeToggle;
