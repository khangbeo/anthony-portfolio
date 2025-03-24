import ContainerBlock from "../components/layout/ContainerBlock";
import AboutMe from "../components/sections/AboutMe";

export default function about() {
    return (
        <ContainerBlock customMeta={{ title: "About" }}>
            <AboutMe />
        </ContainerBlock>
    );
}
