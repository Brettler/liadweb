import React, {useRef, useEffect, useState} from 'react';
import './PreLoadAnimation.css'
import Sections from '../HomePage/sections/Sections'


function PreLoadAnimation({windowWidth}) {

    const refHomePageLoader = useRef(null);
    const [titleRefs, setTitleRefs] = useState([])
    const [isLoadAniFinish, setIsLoadAniFinish] = useState(false);
    
    useEffect(() => {
        
        setTimeout(() => { 

            titleRefs.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('activeAnimation');
                }, ((index + 1)) * 400);
            });

            setTimeout(() => {
                titleRefs.forEach((span, index) => {
                    setTimeout( () => {
                        span.classList.remove('activeAnimation');
                        span.classList.add('fadeAnimation');
                    }, ((index + 1) * 50));
                });
            }, 2000)

            setTimeout(() => {
                if (refHomePageLoader.current) {
                    refHomePageLoader.current.style.top = '-100vh';
                    
                }
            }, 2020);

            setTimeout(() => setIsLoadAniFinish(true), 600); // When changed to true we triger the typing animation.
        
        }, 500);

    }, [titleRefs]);

    const setSameRef = (element) => {
        if (element && !titleRefs.includes(element)) {
            setTitleRefs(pervRefs => [...pervRefs, element]);
        }
    };

    return (
        <>
        {/* <div ref={refHomePageLoader} className='HomePageLoader'>
            <div className="LoaderTextContainer">

                <span ref={setSameRef} className='titleIntro'>{'Liad Brettler'}</span>
                <span ref={setSameRef} className='titleIntro'>{'Software Devloper'}</span>

            </div>

        </div> */}
        <div id="HomePageSections">
            <Sections isLoadAniFinish={isLoadAniFinish}
                        windowWidth={windowWidth}/>
        </div>
        </>
    )

}

export default PreLoadAnimation;