import userData from "@constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
    faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
    const skills = [
        faJsSquare,
        faHtml5,
        faCss3Alt,
        faReact,
        faNodeJs,
        faBootstrap,
    ];
    return (
        <section className="px-4">
            <div className="mx-auto max-w-2xl">
                {userData.about.description?.map((desc, idx) => (
                    <p
                        key={idx}
                        className="text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl"
                    >
                        {desc}
                    </p>
                ))}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                        Currently working on
                    </h2>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20 transition-colors duration-200 hover:bg-blue-600 hover:text-white dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/25 dark:hover:bg-blue-500 dark:hover:text-white"
                        href={userData.about.currentProjectUrl}
                    >
                        {userData.about.currentProject}
                    </a>
                </div>
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                        Comfortable With
                    </h2>
                    <div className="mt-8 flex flex-row flex-wrap justify-center text-gray-700 dark:text-gray-300">
                        {skills.map((skill, index) => (
                            <span key={index} className="m-4">
                                <FontAwesomeIcon icon={skill} size="4x" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
