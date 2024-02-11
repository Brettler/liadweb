import './TextContainer.css'
import { useCallback, useEffect, useState } from 'react';


function TextContainer({setIsFinishTyping}) {

    const [titleText, setTitleText] = useState('');
    const [subtitleText, setSubtitleText] = useState('');
    const [showTitleCursor, setShowTitleCursor] = useState(true);
    const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);


    const fullTitle = 'Liad Brettler';
    const fullSubtitle = 'Full Stack Developer'
    const duration = 150;

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const typeChars = useCallback(async (text, setText, setShowCursor) => { // async function to use the sleep function above.
        for (let i = 0; i < text.length; i++) {
            setText(text.substring(0,i+1));
            // console.log(`typing ${text[i]}`);
            await sleep(duration); // Wait for the duration before typing the next char.
        }
        setShowCursor(false); // Hide the cursor after typing the sentence.
    }, [duration]);

    useEffect(() => {
        
        (async () => {
            await sleep(500);
            await typeChars(fullTitle, setTitleText, setShowTitleCursor);
            setShowSubtitleCursor(true);
            // console.log(`Finsihed typing ${fullTitle}, starting ${fullSubtitle}`)
            await typeChars(fullSubtitle, setSubtitleText, setShowSubtitleCursor);
            // console.log(`Finished typing all text.`);
            setIsFinishTyping(true);
          
        })();
    }, [typeChars]);

    return (

            <div id="welcomeText">
                <div className='title typing'>
                    {titleText}
                    <span className={showTitleCursor ? 'typingCursor' : 'empty'}>|</span>
                </div> 
                <div className='intoMSG typing'>
                    {subtitleText}
                    <span className={showSubtitleCursor ? 'typingCursor' : 'empty'}>|</span>
                </div> 
            </div>
    );
};

export default TextContainer;


// <>
// <label className='title' htmlFor='welcomeMSG'> {welcomeMessage} </label> 
// <label className='intoMSG' htmlFor='introMSG'>
// <p>
// Hello, thank you for joining my personal website. <br></br>
// My name is Liad Brettler, and I'm a junior developer. <br></br>
// After three intensive years at Bar-Ilan University, I graduated with a Computational Biology degree. <br></br>
// This degree is comprised of Biology and Computer Science. <br></br>
// After falling in love with the Computer Science courses, I understood my destiny - to become a Developer! <br></br>
// My favorite course at the university was 'Mitakdem 2', which is the last development course - a Full Stack course. <br></br>
// I had a great time doing the project, which I have shared on this web and Git. I even tried to keep improving and developing them after submission. <br></br>
// Upon finishing the degree, I continued to develop machine learning models for a paper that is currently pending publication. <br></br>
// I will update the website when it is published (fingers crossed!). <br></br>
// Now, I'm looking forward to my next challenge, <br></br>
// Seeking a position in which I can learn and contribute to team success <br></br>
// and develop skills and experience to evolve into a professional career.
// </p>
// </label> 

// </>


    //let timeoutId = null; // This variable will hold the timeout and will be used for cleanup.
    //const isMounted = useRef(true); // Track if the component is mounted.
    //const timeoutId = useRef(null); // Store the current timeout.

    // useEffect(() => {
    //     if (!isMounted.current) return; // Exit if the component has unmounted.

    //     function typeChars(text, i, setText, nextText) {
    //         console.log(`typing ${text.charAt(i)}`); // Log the current character being typed

    //         if (i < text.length) { // Write the current sentence
    //             setText(perv => perv + text.charAt(i));
    //             timeoutId.current = setTimeout( () => typeChars(text, i + 1, setText, nextText), duration);
    //         } else if(nextText) { // If there is more sentence (which we do) write it.
    //             console.log(`Finished typing ${text}, starting ${nextText}`);
    //             timeoutId.current = setTimeout(typeChars(nextText, 0, setSubtitleText, null), duration);
    //         } else {
    //             console.log('Finished typing all text.')
    //         }
    //     }

    //     typeChars(fullTitle, 0, setTitleText, fullSubtitle);

    //     return () => {
    //         if(timeoutId) {
    //             isMounted.current = false; // false when the component unmouts.
    //             console.log('Cleanup - clearing timeout'); // Log when the effect is cleaned up.
    //             clearTimeout(timeoutId);
    //         }
    //     };
    // }, []); // Will work just once when the page first load.