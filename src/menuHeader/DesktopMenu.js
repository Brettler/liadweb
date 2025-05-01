import './DesktopMenu.css'
import HamburgerMenu from './HamburgerMenu';
import MenuButtons from './MenuButtons';
import useOffcanvas from './useOffcanvas';

function DesktopMenu({menuOpacity}) {
    const {canvasRef, isCanvasOpen, toggleCanvas} = useOffcanvas()

    return (

        <>
            <button id='burgerDeskMenuIconToggler' className="navbar-toggler" type="button" aria-label="Toggle navigation" style={{opacity: menuOpacity}}>
                <HamburgerMenu toggleCanvas={toggleCanvas}
                                isActive={isCanvasOpen}/>
            </button>

            <div ref={canvasRef} className="offcanvas offcanvas-top text-bg-dark" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <div className="d-grid gap-5 d-flex justify-content-md-center">
                            <MenuButtons  toggleCanvas={toggleCanvas}
                                            headerNavbarRef={false}/> {/* Navbar is used only on small screens so we pass the value false */}
                    </div>
                </div>
            </div>
        </>
    )

}

export default DesktopMenu;