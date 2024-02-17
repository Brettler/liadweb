
import { useEffect, useRef, useState } from 'react';
import './HamburgerMenu.css'


// if isCanvasOpen is true -> isActive true and we will start the animation. 
function HamburgerMenu({onClick, isActive}) {
    // const refBurger = useRef(null);

    // useEffect( () => {
    //     const burgerClick = () => refBurger.current.classList.toggle('active');
    //     refBurger.current.addEventListener('click', burgerClick);

    //     return (() => {
    //         refBurger.current.removeEventListener('click', burgerClick)
    //     });
    // }, []);

    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () =>{
    //     setIsActive(!isActive); // Toggle the 'active' class for animation.
    //     onClick();
    // };

    return (

        <div className={`burgerContainer ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="burgerIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


    )
}

export default HamburgerMenu;

