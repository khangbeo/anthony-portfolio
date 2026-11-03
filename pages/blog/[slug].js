import ContainerBlock from "../../components/layout/ContainerBlock";
import { getAllPosts, getPostBySlug } from "@lib/posts";

export default function BlogPost({ post }) {
    return (
        <ContainerBlock customMeta={{ title: post.title }}>
            <div className="mx-auto max-w-3xl px-4">
                <a
                    href="/blog"
                    className="text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    ← Back to blog
                </a>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {post.title}
                </h1>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                </p>
                <div
                    className="blog-post-content mt-10"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </div>
        </ContainerBlock>
    );
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug);
    return {
        props: {
            post,
        },
    };
}
