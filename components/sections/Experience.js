import { motion } from "framer-motion";
import userData from "@constants/data";
import SectionHeading from "../common/SectionHeading";

export default function Experience() {
    return (
        <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SectionHeading
                title="Experience"
                description="Support roles across fintech, call tracking SaaS, and high-volume customer service."
            />
            <div className="mx-auto max-w-3xl">
                {userData.experience.map((job, idx) => (
                    <article
                        key={idx}
                        className={
                            idx === 0
                                ? ""
                                : "mt-10 border-t border-gray-200 pt-10 dark:border-white/10"
                        }
                    >
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            {job.company}
                        </p>
                        <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {job.role}
                        </h3>
                        <p className="mt-1 font-medium text-gray-500 dark:text-gray-400">
                            {job.title}
                        </p>
                        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                            {job.description}
                        </p>
                    </article>
                ))}
            </div>
        </motion.section>
    );
}
