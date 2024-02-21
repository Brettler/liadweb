import CardContainerProjects from "./cardContainerProjects/CardContainerProjects";
import TextContainerProjects from "./textContainerProjects/TextContainerProjects";

import './ProjectsPage.css'

function ProjectsPage() {
    return (
        <div className="ProjectPage">
            <div className="firstSectionProject">
                <TextContainerProjects/>
            </div>
            <div className="secondSectionProject">
                <CardContainerProjects/>
            </div>
        </div>
    )
}

export default ProjectsPage;