
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

                <div id="textPicRow" className='row'>
                    <div id='contactIcons' className='col-lg-2 col-md-4 col-10'>

                        <ul className='contactListIcons'>
                            <li>
                                <i class="ci ci-github-light ci-3x"></i>
                            </li>
                            <li>
                                <i class="ci ci-linkedin ci-3x"></i>
                            </li>
                            <li>
                                <i class="ci ci-gmail ci-3x"></i>
                            </li>
                        </ul>

                    </div>

               

                    <div id='myPic' className='col-lg-2 col-md-2 col-10'>
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