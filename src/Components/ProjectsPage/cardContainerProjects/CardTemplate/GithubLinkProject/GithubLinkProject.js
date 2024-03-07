
import './GithubLinkProject.css'
import { useRef, useEffect} from 'react'
import { Popover } from 'bootstrap';
//import RainMatrixEffect from '../../../../../RainMatrixEffect/RainMatrixEffect';
import fallIcon from './fall.ico'

function GithubLinkProject({projectURL, isAndroidCard}) {

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
//         <div className='linkIconsContainer'>
//             <span>
//                 <i id='githubIconLink' className='ci ci-github-light ci-2x' onClick={() => openInNewTab(projectURL)}></i>
//                 /* </span>
// <span>
//                 <i id='demoIconLink'  className='ci' onClick={() => openInNewTab('https://leaflet-chat-app.oa.r.appspot.com/')}>
//                     <img src={fallIcon} alt='demo' />
//                 </i>
//                 </span>
//         </div> 
        <>
        {isAndroidCard ? 
            (
                <i id='githubIconLinkAndroid' className='ci ci-github-light ci-2x' onClick={() => openInNewTab(projectURL)}></i>
            ):
            (
                <i id='githubIconLink' className='ci ci-github-light ci-2x' onClick={() => openInNewTab(projectURL)}></i>
            )

        }
        </>

    )

}

export default GithubLinkProject;