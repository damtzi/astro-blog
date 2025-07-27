import { Moon, Sun } from 'lucide-react';
import { animate } from 'motion';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(
        'light'
    );

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setThemeState(isDarkMode ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const isDark =
            theme === 'dark' ||
            (theme === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    }, [theme]);

    const onClick = () => {
        setThemeState(theme === 'light' ? 'dark' : 'light');

        const moon = document.getElementById('moonIcon');
        const sun = document.getElementById('sunIcon');

        if (moon && sun) {
            animate([
                [moon, { y: 32 }],
                [sun, { y: -32 }, { at: '+0.5' }]
            ]);
        }
    };

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Toggle Theme"
            className="hover:cursor-pointer"
        >
            <motion.div
                whileTap={{
                    rotate: theme === 'light' ? 180 : -180
                }}
            >
                {theme === 'light' ? (
                    <Moon id="moonIcon" className="size-6" />
                ) : (
                    <Sun id="sunIcon" className="size-6" />
                )}
            </motion.div>
        </button>
    );
};
