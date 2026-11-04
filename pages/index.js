import { motion } from "framer-motion";
import ContainerBlock from "../components/layout/ContainerBlock";
import userData from "@constants/data";
import Card from "@components/ui/Card";
import BlogList from "@components/common/BlogList";
import SectionHeading from "@components/common/SectionHeading";
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
            <div className="mx-auto max-w-4xl px-4">
                {/* Hero Section */}
                <Hero />

                {/* Projects Section */}
                <motion.section {...fadeUpOnScroll}>
                    <SectionHeading
                        title="Featured Projects"
                        description="Things I have built to make support work better, plus earlier web projects."
                    />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {userData.projects.slice(0, 2).map((project, idx) => (
                            <Card key={idx} {...project} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <a
                            href="/projects"
                            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
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
                <motion.section className="mt-24" {...fadeUpOnScroll}>
                    <SectionHeading title="Latest Blogs" />
                    <BlogList posts={posts} limit={3} />
                    <div className="mt-10 text-center">
                        <a
                            href="/blog"
                            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
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
