import { motion } from "framer-motion";
import userData from "@constants/data";

export default function Experience() {
    return (
        <motion.section
            className="mt-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Experience
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Support roles across fintech, call tracking SaaS, and
                high-volume customer service.
            </p>
            <div className="max-w-3xl mx-auto">
                {userData.experience.map((job, idx) => (
                    <div
                        key={idx}
                        className="relative pl-8 pb-10 last:pb-0 border-l-2 border-gray-200 dark:border-gray-700"
                    >
                        <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-400" />
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {job.company} — {job.role}
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                            {job.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
