import './IconsContact.css'
import { useRef, useEffect} from 'react'

import { Popover } from 'bootstrap';


function IconsContact() {

    const popRef = useRef(null)

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null

    }

    useEffect(() => {
        if (popRef.current) {
            const popover = new Popover(popRef.current, {
                container: 'body',
            });
        }
    }, []);

      
    return (
            <div className='contactListIcons'>
                <span >
                    <i className="ci ci-github-light ci-3x" onClick={() =>openInNewTab('https://github.com/Brettler')}></i>
                    <i id='linkedinIconHome' className="ci ci-linkedin-light ci-3x" onClick={() =>openInNewTab('https://www.linkedin.com/in/liad-brettler/')}></i>

                    <i className="ci ci-gmail ci-3x" onClick={() =>openInNewTab('mailto:liad.brettler@gmail.com')}></i>



                </span>
            </div>
    )
}

export default IconsContact;