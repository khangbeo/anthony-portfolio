export default function Card({ ...projects }) {
    const { title, description, imgUrl, link, github } = projects;
    return (
        <div className="group transform transition-all duration-200 hover:-translate-y-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl">
                <div className="aspect-square relative w-full h-80 lg:h-[200px] overflow-hidden">
                    <img
                        src={imgUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                </div>
                <div className="flex flex-col justify-between p-4 lg:h-[220px] bg-gray-100 rounded-b-lg">
                    <div className="text-gray-900">
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="mb-2">{description}</p>
                    </div>
                    <div className="flex space-x-2">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                            Demo
                            <span className="inline-block ml-1">↗</span>
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 transition-colors duration-200"
                        >
                            Code
                            <span className="inline-block ml-1">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
