import ContainerBlock from "../components/layout/ContainerBlock";
import Contact from "../components/sections/Contact";

export default function contact() {
    return (
        <ContainerBlock customMeta={{ title: "Contact" }}>
            <Contact />
        </ContainerBlock>
    );
}
