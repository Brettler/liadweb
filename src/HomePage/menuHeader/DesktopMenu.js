
import './DesktopMenu.css'
import HamburgerMenu from './HamburgerMenu';
import useOffcanvas from './useOffcanvas';

function DesktopMenu({menuOpacity}) {

    const {canvasRef, isCanvasOpen, toggleCanvas} = useOffcanvas()

    return (

        <>
            <button id='burgerDeskMenuIconToggler' className="navbar-toggler" type="button" aria-label="Toggle navigation" style={{opacity: menuOpacity}}>
                <HamburgerMenu onClick={toggleCanvas}
                                isActive={isCanvasOpen}/>
            </button>

            <div ref={canvasRef} class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <div class="d-grid gap-5 d-flex justify-content-md-center">
                            <button type="button" class="btn btn-light">Home</button>
                            <button type="button" class="btn btn-light">About Me</button>
                            <button type="button" class="btn btn-light">Projects</button>
                            <button type="button" class="btn btn-light">Contact</button>
                    </div>
                </div>
                {/* <div class="offcanvas-body">

                </div> */}
            </div>
        </>
    )

}

export default DesktopMenu;