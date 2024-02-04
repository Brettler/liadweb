
import React, {useState, useEffect} from 'react';


const useScrollSlide = ((ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkVisibility = () => {
            if (ref.current) { // Check if the current section is visble or not.
                const posRect = ref.current.getBoundingClientRect(); // Get the size of the elemnt and its position relative to the viewport.
                const isVisible = posRect.top < window.innerHeight && posRect.bottom >=0; // First condition-> top element is not below the bottom of the view port
                                                                                                    // Second condition -> bottom of the element is not above the top of the view port;
                setIsVisible(isVisible);

            }
        };

        checkVisibility(); // We want the animation at first load of the page;
        window.addEventListener('scroll', checkVisibility); // Initalize even listener for changes each time the user scroll.

        return (() => window.removeEventListener('scroll', checkVisibility)); // Cleaning the event;


    }, [ref]); // Dependency will be ref to re-check if the ref changes.

    return isVisible
});

export default useScrollSlide;