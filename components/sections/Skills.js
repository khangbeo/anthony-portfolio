import { motion } from "framer-motion";
import userData from "@constants/data";
import SectionHeading from "../common/SectionHeading";

export default function Skills() {
    return (
        <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SectionHeading
                title="Skills"
                description="Support engineering first, with data engineering training and web development alongside."
            />
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                {userData.skills.map((skillGroup, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#18181b] dark:shadow-none"
                    >
                        <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                            {skillGroup.group}
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {skillGroup.items.map((item, itemIdx) => (
                                <li
                                    key={itemIdx}
                                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
