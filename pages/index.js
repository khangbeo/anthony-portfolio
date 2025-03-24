import ContainerBlock from "../components/ContainerBlock";
import userData from "@constants/data";
import Card from "@components/Card";
import BlogList from "@components/BlogList";
import posts from "@constants/blogs";

export default function Home() {
    return (
        <ContainerBlock>
            <div className="max-w-4xl mx-auto px-4">
                {/* Projects Section */}
                <section>
                    <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                        Featured Projects
                    </h1>
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
                </section>

                {/* Latest Blogs Section */}
                <section className="mt-20">
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
                </section>
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
