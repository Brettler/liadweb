import CardContainerProjects from "./cardContainerProjects/CardContainerProjects";
import TextContainerProjects from "./textContainerProjects/TextContainerProjects";
import useProgressBarScroll from '../customHooks/ProgressBarScroll/useProgressBarScroll'
import './ProjectsPage.css'
//import RainMatrixEffect from '../RainMatrixEffect/RainMatrixEffect'
function ProjectsPage() {

    const {ref, scrollPercent , isFullyScrolled} = useProgressBarScroll();

    return (
        <>
        <div className="ProjectPage">
            <div className="firstSectionProject">
                <TextContainerProjects/>
            </div>
            <div className={ `secondSectionProject ${ isFullyScrolled ? 'hideArrow' : '' } ` }>
                <CardContainerProjects containerCardsRef={ref}
                                        scrollPercent={scrollPercent}/>
            </div>
        </div>
        </>
    )
}

export default ProjectsPage;