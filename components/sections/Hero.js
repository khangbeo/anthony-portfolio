import { motion } from "framer-motion";
import userData from "@constants/data";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    }),
};

export default function Hero() {
    return (
        <section className="relative py-20 md:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
            />
            <div className="relative">
                <motion.span
                    className="mb-7 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/25"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    {userData.designation}
                </motion.span>
                <motion.h1
                    className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white md:text-6xl"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                >
                    I solve the support cases other people get{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                        stuck on.
                    </span>
                </motion.h1>
                <motion.p
                    className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                >
                    {userData.hero.description}
                </motion.p>
                <motion.div
                    className="mt-10 flex flex-wrap gap-4"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                >
                    <a
                        href="/projects"
                        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-500"
                    >
                        View projects
                    </a>
                    <a
                        href={userData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={userData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                    >
                        GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
