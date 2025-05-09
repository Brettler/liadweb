import CardContainerProjects from "./cardContainerProjects/CardContainerProjects";
import TextContainerProjects from "./textContainerProjects/TextContainerProjects";
import './ProjectsPage.css'
//import RainMatrixEffect from '../RainMatrixEffect/RainMatrixEffect'
//import useProgressBarScroll from '../customHooks/ProgressBarScroll/useProgressBarScroll'
// import useProgressBarScroll from '../../customHooks/ProgressBarScroll/useProgressBarScroll';

function ProjectsPage() {
    //const {ref, scrollPercent , isFullyScrolled} = useProgressBarScroll();

    return (
        <>
        <div className="ProjectPage">
            <div className="firstSectionProject">
                <TextContainerProjects/>
            </div>
            <div className={ `secondSectionProject` }>
                <CardContainerProjects/>
            </div>
        </div>
        </>
    )
}

export default ProjectsPage;