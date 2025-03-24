import ContainerBlock from "../components/layout/ContainerBlock";
import Blog from "../components/sections/Blog";

export default function blog() {
    return (
        <ContainerBlock customMeta={{ title: "Blog" }}>
            <Blog />
        </ContainerBlock>
    );
}
