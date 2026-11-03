import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import userData from "constants/data";

export default function Socials() {
    return (
        <div className="social-icons flex space-x-2">
            <a
                href={userData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full ring-1 ring-gray-200 dark:ring-white/10 hover:bg-gray-900 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
            >
                <FiGithub />
            </a>
            <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full ring-1 ring-gray-200 dark:ring-white/10 hover:bg-gray-900 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
            >
                <FiLinkedin />
            </a>
            <a
                href={`mailto:${userData.email}`}
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full ring-1 ring-gray-200 dark:ring-white/10 hover:bg-gray-900 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
            >
                <FiMail />
            </a>
        </div>
    );
}
