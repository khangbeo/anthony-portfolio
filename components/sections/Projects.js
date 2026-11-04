import userData from "@constants/data";
import Card from "../ui/Card";
import SectionHeading from "../common/SectionHeading";

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userData.projects.map((project, idx) => (
                    <Card key={idx} {...project} />
                ))}
            </div>
        </div>
    );
}
