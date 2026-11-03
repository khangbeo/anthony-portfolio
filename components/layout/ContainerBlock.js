import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function ContainerBlock({ children, customMeta }) {
    const meta = {
        title: "Anthony Duong - Support Engineer",
        description:
            "Support Engineer with a background in art and design, passionate about AI training and creative problem-solving.",
        image: "/avatar.jpg",
        type: "website",
        ...customMeta,
    };
    return (
        <>
            <Head>
                <title>
                    {meta?.title || "Anthony Duong - Support Engineer"}
                </title>
                <meta
                    name="description"
                    content={
                        meta?.description ||
                        "Support Engineer specializing in web development and technical support."
                    }
                />
                <meta
                    property="og:title"
                    content={meta?.title || "Anthony Duong - Support Engineer"}
                />
                <meta
                    property="og:description"
                    content={
                        meta?.description ||
                        "Support Engineer specializing in web development and technical support."
                    }
                />
                <meta
                    property="og:image"
                    content={meta?.image || "/images/anthony.jpg"}
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Anthony Duong" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={meta?.title || "Anthony Duong - Support Engineer"}
                />
                <meta
                    name="twitter:description"
                    content={
                        meta?.description ||
                        "Support Engineer specializing in web development and technical support."
                    }
                />
                <meta
                    name="twitter:image"
                    content={meta?.image || "/images/anthony.jpg"}
                />
                <link rel="canonical" href="https://anthonyduong.vercel.com" />
            </Head>
            <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-[#09090b] dark:text-gray-100">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
