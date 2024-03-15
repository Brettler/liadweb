import React, {useRef, useEffect, useState} from 'react';
import './PreLoadAnimation.css'
import Sections from '../Components/HomePage/sections/Sections'
import useProgressBarScroll from '../customHooks/ProgressBarScroll/useProgressBarScroll';

function PreLoadAnimation({windowWidth, updateProgressBarPosition}) {

    const refHomePageLoader = useRef(null);
    const [titleRefs, setTitleRefs] = useState([])
    const [isLoadAniFinish, setIsLoadAniFinish] = useState(false);
    const {ref, scrollPercent , isFullyScrolled} = useProgressBarScroll();


    useEffect(() => {
        // Prevent scrolling when the load animation is mounts.
        document.body.classList.add('bodyNoScroll');

        const timer = setTimeout(() => { 

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

        // Cleanup function to allow scrolling when the load animation is unmounds.
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('bodyNoScroll');
        }

    }, [titleRefs]);

    useEffect(() => {
        setTimeout(() => {
            if (isLoadAniFinish) {
                document.body.classList.remove('bodyNoScroll');
                document.body.classList.add('bodyScroll')
            }
        }, 2020)

    },[isLoadAniFinish]) // Listen to changes in isLoadFinish to allow scrolling / not allowed.



    const setSameRef = (element) => {
        if (element && !titleRefs.includes(element)) {
            setTitleRefs(pervRefs => [...pervRefs, element]);
        }
    };

    return (
        <>
        <div ref={refHomePageLoader} className='HomePageLoader'>
            <div className="LoaderTextContainer">

                <span ref={setSameRef} className='titleIntro'>{'Liad Brettler'}</span>
                <span ref={setSameRef} className='titleIntro'>{'Software Devloper'}</span>

            </div>
        </div>
        

        {/* The progress bar to be in the top of the container*/}
        <div className={`scrollProgressContainer ${updateProgressBarPosition ? 'removeOffset' : 'addOffset' }`}>
            <div className='progressContainer'>
                <div className='progressFill'
                    style=
                        {
                        windowWidth <= 850 ? 
                        {width: scrollPercent}
                        :
                        {height: scrollPercent}
                        }> 
                </div>
            </div>
        </div>

        {/* <div className={`arrowScroll ${ isFullyScrolled ? 'hideArrow' : '' }`}>⌄</div> */}

        <div ref={ref} className={`sectionsContainer`}>
            <Sections isLoadAniFinish={isLoadAniFinish}
                        windowWidth={windowWidth}
                        isFullyScrolled={isFullyScrolled}
                        />
        </div>

        </>
    )

}

export default PreLoadAnimation;