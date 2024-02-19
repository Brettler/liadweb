
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

            <div ref={canvasRef} class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <div class="d-grid gap-5 d-flex justify-content-md-center">
                            <MenuButtons  toggleCanvas={toggleCanvas}/>
                    </div>
                </div>
                {/* <div class="offcanvas-body">

                </div> */}
            </div>
        </>
    )

}

export default DesktopMenu;