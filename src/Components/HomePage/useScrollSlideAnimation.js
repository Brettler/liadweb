
// import {useState, useEffect} from 'react';

// // Custom hook will handle all the animation of the content based on the postion of the scroll.
// const useScrollSlideAnimation = ((ref) => {
//     const [transformX, setTransformX] = useState(-100); // Initialize position invisible to the left of the screen.
//     const [opacity, setOpacity] = useState(0); // Initalize fully transparent

//     useEffect(() => {

//         const handleScroll = () => {
//             if (ref.current) { // Check if the current section is visble or not.
//                 const sectionRect = ref.current.getBoundingClientRect(); // Get the size of the elemnt and its position relative to the viewport.
//                 const totalHeight = sectionRect.top + sectionRect.height; // Total hight over which the animation effect should happend.
//                 const visisbleHeight = window.innerHeight - sectionRect.top; // The height of the part of the component that is visible in the viewport.
//                 let curPosition = Math.max(0, Math.min(1, visisbleHeight / totalHeight)) // The position or the component's visibility relative to the view port.
//                                                                                             // 0 -> not visible, 1 -> full visibility, visivilty/total is the ratio of the visibility (between 0 and 1)

//                 const transformValue = (1 - curPosition) * -100; // transformValue -> how much the component should move left.
//                                                                 // We use '-' because as the component go out of view (curPosition lower) -> transformValue more negative -> moving the component to the left.
                
//                 setTransformX(transformValue); // Update the state with the new transform value.
                

//                 const opacityValue = 1 + transformValue/100;
//                 setOpacity(opacityValue);
//             }
//         };

//         window.addEventListener('scroll', handleScroll); // Initalize even listener for changes each time the user scroll.
//         handleScroll(); // Initialize to set the correct position;

//         return (() => window.removeEventListener('scroll', handleScroll)); // Cleaning the event;


//     }, [ref]); // Dependency will be ref to re-check if the ref changes.

//     return {transformX, opacity};
// });


// export default useScrollSlideAnimation;