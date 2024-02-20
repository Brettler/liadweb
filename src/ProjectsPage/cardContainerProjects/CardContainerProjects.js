


import './CardContainerProjects.css'
import CardTemplate from './CardTemplate/CardTemplate';
import useProgressBarScroll from '../../customHooks/ProgressBarScroll/useProgressBarScroll'
import { useRef, useState, useEffect } from 'react';
import '../../customHooks/ProgressBarScroll/useProgressBarScroll.css';


function CardContainerProjects() {

    const cardsRef = useRef(null);

    const [scroll, setScroll] = useState("0%");

    const handleScroll = () => {
        if (cardsRef.current) {
            const scrollTop = cardsRef.current.scrollTop;
            const scrollHeight = cardsRef.current.scrollHeight;
            const clientHeight = cardsRef.current.clientHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScroll(`${scrolled}%`);
        }
    };

    useEffect(() => {
        const container = cardsRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []); // This effect should run only once

    console.log(scroll);

    return (
        <>
        <div  ref={cardsRef}  id='cardContainer' className="container">
            <div className='row'>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>
                <div className='col'> <CardTemplate/> </div>

            </div>
        </div>

        <div className='progressContainer'>
            <div className='progressFill' style={{width: scroll}}>

                </div>

        </div>
        </>
    )
}

export default CardContainerProjects;