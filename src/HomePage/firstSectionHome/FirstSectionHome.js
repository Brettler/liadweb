
import TextContainer from '../textContainer/TextContainer'
import MyIMG from '../myIMG/MyIMG'
import './FirstSectionHome.css'
import {useState} from 'react'


function FirstSection() {
    const [isFinishTyping, setIsFinishTyping] = useState(false);


    return (
        <>
            {/* Container for the image and text */}
            <div id='textPicContainer' className='container' >
                <div id="textPicRow" className='row justify-content-start'>

                    <div id='myPic' className='col-lg-4 col-md-4 col-4'>
                        <MyIMG isFinishTyping={isFinishTyping}/>
                    </div>
                    <div  id='textContainer' className='col-lg-8 col-md-8 col-8' >

                        <TextContainer setIsFinishTyping={setIsFinishTyping}/>

                    </div>

                    
                </div>

            </div>
        </>
    )
};

export default FirstSection;