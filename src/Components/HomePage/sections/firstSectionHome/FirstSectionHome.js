
import TextContainer from './textContainer/TextContainer'
import MyIMG from './myIMG/MyIMG'
import './FirstSectionHome.css'
import {useState} from 'react'
//import IconsContact from '../../iconsContact/IconsContact';


function FirstSection({isLoadAniFinish}) {
    const [isFinishTyping, setIsFinishTyping] = useState(false);

    return (
        <>
            {/* Container for the image and text */}
            <div id='homeContainer' className='container' >
                <div id="textPicRow" className='row'>
                    <div id='myPic' className='col-xl-5 col-lg-12 col-md-12 col-12'>
                        <MyIMG isFinishTyping={isFinishTyping}/> {/* If we don't want the pulse animation remove the promp*/}
                    </div>
                    <div  id='textContainer' className='col-xl-7 col-lg-12 col-md-12 col-12' >

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