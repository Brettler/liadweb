
import {useState, useEffect} from 'react';
import './useProgressBarScroll.css';

// Custom hook will handle all the progress of the scrolling.
const useProgressBarScroll = ((ref) => {

    const [y, setY] = useState(window.scrollY); // storing current scroll bar positiotn
    const [totalY, setTotalY] = useState(); // storing Total Scrollable area
    const [scrollBar, setScrollBar] = useState(); // storing Size of scroll bar


    useEffect(() => {

        


        window.addEventListener('scroll', () => setY(window.scrollY)); // Initalize even listener for changes each time the user scroll.

        const element = ref.current;
        setTotalY(element.clientHeight);
        setScrollBar(window.innerHeight);



    }, [y]);

    const scrollPercentage = `${((y + scrollBar) / totalY) *100}%`;

    console.log(`scrollPercentage = ${scrollPercentage}`)

    return scrollPercentage;
});

export default useProgressBarScroll;