import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 pt-4 pb-10">
            <div className="flex md:flex-row justify-center md:justify-between items-center">
                {/* Logo / Home / Text */}

                <div className="flex items-center">
                    <Link href="/" className="m-4" rel="noopener noreferrer">
                        <Image
                            src={userData.avatarUrl}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <div className="text-shadow">
                        <h1 className="font-semibold text-xl dark:text-gray-100">
                            {userData.name}
                        </h1>
                        <p className="text-base font-light text-gray-500 dark:text-gray-300">
                            {userData.designation}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="space-x-8 hidden md:block text-xl">
                        <Link
                            href="/about"
                            rel="noopener noreferrer"
                            className={`hover-underline-animation ${
                                router.asPath === "/about"
                                    ? "text-gray-800 font-bold dark:text-gray-400"
                                    : "text-gray-600 dark:text-gray-300 font-normal"
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            rel="noopener noreferrer"
                            className={`hover-underline-animation ${
                                router.asPath === "/projects"
                                    ? "text-gray-800 font-bold dark:text-gray-400"
                                    : "text-gray-600 dark:text-gray-300 font-normal"
                            }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            rel="noopener noreferrer"
                            className={`hover-underline-animation ${
                                router.asPath === "/contact"
                                    ? "text-gray-800 font-bold dark:text-gray-400"
                                    : "text-gray-600 dark:text-gray-300 font-normal"
                            }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href={userData.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover-underline-animation ${
                                router.asPath === `${userData.resumeUrl}`
                                    ? "text-gray-800 font-bold dark:text-gray-400"
                                    : "text-gray-600 dark:text-gray-300 font-normal"
                            }`}
                        >
                            Resume
                        </Link>
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="w-15 h-15 p-3 rounded focus:outline-none"
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-yellow-500 dark:text-yellow-500"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile-navbar */}
            <div className="space-x-6 sm:space-x-9 text-center md:hidden mt-4">
                <Link
                    href="/about"
                    className="text-base font-normal"
                    rel="noopener noreferrer"
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    className="text-base font-normal"
                    rel="noopener noreferrer"
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className="text-base font-normal"
                    rel="noopener noreferrer"
                >
                    Contact
                </Link>
                <Link
                    href={userData.resumeUrl}
                    className="text-base font-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 fixed top-2 right-2 p-3 rounded focus:outline-none"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    {mounted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-6 h-6 text-yellow-500 dark:text-yellow-500"
                        >
                            {theme === "dark" ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            )}
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
