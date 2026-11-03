export default function SectionHeading({ title, description }) {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            )}
        </div>
    );
}
