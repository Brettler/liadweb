
import './Sections.css'
import FirstSection from './firstSection/FirstSection';



function Sections() {




    return(

        <>
        <div className='section' id="firstSection">

            <FirstSection/>
        </div>
        <div className='section' id="secondSection">

            <FirstSection/>
        </div>
        </>
        
    );
};

export default Sections;