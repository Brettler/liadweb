


import './CardContainerProjects.css'
import CardTemplate from './CardTemplate/CardTemplate';
import '../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import leafletChatImage from './CardTemplate/projectsImagesCards/LeafletChat.png'

function CardContainerProjects({containerCardsRef, scrollPercent}) {
    return (
        <>

        {/* The progress bar to be in the top of the container*/}
        <div className='container'>
            <div className='progressContainer'>
                <div className='progressFill' style={{width: scrollPercent}}></div>
            </div>
        </div>

        <div  ref={containerCardsRef}  id='cardContainer' className="container">

            <div className='row'>
                <div className='col'> <CardTemplate projectImage={leafletChatImage}/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>

            </div>
        </div>


        </>
    )
}

export default CardContainerProjects;