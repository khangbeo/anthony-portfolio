import Navbar from "./Navbar";
import Socials from "../common/Socials";
import ThemeToggle from "../ui/ThemeToggle";
import userData from "@constants/data";
export default function Header() {
    return (
        <div className="w-full backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex flex-col py-8">
                    <div>
                        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Anthony Duong
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-1 text-md">
                            {userData.designation}
                        </p>
                        <Socials />
                    </div>

                    <ThemeToggle />

                    <hr className="my-4 border-gray-200 dark:border-white/10 w-full border-solid border-[1px]" />
                    <Navbar />
                </div>
            </div>
        </div>
    );
}
