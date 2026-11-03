export default function Card({ ...projects }) {
    const { title, description, imgUrl, link, github, tags } = projects;
    const hasFooter = Boolean(link || github);
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#18181b] dark:shadow-none dark:hover:border-white/20">
            {imgUrl && (
                <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-56">
                    <img
                        src={imgUrl}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col p-6">
                <div className={hasFooter ? "pb-6" : ""}>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                    {tags && tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {hasFooter && (
                    <div className="mt-auto flex items-center gap-5 border-t border-gray-100 pt-5 dark:border-white/5">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Demo
                                <span className="ml-1 inline-block">↗</span>
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                            >
                                Code
                                <span className="ml-1 inline-block">↗</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
