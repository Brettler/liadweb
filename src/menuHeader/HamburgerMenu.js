import './HamburgerMenu.css'

// if isCanvasOpen is true -> isActive true and we will start the animation. 
function HamburgerMenu({toggleCanvas, isActive}) {
    return (
        <div className={`burgerContainer ${isActive ? 'active' : ''}`} onClick={toggleCanvas}>
            <div className="burgerIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default HamburgerMenu;
