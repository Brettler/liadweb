
import './Sections.css'
import FirstSection from './firstSection/FirstSection';
import MenuButtons from './menuButtons/MenuButtons'



function Sections() {




    return(

        <>
        <div className="preSection" id="preSectionMenu">
            
            {/* Container for the menu bar */}
            <div id ='menuContainer' className='container'>
                <div className='row justify-content-end'>
                    <div id='menuBar' className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
                        <MenuButtons/>
                    </div>
                </div>

            </div>
        </div>

        <div className='section' id="firstSection">
            <FirstSection/>
        </div>
        <div className='section' id="secondSection">

            <FirstSection/>
        </div>
        <div className='section' id="thirdSection">

        <FirstSection/>
        </div>
        </>
        
    );
};

export default Sections;