
import MenuButtons from '../menuButtons/MenuButtons'
import TextContainer from '../textContainer/TextContainer'
import MyIMG from '../myIMG/MyIMG'
import './FirstSection.css'
import { useRef } from 'react'
import useScrollSlide from '../useScrollSlide'


function FirstSection() {

    const ref = useRef(null);
    const isVisible = useScrollSlide(ref);

    return (
        <>
            {/* Container for the menu bar */}
            <div id ='menuContainer' className='container'>
                <div className='row justify-content-end'>
                    <div id='menuBar' className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
                        <MenuButtons/>
                    </div>
                </div>

            </div>

            {/* Container for the image and text */}
            {/* <div ref={ref} className={`moving-element ${isVisible ? 'slide-in' : ''}`}> */}
                <div id='textPicContainer' className='container'>
                    <div id="textPicRow" className='row justify-content-start'>

                        <div id='myPic' className='col-lg-4 col-md-4 col-4'>
                            <MyIMG/>
                        </div>
                        <div id='textContainer' className='col-lg-8 col-md-8 col-8'>

                            <TextContainer/>

                        </div>

                        
                    </div>

                </div>
            {/* </div> */}

        </>

    )
}

export default FirstSection