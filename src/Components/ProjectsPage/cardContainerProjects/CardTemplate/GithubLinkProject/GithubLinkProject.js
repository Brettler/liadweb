
import './GithubLinkProject.css'
import { useRef, useEffect} from 'react'
import { Popover } from 'bootstrap';
import RainMatrixEffect from '../../../../../RainMatrixEffect/RainMatrixEffect';


function GithubLinkProject({projectURL}) {

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
        <>
        
        <i id='githubIconLink' className='ci ci-github-light ci-2x' onClick={() => openInNewTab(projectURL)}></i>
        </>
    )

}

export default GithubLinkProject;