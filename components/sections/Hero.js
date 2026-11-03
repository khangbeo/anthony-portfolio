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
        <section className="py-16 md:py-24">
            <motion.span
                className="inline-block text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-6"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                {userData.designation}
            </motion.span>
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white max-w-3xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
            >
                I solve the support cases other people get{" "}
                <span className="text-blue-600 dark:text-blue-400">
                    stuck on.
                </span>
            </motion.h1>
            <motion.p
                className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
            >
                {userData.hero.description}
            </motion.p>
            <motion.div
                className="mt-8 flex flex-wrap gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
            >
                <a
                    href="/projects"
                    className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                    View projects
                </a>
                <a
                    href={userData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                    LinkedIn
                </a>
                <a
                    href={userData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                    GitHub
                </a>
            </motion.div>
        </section>
    );
}
