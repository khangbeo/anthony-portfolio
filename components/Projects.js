import userData from "@constants/data";
import Card from "./Card";

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userData.projects.map((project, idx) => (
                    <Card key={idx} {...project} />
                ))}
            </div>
        </div>
    );
}
