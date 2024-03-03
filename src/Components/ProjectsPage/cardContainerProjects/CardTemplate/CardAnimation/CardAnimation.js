
import './CardAnimation.css'
import {useRef, useState} from 'react'
import {motion} from "framer-motion"
//import { FiMousePointer } from 'react-icons/fi';

function CardAnimation({projectImage, title, description}) {

    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;

    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseIn = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect(); // Get the size of the card and its position relative to the viewport.
        const width = rect.width; /* width of the card */
        const height = rect.height; /* hight of the card */

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rY = (mouseX / width) - HALF_ROTATION_RANGE;
        const rX = ((mouseY / height) - HALF_ROTATION_RANGE) * -1;

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseOut = () => {
        if (!cardRef.current) return;
        setRotateX(0);
        setRotateY(0);
    };

    return(
        <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseIn}
                    onMouseLeave={handleMouseOut}
                    animate={{
                        rotateX,
                        rotateY,
                    }}
                    className='animationCard'>

            {/* <div className='cardContent' style={{ backgroundImage: `url(${projectImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}> */}
            <div className='cardContent'>
                <img src={projectImage} alt={title} className='cardImage' />
                <h3 className='cardTitle'> {title} </h3>
                <p className='cardDescription'> {description} </p>
            </div>

        </motion.div>
    )
}

export default CardAnimation;