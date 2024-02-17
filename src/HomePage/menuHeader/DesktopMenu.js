
import './DesktopMenu.css'
import HamburgerMenu from './HamburgerMenu';
import useOffcanvas from './useOffcanvas';

function DesktopMenu({menuOpacity}) {

    const {canvasRef, isCanvasOpen, toggleCanvas} = useOffcanvas()

    return (

        <>
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation" style={{opacity: menuOpacity}}>
                <HamburgerMenu onClick={toggleCanvas}
                                isActive={isCanvasOpen}/>
            </button>

            <div ref={canvasRef} class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasTopLabel">Menu</h5>
                    {/* <button type="button" class="btn-close .btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    <HamburgerMenu/>
                    </button> */}
                </div>
                <div class="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contact</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <hr className="dropdown-divider" />
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                </div>
            </div>
        </>
    )

}

export default DesktopMenu;