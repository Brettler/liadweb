
import './Sections.css';
import FirstSection from '../firstSectionHome/FirstSectionHome';
import { useEffect, useRef, useState } from 'react';

function Sections({isLoadAniFinish, windowWidth}) {

    const ref = useRef(null);
    const [menuOpacity, setMenuOpacity] = useState(1);
    // const [firstLoadMenu, setFirstLoadMenu] = useState(true); // This state control the menu

    useEffect( () => {

        const handleMenuPosition = (() => {

            const scrollThreshPos = window.innerHeight * 0.2; // Define the hight in which when the user scroll under we set fixed to false.
            const currentScrollPos = window.scrollY;
            const opacity = Math.max(0, 1- currentScrollPos / scrollThreshPos + 0.2); // Calculate opacity based on scroll position.

            setMenuOpacity(opacity);

            if(currentScrollPos < scrollThreshPos) {
                ref.current.style.position = 'fixed';
            } else {
                ref.current.style.position = 'relative';
            }
            
        });

        window.addEventListener('scroll', handleMenuPosition);
        return () => window.removeEventListener('scroll', handleMenuPosition);

    }, []);
    
    return(

        <>

        {/* <div className="preSection" id="preSectionMenu">
            <div id ='menuContainer' className='container'>
                <div className='row justify-content-end'>
                    <div ref={ref} id='menuBar' className='col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2'
                    style={{
                        position : 'fixed',
                        transition: 'all 0.6s ease',
                    }}>
                        {windowWidth < 500 ? <NavbarMenu/>: <DesktopMenu menuOpacity={menuOpacity}/>}
                    </div>
                </div>
            </div>
        </div> */}
        
        <div className='section' id="firstSection">
            <FirstSection isLoadAniFinish={isLoadAniFinish}/>
                        
        </div>


        {/* <div className='section' id="secondSection">
            <SecondSection/>
        </div>
        <div className='section' id="thirdSection">

      
        </div> */}
        </>
        
    );
};

export default Sections;