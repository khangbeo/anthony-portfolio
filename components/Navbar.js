import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="flex items-center space-x-8 mb-8">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`p-2 rounded-md lg:text-xl transition-colors ${
                        router.pathname === item.href
                            ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}
