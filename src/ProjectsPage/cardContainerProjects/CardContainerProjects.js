import './CardContainerProjects.css';
import '../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import CardTemplate from './CardTemplate/CardTemplate';
import websiteChat2 from './CardTemplate/projectsImagesCards/leafletWebImg/websiteChat2.png';
import androidChat from './CardTemplate/projectsImagesCards/leafletAndroidImg/androidChat.png';
import rumorScreen1Start from './CardTemplate/projectsImagesCards/rumorGame/rumorScreen2Start.png';
import geneticNNGui from './CardTemplate/projectsImagesCards/geneticNN/geneticNNGui.png';
import geneticAlgoCalssicRes from './CardTemplate/projectsImagesCards/geneticAlgo/geneticAlgoCalssicRes.png';
import knnCPP from './CardTemplate/projectsImagesCards/knnCPP/knnCPP.jpg'
import EPFlowChat from './CardTemplate/projectsImagesCards/projectEP/EPFlowChart.jpg'
import producerConsumerProblemImg from './CardTemplate/projectsImagesCards/producerConsumerProblem/producerConsumerProblemImg.jpg'
import numpyIcon from './CardTemplate/CardIcons/iconsImg/numpyIcons/numpylogoicon.svg'
import pygIcon from './CardTemplate/CardIcons/iconsImg/pygIcons/pyg_logo.png'

function CardContainerProjects({containerCardsRef, scrollPercent}) {

    const leafletWebTitle = 'Leaflet Chat: Web Platform';
    const leafletWebDescription = 'Explore Leaflet’s demo of a WhatsApp-like application. Register to send messages to friends through our website or mobile app. Our Server will be responsible for clean comunication cross platfrom.';
    const leafletIcons = ['ci-js-light ci-2x', 'ci-reactjs ci-2x', 'ci-nodejs-horizontal-light ci-3x', 'ci-mongodb-horizontal ci-3x', 'ci-npm-wordmark ci-2x', 'ci-bootstrap ci-2x', 'ci-css ci-2x', 'ci-html ci-2x']

    const leafletAndroidTitle = 'Leaflet Chat: Android App';
    const leafletAndroidDescription = 'Discover Leaflet’s demo WhatsApp-like application. Register to seamlessly send messages to friends via our Android application.';
    const androidIcons = ['ci-java ci-2x', 'ci-firebase ci-2x', 'ci-nodejs-horizontal-light ci-3x', 'ci-mongodb-horizontal ci-3x', 'ci-npm-wordmark ci-2x']

    
    const epProjectTitle = 'Elucidating Drug Mechanisms';
    const epProjectDescription = 'Developed a ML model that can classify drugs by their mechanisms through Graph Neural Networks employing a Large Language Model. This project won an award of Certificate of Excellence.';
    const epProjectIcons = ['ci-python ci-2x', 'ci-pytorch ci-2x', pygIcon, numpyIcon]


    const rumorGameTitle = 'Rumor Spreading Game';
    const rumorGameDescription = 'Rumor Spreading game is a varient of "Game Of Life" that was devised by the mathematician John Horton Conway.';
    const rumorIcons = ['ci-python ci-2x', numpyIcon]


    const geneticNNTitle = 'Neural Network Utilize Genetic Algorithm';
    const geneticNNDescription = 'This project domnstrate the effectivness of training nueural network for binary classification using genetic algorithm instead of the mainsteam training methods.';
    const geneticNNIcons = ['ci-python ci-2x', numpyIcon]


    const geneticAlgoTitle = 'Genetic Algorithm (mono-alphabetic cipher)';
    const geneticAlgoDescription = 'This project shows differents approches for genetic algorithms that will decipher mono-alphabetic cipher.';
    const geneticAlgoIcons = ['ci-python ci-2x', numpyIcon]

    const knnCPPTitle = 'KNN Classifier: Server-Client';
    const knnCPPDescription = 'A C++ server-client system leveraging the Command design pattern and CLI over TCP. Simultaneous multi-client handling with socket-based communication.';
    const knnCPPIcons = ['ci-cpp ci-2x']

    
    //const producerConsumerDescription = 'N producers communicate with the dispatcher via their Producer queues. The Dispatcher communicates with the Co-Editors via three queues corresponding to the three types of messages. The Co- Editors communicate with the Screen-Manager via a single shared queue, and the Screen manager displays the systems output.'
    const producerConsumerTitle = 'Producer-Consumer Problem (Bounded Buffer)';
    const producerConsumerDescription = 'A C program simulating the producer-consumer problem, as described by Edsger Dijkstra.';
    const producerConsumerIcons = ['ci-c ci-2x']

    

    return (
        <>

        {/* The progress bar to be in the top of the container*/}
        <div id='cardProgressContainer' className='container'>
            <div className='progressContainer'>
                <div className='progressFill' style={{width: scrollPercent}}></div>
            </div>
        </div>

        <div  ref={containerCardsRef}  id='cardContainer' className="container">

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 g-4">
                <div class="col">
                    <CardTemplate projectImage={websiteChat2}
                                    title={leafletWebTitle}
                                    description={leafletWebDescription}
                                    iconsArr={leafletIcons}
                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={androidChat}
                                    title={leafletAndroidTitle}
                                    description={leafletAndroidDescription}
                                    iconsArr={androidIcons}

                                    isAndroidCard={true}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={EPFlowChat}
                                    title={epProjectTitle}
                                    description={epProjectDescription}
                                    iconsArr={epProjectIcons}

                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={rumorScreen1Start}
                                    title={rumorGameTitle}
                                    description={rumorGameDescription}
                                    iconsArr={rumorIcons}

                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={geneticNNGui}
                                    title={geneticNNTitle}
                                    description={geneticNNDescription}
                                    iconsArr={geneticNNIcons}

                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={geneticAlgoCalssicRes}
                                    title={geneticAlgoTitle}
                                    description={geneticAlgoDescription}
                                    iconsArr={geneticAlgoIcons}

                                    isAndroidCard={false}/>
                </div>

                <div class="col">
                    <CardTemplate projectImage={knnCPP}
                                    title={knnCPPTitle}
                                    description={knnCPPDescription}
                                    iconsArr={knnCPPIcons}

                                    isAndroidCard={false}/>
                </div>

                <div class="col">
                    <CardTemplate projectImage={producerConsumerProblemImg}
                                    title={producerConsumerTitle}
                                    description={producerConsumerDescription}
                                    iconsArr={producerConsumerIcons}

                                    isAndroidCard={false}/>
                </div>

            </div>
        </div>
        </>
    )
}

export default CardContainerProjects;