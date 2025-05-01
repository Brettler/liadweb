import './CardContainerProjects.css';
import '../../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import CardTemplate from './CardTemplate/CardTemplate';
// import websiteChat2 from './CardTemplate/projectsImagesCards/leafletWebImg/websiteChat2.png';
// import androidChat from './CardTemplate/projectsImagesCards/leafletAndroidImg/androidChat.png';
// import rumorScreen1Start from './CardTemplate/projectsImagesCards/rumorGame/rumorScreen2Start.png';
// import geneticNNGui from './CardTemplate/projectsImagesCards/geneticNN/geneticNNGui_V1.jpeg';
// import geneticAlgoCalssicRes from './CardTemplate/projectsImagesCards/geneticAlgo/geneticAlgoCalssicRes.png';
// import knnCPP from './CardTemplate/projectsImagesCards/knnCPP/knnCPP.jpg'
// import EPFlowChat from './CardTemplate/projectsImagesCards/projectEP/EPFlowChart.jpg'
// import producerConsumerProblemImg from './CardTemplate/projectsImagesCards/producerConsumerProblem/producerConsumerProblemImg.jpg'
// import numpyIcon from './CardTemplate/CardSkillsIcons/iconsImg/numpyIcons/numpylogoicon.svg'
// import pygIcon from './CardTemplate/CardSkillsIcons/iconsImg/pygIcons/pyg_logo.png'
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
                    isAndroidCard={ data.isAndroidCard }
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