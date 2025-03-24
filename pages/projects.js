import ContainerBlock from "../components/layout/ContainerBlock";
import Projects from "../components/sections/Projects";

export default function projects() {
    return (
        <ContainerBlock customMeta={{ title: "Projects" }}>
            <Projects />
        </ContainerBlock>
    );
}
