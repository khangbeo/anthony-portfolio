import BlogList from "./BlogList";
import posts from "@constants/blogs";

export default function Blog() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Latest Blogs
            </h1>
            <BlogList posts={posts} />
        </div>
    );
}
