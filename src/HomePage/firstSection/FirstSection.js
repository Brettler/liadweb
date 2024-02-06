
import TextContainer from '../textContainer/TextContainer'
import MyIMG from '../myIMG/MyIMG'
import './FirstSection.css'
import { useRef } from 'react'
import useScrollSlideAnimation from '../useScrollSlideAnimation'


function FirstSection() {

    const ref = useRef(null);
    const transformX = useScrollSlideAnimation(ref);

    return (
        <>
            {/* Container for the image and text */}
            {/* <div ref={ref} className={`moving-element ${isVisible ? 'slide-in' : ''}`}> */}
                <div id='textPicContainer' className='container' >
                    <div ref={ref} id="textPicRow" className='row justify-content-start' style={{ transform: `translateX(${transformX}%)` }}>

                        <div id='myPic' className='col-lg-4 col-md-4 col-4'>
                            <MyIMG/>
                        </div>
                        <div  id='textContainer' className='col-lg-8 col-md-8 col-8' >

                            <TextContainer/>

                        </div>

                        
                    </div>

                </div>
            {/* </div> */}
        </>
    )
}

export default FirstSection