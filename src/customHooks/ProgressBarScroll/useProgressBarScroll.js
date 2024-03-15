
import {useState, useEffect, useRef} from 'react';
import './useProgressBarScroll.css';

// Custom hook will handle all the progress of the scrolling.
const useProgressBarScroll = (() => {

    const ref = useRef(null);
    const [scrollPercent, setScrollPercent] = useState("0%");

    // const handleScroll = () => {
    //     if (ref.current) {
    //         const scrollTop = ref.current.scrollTop;
    //         const scrollHeight = ref.current.scrollHeight;
    //         const clientHeight = ref.current.clientHeight;
    //         const scrolled = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    //         setScrollPercent(`${scrolled}%`);
    //     }
    // };

    // useEffect(() => {
    //     const container = ref.current;
    //     if (container) {
    //         container.addEventListener("scroll", handleScroll);
    //         return () => container.removeEventListener("scroll", handleScroll);
    //     }

    // }, []); // This effect should run only once


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            const scrolled = Math.round((scrollTop / (scrollHeight-clientHeight)) * 100);
            setScrollPercent(`${scrolled}%`)
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []); // This effect should run only once


    console.log(scrollPercent);

    const isFullyScrolled = scrollPercent === '100%' ; // determain id fully scrolled.
    console.log(`isFullyScrolled = ${isFullyScrolled}`);

    return { scrollPercent, isFullyScrolled};

});

export default useProgressBarScroll;