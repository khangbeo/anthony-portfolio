import BlogList from "../common/BlogList";
import SectionHeading from "../common/SectionHeading";
import posts from "@constants/blogs";

export default function Blog() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <SectionHeading title="Latest Blogs" />
            <BlogList posts={posts} />
        </div>
    );
}
