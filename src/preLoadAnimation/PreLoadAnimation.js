import React, {useRef, useLayoutEffect, useEffect, useState} from 'react';
// import gsap from 'gsap'
import './PreLoadAnimation.css'
// import Sections from '../HomePage/sections/Sections'


// function PreLoadAnimation() {

//     // const refComponentAnimation = useRef(null);

//     // useLayoutEffect(() => {
//     //     let context = gsap.context(() => { // record all animation that set in the context execution.

//     //         const t1 = gsap.timeline(); // Define new time line for the animation.
//     //         t1.from('#HomePageLoader', {
//     //             xPercent: "-100",
//     //             duration: 1.3,
//     //             delay: 0.3,
//     //         }).from(['#title1', '#title2'], {
//     //             opacity: 0, 
//     //             y: "+=30",
//     //             stagger: 0.5,
//     //         }).to(['#title1', '#title2'], {
//     //             opacity: 0,
//     //             y: "-=30",
//     //             delay: 0.3
//     //         })
//     //         .to('#HomePageLoader', {
//     //             xPercent: '-100',
//     //             duration: 1.3

//     //         })
//     //         .from('#HomePageSections', {
//     //             opacity: 0,
//     //             duration: 0.5,
//     //         })


//     //     }, refComponentAnimation) // Dependency that will ensure the animation effect only the children of the component.
        
        
//     //     return () => context.revert(); // Reverse the animation (clean up).

//     // }, []); // Runs once after the component moutns and once again after it umnounts.




//     return (
//         // <div ref={refComponentAnimation} className='HomePageLoader'>
//         //     <div className="LoaderTextContainer">
        
//         //         <h1 id='title1'>Liad Brettler</h1>
//         //         <h1 id='title2'>Full Stack Devloper</h1>

//         //     </div>
//         //     <div id="HomePageSections">

//         //         <Sections/>
//         //     </div>



//         // </div>
//         <div className='HomePageLoader'>
//             <h1 className="LoaderTextContainer">
        
//                 <span className='title'>Liad Brettler</span>
//                 <span className='title'>Full Stack Devloper</span>

//             </h1>
//             {/* <div id="HomePageSections">

//                 <Sections/>
//             </div> */}



//         </div>
//     )



// }

function PreLoadAnimation() {

    const refHomePageLoader = useRef(null);
    const [titleRefs, setTitleRefs] = useState([])

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
                    console.log(`refHomePageLoader.current is true`);
                    refHomePageLoader.current.style.top = '-100vh';
                    
                }
            }, 2020);

        });

    }, [titleRefs]);

    const setSameRef = (element) => {
        if (element && !titleRefs.includes(element)) {
            setTitleRefs(pervRefs => [...pervRefs, element]);
        }
    };

    return (
        <>
        <div ref={refHomePageLoader} className='HomePageLoader'>
            <div className="LoaderTextContainer">
                <div className='row'>
                    <div className='col'>
                        <span ref={setSameRef} className='titleIntro'>{'Liad Brettler'}</span>
                    </div>
                </div>
                    <div className='row'>
                        <div  className='col'> 
                            <span ref={setSameRef} className='titleIntro'>{'Full Stack Devloper'}</span>
                        </div>
                    </div>
            </div>

        </div>
        {/* <div id="HomePageSections">
            <Sections/>
        </div> */}
        </>
    )

}

export default PreLoadAnimation;