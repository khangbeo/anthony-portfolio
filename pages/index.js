import { motion } from "framer-motion";
import ContainerBlock from "../components/layout/ContainerBlock";
import userData from "@constants/data";
import Card from "@components/ui/Card";
import BlogList from "@components/common/BlogList";
import posts from "@constants/blogs";
import Hero from "@components/sections/Hero";
import Experience from "@components/sections/Experience";
import Skills from "@components/sections/Skills";

const fadeUpOnScroll = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
    return (
        <ContainerBlock>
            <div className="max-w-4xl mx-auto px-4">
                {/* Hero Section */}
                <Hero />

                {/* Projects Section */}
                <motion.section {...fadeUpOnScroll}>
                    <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                        Featured Projects
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
                        Things I have built to make support work better, plus
                        earlier web projects.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {userData.projects.slice(0, 3).map((project, idx) => (
                            <Card key={idx} {...project} />
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href="/projects"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                            View all projects →
                        </a>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <Experience />

                {/* Skills Section */}
                <Skills />

                {/* Latest Blogs Section */}
                <motion.section className="mt-20" {...fadeUpOnScroll}>
                    <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                        Latest Blogs
                    </h1>
                    <BlogList posts={posts} limit={3} />
                    <div className="mt-8 text-center">
                        <a
                            href="/blog"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                            Read More →
                        </a>
                    </div>
                </motion.section>
            </div>
        </ContainerBlock>
    );
}

// This ensures the page is statically generated
export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60, // Revalidate every 60 seconds
    };
}
