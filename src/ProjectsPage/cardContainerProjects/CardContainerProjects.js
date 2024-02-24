


import './CardContainerProjects.css'
import CardTemplate from './CardTemplate/CardTemplate';
import '../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import websiteChat2 from './CardTemplate/projectsImagesCards/leafletWebImg/websiteChat2.png';

import androidChat from './CardTemplate/projectsImagesCards/leafletAndroidImg/androidChat.png';


import rumorScreen1Start from './CardTemplate/projectsImagesCards/rumorGame/rumorScreen2Start.png';

import geneticNNGui from './CardTemplate/projectsImagesCards/geneticNN/geneticNNGui.png';


import geneticAlgoCalssicRes from './CardTemplate/projectsImagesCards/geneticAlgo/geneticAlgoCalssicRes.png';



function CardContainerProjects({containerCardsRef, scrollPercent}) {

    const leafletWebTitle = 'Leaflet Chat: Web Platform';
    const leafletWebDescription = 'Explore Leaflet’s demo of a WhatsApp-like application. Register to send messages to friends through our website or mobile app.';
    
    const leafletAndroidTitle = 'Leaflet Chat: Android App';
    const leafletAndroidDescription = 'Discover Leaflet’s demo WhatsApp-like application. Register to seamlessly send messages to friends via our Android application.';
    
    const rumorGameTitle = 'Rumor Spreading Game';
    const rumorGameDescription = 'Rumor Spreading game is a varient of "Game Of Life" that was devised by the mathematician John Horton Conway.';

    const geneticNNTitle = 'Neural Network Utilize Genetic Algorithm';
    const geneticNNDescription = 'This project domnstrate the effectivness of training nueural network for binary classification using genetic algorithm instead of the mainsteam training methods.'

    const geneticAlgoTitle = 'Genetic Algorithm (mono-alphabetic cipher)';
    const geneticAlgoDescription = 'This project shows differents approches for genetic algorithms that will decipher mono-alphabetic cipher.'

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
                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={androidChat}
                                    title={leafletAndroidTitle}
                                    description={leafletAndroidDescription}
                                    isAndroidCard={true}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={rumorScreen1Start}
                                    title={rumorGameTitle}
                                    description={rumorGameDescription}
                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={geneticNNGui}
                                    title={geneticNNTitle}
                                    description={geneticNNDescription}
                                    isAndroidCard={false}/>
                </div>
                <div class="col">
                    <CardTemplate projectImage={geneticAlgoCalssicRes}
                                    title={geneticAlgoTitle}
                                    description={geneticAlgoDescription}
                                    isAndroidCard={false}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardContainerProjects;