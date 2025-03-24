export default function BlogList({ posts, limit }) {
    return (
        <div className="space-y-12">
            {limit
                ? posts.slice(0, limit).map((post) => (
                      <div
                          key={post.slug}
                          className="group flex justify-between items-center transform transition-transform duration-200 hover:-translate-y-1"
                      >
                          <a
                              href={`/blog/${post.slug}`}
                              className="text-md lg:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                          >
                              {post.title}
                          </a>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {post.date}
                          </span>
                      </div>
                  ))
                : posts.map((post) => (
                      <div
                          key={post.slug}
                          className="group flex justify-between items-center transform transition-transform duration-200 hover:-translate-y-1"
                      >
                          <a
                              href={`/blog/${post.slug}`}
                              className="text-md lg:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                          >
                              {post.title}
                          </a>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {post.date}
                          </span>
                      </div>
                  ))}
        </div>
    );
}
