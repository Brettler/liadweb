import profilePic from './profilePic.png'
import './MyIMG.css'



// Check if we want to pulse animation for the image.
function MyIMG({isFinishTyping}) {
    // If isFinishTyping is false (typing not finished), include the pulse animation.
    // Otherwise, if true (typing finished), stop the animation.
    //const classImgName = isFinishTyping ? 'profilePic' : 'profilePic profilePicPulse';
    const classImgName ='profilePic';
 
    return(
        <img className={classImgName} src={profilePic} alt="LiadPicture"/>
    );
};

export default MyIMG;