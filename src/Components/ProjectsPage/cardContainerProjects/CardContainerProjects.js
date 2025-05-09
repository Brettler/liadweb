import './CardContainerProjects.css';
import '../../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import CardTemplate from './CardTemplate/CardTemplate';
import {
    projectsData
} from './constants'


function CardContainerProjects() {
    const mapProjectsDataToCards = ({projectsData}) => {
        return projectsData.map((data, index) => (
            <div className={'col'} key={index}>
                <CardTemplate
                    projectImage={ data.projectImage }
                    title={ data.title }
                    description={ data.description }
                    iconsArr={ data.iconsArr }
                    projectURL={ data.projectURL }
                    isVerticalImage={ data.isVerticalImage ?? false }
                />
            </div>
        ))
    }

    return (
        <div id='cardContainer' className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 row-cols-1550px-4 g-4">
                { mapProjectsDataToCards({projectsData}) }
            </div>
        </div>
    )
}

export default CardContainerProjects;