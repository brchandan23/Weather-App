import React from 'react';
import { useTheme } from './ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="toggle-icons">
                    <LightModeIcon className="sun-icon" />
                    <DarkModeIcon className="moon-icon" />
                </div>
                <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}></div>
            </div>
        </button>
    );
}
