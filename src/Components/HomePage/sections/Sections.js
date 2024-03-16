
import './Sections.css';
import FirstSection from './firstSectionHome/FirstSectionHome';
import { useRef } from 'react';
import ProjectPage from '../../ProjectsPage/ProjectsPage'
import ContactPage from '../../ContactPage/ContactPage'
import ScrollToSection from '../../../utils/ScrollToSection/ScrollToSection';

function Sections({isLoadAniFinish, windowWidth, isFullyScrolled}) {

    // const ref = useRef(null);
    // const [menuOpacity, setMenuOpacity] = useState(1);
    // const [firstLoadMenu, setFirstLoadMenu] = useState(true); // This state control the menu

    // useEffect( () => {

    //     const handleMenuPosition = (() => {

    //         const scrollThreshPos = window.innerHeight * 0.2; // Define the hight in which when the user scroll under we set fixed to false.
    //         const currentScrollPos = window.scrollY;
    //         const opacity = Math.max(0, 1- currentScrollPos / scrollThreshPos + 0.2); // Calculate opacity based on scroll position.

    //         setMenuOpacity(opacity);

    //         if(currentScrollPos < scrollThreshPos) {
    //             ref.current.style.position = 'fixed';
    //         } else {
    //             ref.current.style.position = 'relative';
    //         }
            
    //     });

    //     window.addEventListener('scroll', handleMenuPosition);
    //     return () => window.removeEventListener('scroll', handleMenuPosition);

    // }, []);

    const arrowRef = useRef(null)



    // useEffect(() => {

    //     const arrowCursorClickable = (e) => {
    //         // When we do the animation of the arrow roling we want the cursor to become clickable.
    //         if (e.animationName === 'animateRolling') {
    //             console.log('arrow addevent')

    //             arrowRef.current.classList.add('clickable'); // The class will change the cursor to pointer.
    //         }
    //     };

    //     const arrowElement = arrowRef.current;
    //     if (arrowElement) {
    //         console.log('arrow addevent')
    //       arrowElement.addEventListener('animationend', arrowCursorClickable);
    //     }
      
    //     return () => {
    //       if (arrowElement) {
    //         console.log('arrow remove event')

    //         arrowElement.removeEventListener('animationend', arrowCursorClickable);
    //       }
    //     };

    // },[])

    const validScrollToSection = (sectionID) => {
        if(arrowRef.current && arrowRef.current.classList.contains('hideArrow')) {
            ScrollToSection(sectionID);
        }
    }


    
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
        <section className='section' id="firstSection">
            <FirstSection isLoadAniFinish={isLoadAniFinish}/>         
        </section>


        {/* <div className='section' id="secondSection">
            <SecondSection/>
        </div>
        <div className='section' id="thirdSection">

      
        </div> */}

        <section className='section' id='secondSection'>

            <ProjectPage/>
        </section>

        <section className='section' id='thirdSection'>
            <ContactPage/>
        </section>

        <div className='arrowUpContainer'>
        <div ref={arrowRef} className={`arrowScroll ${ isFullyScrolled ? 'hideArrow' : '' }`} onClick={() => validScrollToSection('firstSection')}>⌄</div>

        </div>
        </>
        
    );
};

export default Sections;