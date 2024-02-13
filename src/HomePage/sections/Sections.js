
import './Sections.css';
import NavbarMenu from '../menuHeader/NavbarMenu';
import HamburgerMenu from '../menuHeader/HamburgerMenu';
import FirstSection from '../firstSectionHome/FirstSectionHome';
import SecondSection from '../secondSection/SecondSection';
import { useEffect, useRef, useState } from 'react';

function Sections({isLoadAniFinish, windowWidth}) {

    const ref = useRef(null);
    const [menuOpacity, setMenuOpacity] = useState(1);
    // const [firstLoadMenu, setFirstLoadMenu] = useState(true); // This state control the menu



    useEffect( () => {

        const handleMenuPosition = (() => {

            const scrollThreshPos = window.innerHeight * 0.2; // Define the hight in which when the user scroll under we set fixed to false.
            const currentScrollPos = window.scrollY;
    
            // Calculate opacity based on scroll position.
            const opacity = Math.max(0, 1- currentScrollPos / scrollThreshPos + 0.2);

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
        <div className="preSection" id="preSectionMenu">

            {/* Container for the menu bar */}
            <div id ='menuContainer' className='container'>
                <div className='row justify-content-end'>
                    <div ref={ref} id='menuBar' className='col-xl-12 col-lg-4 col-md-5 col-sm-12 col-2'
                    style={{
                        opacity : menuOpacity,
                        position : 'fixed',
                        transition: 'all 0.6s ease',
                    }}>
                        {windowWidth < 500 ? <NavbarMenu/>: <HamburgerMenu/>}
                    </div>
                </div>
            </div>
        </div>

        <div className='section' id="firstSection">
            <FirstSection isLoadAniFinish={isLoadAniFinish}/>
        </div>
        <div className='section' id="secondSection">
            <SecondSection/>
        </div>
        <div className='section' id="thirdSection">

        {/* <FirstSection/> */}
        </div>
        </>
        
    );
};

export default Sections;