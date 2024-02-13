
import { useEffect, useRef } from 'react';
import './HamburgerMenu.css'

function HamburgerMenu() {
    const refBurger = useRef(null);

    useEffect( () => {

        const burgerAnimation = () => refBurger.current.classList.toggle('active');

        refBurger.current.addEventListener('click', burgerAnimation);

        return () => refBurger.current.removeEventListener('click', burgerAnimation);

    }, []);



    return (
        <div ref={refBurger} className='burgerContainer'>
            <div className="burgerIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default HamburgerMenu;

