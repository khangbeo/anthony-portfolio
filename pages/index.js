import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "@constants/data";

export default function Home() {
    return (
        <ContainerBlock
            title="Anthony Duong - Support Engineer"
            description="5+ years experience working with code."
        >
            <Hero />
        </ContainerBlock>
    );
}

// This ensures the page is statically generated
export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60, // Revalidate every 60 seconds
    };
}
