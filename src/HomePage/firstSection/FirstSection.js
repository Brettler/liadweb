
import TextContainer from '../textContainer/TextContainer'
import MyIMG from '../myIMG/MyIMG'
import './FirstSection.css'
import { useRef, useEffect, useState } from 'react'


function FirstSection() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // set isVisible to true;
            },
            {
                root: null, // viewport
            }
        );

        if(ref.current) {
            observer.observe(ref.current);
        }

        return (() => {
            if (ref.current) {
                observer.disconnect();
            }
        });

    }, []);

    
    return (
        <>
            {/* Container for the image and text */}
            <div id='textPicContainer' className='container' >
                <div ref={ref} id="textPicRow" className='row justify-content-start'
                        style={{transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: isVisible ? 1 : 0,
                                filter: isVisible ? 'blur(0px)' : 'blur(5px)',
                                transition: 'transform 3s ease, opacity 4s ease, filter 4s ease'
                                }}>

                    <div id='myPic' className='col-lg-4 col-md-4 col-4'>
                        <MyIMG/>
                    </div>
                    <div  id='textContainer' className='col-lg-8 col-md-8 col-8' >

                        <TextContainer/>

                    </div>

                    
                </div>

            </div>
        </>
    )
};

export default FirstSection;