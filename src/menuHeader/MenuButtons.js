import {Link} from 'react-router-dom'
import './MenuButtons.css'

function MenuButtons({toggleCanvas}) {

    return (
        <>
                    <Link to='/' type="button" className="btn dotted-button " onClick={toggleCanvas}>Home</Link>
                    <button type="button" className="btn dotted-button " onClick={toggleCanvas}>About Me</button>
                    <Link to='/projects' type="button" className="btn dotted-button " onClick={toggleCanvas}>Projects</Link>
                    <Link to='/contact' type="button" className="btn dotted-button" onClick={toggleCanvas}>Contact</Link>
        </>

    )
};


export default MenuButtons;