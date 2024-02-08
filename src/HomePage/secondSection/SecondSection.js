import { useRef, useEffect, useState } from 'react'






function SecondSection() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // set isVisible to true;
            },
            {
                root: null, // viewport
            }
        );

        if(ref.current) {
            observer.observe(ref.current);
        }

        return (() => {
            if (ref.current) {
                observer.disconnect();
            }
        });

    }, []);

    return(
        <div ref={ref}
        style={{transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(5px)',
                transition: 'transform 3s ease, opacity 4s ease, filter 4s ease'
                }}>
            <h1>
                About Me
            </h1>
        </div>
    )
}

export default SecondSection;