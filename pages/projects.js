import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

export default function projects() {
    return (
        <ContainerBlock customMeta={{ title: "Projects" }}>
            <Projects />
        </ContainerBlock>
    );
}
