import './MenuButtons.css'
import ScrollToSection from '../utils/ScrollToSection/ScrollToSection';
// import { useContext } from 'react';
// import WindowDimensionsContext from '../Contexts/WindowDimensionsContext/WindowDimensionsContext';

function MenuButtons({toggleCanvas, headerNavbarRef}) {
    
    // const {windowWidth} = useContext(WindowDimensionsContext);
    // const offsetScroll = 80;
    const scrollAndToggle = (sectionID) => {
        toggleCanvas(); // Close the canvas menu
        if (headerNavbarRef.current) {
            ScrollToSection(sectionID, headerNavbarRef);
        } else {
            ScrollToSection(sectionID, false);

        }
    }

    return (
        <>
            <button type="button"  className="btn dotted-button " onClick={()=>scrollAndToggle('firstSection')}>Home</button>
            {/* <button type="button" className="btn dotted-button " onClick={scrollToSection}>About Me</button> */}
            <button type="button" className="btn dotted-button " onClick={()=>scrollAndToggle('secondSection')}>Projects</button>
            <button type="button" className="btn dotted-button" onClick={()=>scrollAndToggle('thirdSection')}>Contact</button>
        </>

    )
};

export default MenuButtons;