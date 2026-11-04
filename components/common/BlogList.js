export default function BlogList({ posts, limit }) {
    const visiblePosts = limit ? posts.slice(0, limit) : posts;
    return (
        <div className="space-y-4">
            {visiblePosts.map((post) => (
                <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-[#18181b] dark:shadow-none dark:hover:border-white/20"
                >
                    <span className="text-base font-medium text-gray-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 lg:text-lg">
                        {post.title}
                    </span>
                    <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                    </span>
                </a>
            ))}
        </div>
    );
}
