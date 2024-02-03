import './TextContainer.css'

function TextContainer() {

    //const welcomeMessage = "Welcome To My Website";
    const myName = "Liad Brettler";

    return (
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

            <>
            <div className='title' htmlFor='welcomeMSG'> {myName} </div> 
            <div className='intoMSG' htmlFor='introMSG'>

            <p>Full Stack Developer</p>
        
            </div> 

            </>





    );
};

export default TextContainer;