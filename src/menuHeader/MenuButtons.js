import {Link} from 'react-router-dom'
import './MenuButtons.css'

function MenuButtons({toggleCanvas}) {


    const scrollToSection = (sectionID) => {
        toggleCanvas(); // Close the canvas menu


        const section = document.getElementById(sectionID); // find the id section we need to scroll to.
        if (section) {
            // Scroll to section
            section.scrollIntoView({behavior:'smooth', block:'start'})
        }
    }

    return (
        <>
                    <button type="button"  className="btn dotted-button " onClick={()=>scrollToSection('firstSection')}>Home</button>
                    {/* <button type="button" className="btn dotted-button " onClick={scrollToSection}>About Me</button> */}
                    <button type="button" className="btn dotted-button " onClick={()=>scrollToSection('secondSection')}>Projects</button>
                    <button type="button" className="btn dotted-button" onClick={()=>scrollToSection('thirdSection')}>Contact</button>
        </>

    )
};


export default MenuButtons;