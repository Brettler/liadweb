import './TextContainer.css'
import React, { useCallback, useEffect, useState } from 'react';

function TextContainer({setIsFinishTyping}) {

    const [textState, setTextState] = useState({
        title : {text: '', cursor: true},
        name : {text: '', cursor: false},
        subTitle : {text: '', cursor: false},
        s1: { text: '', cursor: false },
        s2: { text: '', cursor: false },
        s3: { text: '', cursor: false },
        s4: { text: '', cursor: false },
        s5: { text: '', cursor: false },
    });

    const fullTextContent = {
        title: 'Hello, my name is',
        name: 'Liad Brettler',
        subTitle: `I'm a junior fullstack devloper.`,
        s1: `Welcome to my site, where I share my journey into Full Stack Development.`,
        s2: `I finished this year my B.Sc in Computational Biology from Bar-Ilan University,`,
        s3: `were I found a keen interest in coding.`,
        s4: `This space is dedicated to projects and ideas that reflect my growth as a developer and my enthusiasm for building web applications.`,
        s5: `Let's dive into the world of development together.`,
    }

    const duration = 10;

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const typeChars = useCallback(async () => {
        await sleep(2200); // Waiting for the loader screen to finish animation. 
        for(const key of Object.keys(fullTextContent)) {
            const text = fullTextContent[key]; 
            for (let i = 0; i < text.length; i++) {
                setTextState(prevState => ({
                    ...prevState,
                    [key]: {...prevState[key], text: text.substring(0, i+1)},
                }));
                await sleep(duration);
            }

            setTextState(prevState => ({
                ...prevState,
                [key]: {...prevState[key], cursor: false},
            }));
        }

        setIsFinishTyping(true);

    }, [duration, setIsFinishTyping]);

    useEffect(() => {
        typeChars();
    },[typeChars]);

    const renderTextWithCursor = (key) => (
        <>
            {textState[key].text}
            <span className={textState[key].cursor ? `typingCursor` : `empty`}>|</span>
        </>
    );

    return (

            <div id="welcomeText">
                <div className='title typing'>
                    {renderTextWithCursor('title')}
                </div> 
                <div className='myName typing'>
                    {renderTextWithCursor('name')}
                </div> 
                <div className='aboutMeMSG typing'>
                    {renderTextWithCursor('subTitle')}
                </div> 
                {[...Array(5).keys()].map( i => (
                    <div key={i} className='information typing'>
                        {renderTextWithCursor(`s${i+1}`)}
                    </div>
                ))}
            </div>
    );
};

export default TextContainer;


// function TextContainer({setIsFinishTyping}) {

//     const [titleText, setTitleText] = useState('');
//     const [subtitleText, setSubtitleText] = useState('');
//     const [informationText, setInformationText] = useState('');

//     const [showTitleCursor, setShowTitleCursor] = useState(true);
//     const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
//     const [showInfoCursor, setInfoCursor] = useState(false);


//     const fullTitle = 'Hello, my name is Liad Brettler.';
//     const fullSubtitle = `I'm a junior fullstack devloper.`;
//     const fullInformationText = `Welcome to my site, where I share my journey into Full Stack Development.
//         I finished this year my B.Sc in Computational Biology from Bar-Ilan University,
//         were I found a keen interest in coding.
//         This space is dedicated to projects and ideas that reflect my growth as a developer and my enthusiasm for building web applications.
//         Let's dive into the world of development together.`;

//     const duration = 150;

//     const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//     const typeChars = useCallback(async (text, setText, setShowCursor) => { // async function to use the sleep function above.
//         for (let i = 0; i < text.length; i++) {
//             setText(text.substring(0,i+1));
//             // console.log(`typing ${text[i]}`);
//             await sleep(duration); // Wait for the duration before typing the next char.
//         }
//         setShowCursor(false); // Hide the cursor after typing the sentence.
//     }, [duration]);

//     useEffect(() => {
        
//         (async () => {
//             await sleep(500);
//             await typeChars(fullTitle, setTitleText, setShowTitleCursor);
//             setShowSubtitleCursor(true);
//             // console.log(`Finsihed typing ${fullTitle}, starting ${fullSubtitle}`)
//             await typeChars(fullSubtitle, setSubtitleText, setShowSubtitleCursor);
//             // console.log(`Finsihed typing ${fullSubtitle}, starting ${setInformationText}`)
//             setInfoCursor(true);
//             await typeChars(fullInformationText, setInformationText, setInfoCursor);
//             // console.log(`Finished typing all text.`);

//             setIsFinishTyping(true);
          
//         })();
//     }, [typeChars]);

//     return (

//             <div id="welcomeText">
//                 <div className='title typing'>
//                     {titleText}
//                     <span className={showTitleCursor ? 'typingCursor' : 'empty'}>|</span>
//                 </div> 
//                 <div className='aboutMeMSG typing'>
//                     {subtitleText}
//                     <span className={showSubtitleCursor ? 'typingCursor' : 'empty'}>|</span>
//                 </div> 
//                 <div className='information typing'>
//                         {/* Split the text into an array where each item is a line of the paragraph */}
//                         {informationText.split('\n').map((line, index, arr) => (
//                         <React.Fragment key={index}>
//                             {line}
//                             {(index < arr.length - 1) && <br/>}
//                         </React.Fragment>
//                     ))}
//                     <span className={showInfoCursor ? 'typingCursor' : 'empty'}>|</span>
//                 </div> 
//             </div>
//     );
// };

// export default TextContainer;



// const fullSubtitle = `After three intensive years at Bar-Ilan University, I graduated with a Computational Biology degree \n
// This degree is comprised of Biology and Computer Science. \n 
// After falling in love with the Computer Science courses, I understood my destiny - to become a Developer.\n
// My favorite course at the university was Full Stack course.\n
// I had a great time doing projects, which you will see some of them here.\n
// Upon finishing the degree, I continued to develop machine learning models for a paper that is currently pending publication\n
// I will update the website when it is published (fingers crossed!).\n
// Now, I'm looking forward to my next challenge, \n
// Seeking a position in which I can learn and contribute to team success\n
// and develop skills and experience to evolve into a professional career. `


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