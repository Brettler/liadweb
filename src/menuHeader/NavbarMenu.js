import './NavbarMenu.css'
import HamburgerMenu from './HamburgerMenu';
import useOffcanvas from './useOffcanvas';
import MenuButtons from './MenuButtons';
import { useRef } from 'react';

function NavbarMenu() {

    const {canvasRef, isCanvasOpen, toggleCanvas} = useOffcanvas()
    const headerNavbarRef = useRef(null)

    return(
        <nav ref={headerNavbarRef} id='navbarMenu' className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand">Home</div>
                <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    {<HamburgerMenu toggleCanvas={toggleCanvas}
                                    isActive={isCanvasOpen}/>}
                </button>
                <div ref={canvasRef} className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    </div>
                    <div className="offcanvas-body">
                        <div className="navbar-nav gap-5 justify-content-end flex-grow-1 pe-3">

                            <MenuButtons toggleCanvas={toggleCanvas} headerNavbarRef={headerNavbarRef}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarMenu;