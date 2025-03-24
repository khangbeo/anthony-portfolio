import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import userData from "constants/data";

export default function Socials() {
    return (
        <div className="social-icons flex space-x-2">
            <a
                href={userData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full hover:bg-gray-900 hover:text-gray-50 text-gray-900 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 flex items-center justify-center cursor-pointer"
            >
                <FiGithub />
            </a>
            <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full hover:bg-gray-900 hover:text-gray-50 text-gray-900 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 flex items-center justify-center cursor-pointer"
            >
                <FiLinkedin />
            </a>
            <a
                href={`mailto:${userData.email}`}
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full hover:bg-gray-900 hover:text-gray-50 text-gray-900 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 flex items-center justify-center cursor-pointer"
            >
                <FiMail />
            </a>
        </div>
    );
}
