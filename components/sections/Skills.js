import { motion } from "framer-motion";
import userData from "@constants/data";

export default function Skills() {
    return (
        <motion.section
            className="mt-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Skills
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Support engineering first, with data engineering training and
                web development alongside.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {userData.skills.map((skillGroup, idx) => (
                    <div key={idx}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            {skillGroup.group}
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            {skillGroup.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
