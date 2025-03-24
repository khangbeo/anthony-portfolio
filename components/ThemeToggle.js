import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(mounted);
    };

    return (
        <button
            onClick={handleThemeChange}
            className="p-2 rounded-md text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
            {mounted &&
                (theme === "dark" ? (
                    <FiSun className="w-5 h-5" />
                ) : (
                    <FiMoon className="w-5 h-5" />
                ))}
        </button>
    );
}
