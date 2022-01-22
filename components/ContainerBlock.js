import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Anthony Duong - Full-Stack Developer",
    description: `Full-stack developer with a background in art and design.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://anthony-duong.netlify.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://anthony-duong.netlify.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Anthony Duong" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="
        w-full
        text-gray-900
        dark:text-gray-50 
        bg-light
        dark:bg-dark
        bg-fixed
        bg-center
        bg-cover
        bg-no-repeat
        h-auto
        ">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
