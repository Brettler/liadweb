import './IconsContact.css'
import { useRef, useEffect} from 'react'

import { Popover } from 'bootstrap';
import {IconLinkedInSVG} from './IconLinkedInSVG'

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
            <div id='contactListIcons' className='container'>
                <div>
                    <IconLinkedInSVG onClick={()=> openInNewTab('https://www.linkedin.com/in/liad-brettler/')}/>
                </div>
                
                <div className='containerGitIconsCI'>
                    <i id='gitIconHome' className="ci ci-github-light ci-3x ci-contact-home" onClick={() =>openInNewTab('https://github.com/Brettler')}></i>
                </div>

                <div className='containerGmailIconsCI'>
                    <i className="ci ci-gmail ci-3x ci-contact-home" onClick={() =>openInNewTab('mailto:liad.brettler@gmail.com')}></i>
                </div>
            </div>
    )
}

export default IconsContact;