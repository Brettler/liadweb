
import MenuButtons from './menuButtons/MenuButtons'
import TextContainer from './textContainer/TextContainer'
import MyIMG from './myIMG/MyIMG'
import iconL from './l.png'
import './homePage.css'


function HomePage() {


    return (
        <>
            {/* Container for the menu bar */}
            <div className='container'>
                <div className='row justify-content-end'>
                    <div id='menuBar' className='col-lg-3 col-md-5 col-sm-12'>
                        <MenuButtons/>
                    </div>
                    <div id='iconLID' className='col-lg-3 col-md-5 col-sm-12'>
                        <img className='iconL' src={iconL} alt="myIcon"/>
                    </div>
                </div>

            </div>

            {/* Container for the image and text */}
            <div id='textPicContainer' className='container'>
                <div className='row justify-content-start'>

                    <div id='myPic' className='col-lg-4 col-md-4 col-4'>
                        <MyIMG/>
                    </div>
                    <div id='textContainer' className='col-lg-8 col-md-8 col-8'>

                        <TextContainer/>

                    </div>

                    
                </div>

            </div>

        </>

    )
}

export default HomePage