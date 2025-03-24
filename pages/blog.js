import ContainerBlock from "../components/ContainerBlock";
import Blog from "../components/Blog";

export default function blog() {
    return (
        <ContainerBlock customMeta={{ title: "Blog" }}>
            <Blog />
        </ContainerBlock>
    );
}
