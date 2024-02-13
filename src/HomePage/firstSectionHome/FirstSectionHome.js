
import TextContainer from '../textContainer/TextContainer'
import MyIMG from '../myIMG/MyIMG'
import './FirstSectionHome.css'
import {useState} from 'react'


function FirstSection({isLoadAniFinish}) {
    const [isFinishTyping, setIsFinishTyping] = useState(false);

    return (
        <>
            {/* Container for the image and text */}
            <div id='textPicContainer' className='container' >
                <div id="textPicRow" className='row justify-content-center'>

                    <div id='myPic' className='col-lg-4 col-md-4 col-10'>
                        <MyIMG isFinishTyping={isFinishTyping}/> {/* If we don't want the pulse animation remove the promp*/}
                    </div>
                    <div  id='textContainer' className='col-lg-8 col-md-8 col-10' >

                        <TextContainer setIsFinishTyping={setIsFinishTyping}
                                        isLoadAniFinish={isLoadAniFinish}
                                        />
                    </div>     
                </div>
            </div>
        </>
    )
};

export default FirstSection;