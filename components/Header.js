import Navbar from "./Navbar";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
    return (
        <div className="w-full backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex flex-col py-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Anthony Duong
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-1 text-md">
                            Support Engineer - Artist - Developer
                        </p>
                        <Socials />
                    </div>

                    <ThemeToggle />

                    <hr className="my-4 border-gray-300 dark:border-gray-800 w-full border-solid border-[1px]" />
                    <Navbar />
                </div>
            </div>
        </div>
    );
}
