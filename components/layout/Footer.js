import Socials from "../common/Socials";

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-gray-200 dark:border-white/10">
            <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-10">
                <Socials />
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Anthony Duong.
                    Bakersfield, California.
                </p>
            </div>
        </footer>
    );
}
