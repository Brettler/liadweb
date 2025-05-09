import NavbarMenu from './NavbarMenu';
import DesktopMenu from './DesktopMenu';
import './Menu.css'
import {
    useEffect,
    useRef,
    useState
} from 'react';

function Menu({windowWidth, setUpdateProgressBarPosition}) {
    const ref = useRef(null);
    const [menuOpacity, setMenuOpacity] = useState(1);
    useEffect( () => {

        const handleMenuPosition = (() => {
            const scrollThreshPos = window.innerHeight * 0.2; // Define the height in which when the user scrolls under we set fixed to false.
            const currentScrollPos = window.scrollY;
            const opacity = Math.max(0, 1- currentScrollPos / scrollThreshPos + 0.2); // Calculate opacity based on scroll position.

            setMenuOpacity(opacity);

            if(currentScrollPos < scrollThreshPos) {
                ref.current.style.position = 'fixed';
                setUpdateProgressBarPosition(false);
            } else {
                ref.current.style.position = 'relative';
                setUpdateProgressBarPosition(true);
            }
        });

        window.addEventListener('scroll', handleMenuPosition);
        return () => window.removeEventListener('scroll', handleMenuPosition);

    }, [setUpdateProgressBarPosition]);


    return(
        <header className="preSection" id="preSectionMenu">
            {/* Container for the menu bar */}
            <div ref={ref} id='menuContainer' className='container'
            style={{
                // opacity: menuOpacity,
                position: 'fixed',
                transition: 'all 0.6s ease',
            }}>
                {windowWidth < 850 ? <NavbarMenu/>: <DesktopMenu menuOpacity={menuOpacity}/>}
            </div>
        </header>
    )
}

export default Menu;