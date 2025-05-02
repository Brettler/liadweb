
import './ContactPage.css'
import { useState } from 'react';
import MyInformation from './MyInformation/MyInformation';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import {database} from '../../firebaseConfig'
// import { addDoc, collection } from "firebase/firestore";

function ContactPage() {


/* 
For flex-direction: row (the default):

justify-content affects horizontal alignment (left-to-right in LTR languages).
align-items affects vertical alignment (top-to-bottom).
*/

/*
For flex-direction: column:

justify-content affects vertical alignment (top-to-bottom). --> justify-center 
align-items affects horizontal alignment (left-to-right in LTR languages). ---> items-center
Given this, under a flex-direction: column setup:

justify-content: center; will center the children vertically within the container (along the main axis, which is now vertical).
align-items: center; will center the children horizontally within the container (along the cross axis, which is now horizontal).

*/

    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [successMessageSent, setSuccessMessageSent] = useState('')

    // const messagesCollectionRef = collection(database, 'ContactMessages');

    // // Save the message to firebase
    // const saveMessage = (username, userEmail, userSubject, userMessage) => {

    //     // Create new object will all out data.
    //     addDoc(messagesCollectionRef, {
    //         name: username,
    //         email: userEmail,
    //         subject: userSubject,
    //         message: userMessage

    //     }).then(() => {
    //         setUsername('');
    //         setUserEmail('');
    //         setUserSubject('');
    //         setUserMessage('');
    //         setSuccessMessageSent('Your Message Sent Successfully, Will Be Touch Soon.')


    //         setTimeout(() => setSuccessMessageSent(''), 5000)
    //         //alert("Your Message Sent Successfully, Will Be Touch Soon.");
    //     }).catch((err) => {
    //         alert(err.message)
    //     })

    // }

    // // Create new message when the user submit the form
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     saveMessage(username, userEmail, userSubject, userMessage)
    // }


    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();

      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      console.log(serviceID);
      console.log(templateID);
      console.log(publicKey);


      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setUsername('');
            setUserEmail('');
            setUserSubject('');
            setUserMessage('');
            setSuccessMessageSent('Your Message Sent Successfully, Will Be Touch Soon.')
            setTimeout(() => setSuccessMessageSent(''), 5000)

          },
          (error) => {
            setSuccessMessageSent(error.text)
          },
        );
    };



    return (
        <div className="contactPage relative flex flex-col items-center justify-center min-h-screen">
            <div className='contactTitle absolute text-3xl sm:text-6xl top-0 sm:pt-12 pt-8 pb-8 text-white'>Contact Me!</div>

            <div className='formContainer container flex flex-col items-center justify-center sm:pb-4 pt-24'>
                <form className='container grid w-5/6 sm:gap-16 gap-8 sm:m-0 sm:py-12 sm:pb-20 pr:32 py:6' 
                    onSubmit={sendEmail}
                    ref={form}
                    action='#'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-8'>

                        <MyInformation/>

                        <input type='text' id='name' className='form-dotted-item h-10 w-full p-4  placeholder-white'
                                required placeholder='Your Name' autoComplete='off' name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                        <input type='email' id='email' className='form-dotted-item h-10 w-full p-4  placeholder-white'
                                required placeholder='Your Email Adress' autoComplete='off'  name="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
                    </div>
                    
                    <div className='flex justify-center'>
                        <input type='text' id='subject' className='form-dotted-item h-10 sm:w-1/2 w-full p-4 rounded-md  bg-slate-900 text-white placeholder-white'
                                required placeholder='Subject' autoComplete='off' name="userSubject" value={userSubject} onChange={(e) => setUserSubject(e.target.value)}></input>
                    </div>

                    <div className="flex justify-center">
                        <textarea id='message' className='form-dotted-item text-wrap resize-none sm:w-1/2 w-full p-4 h-40 rounded-md  bg-slate-900 text-white placeholder-white'
                                required placeholder="Message" name='userMessage' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}> 
                        
                        </textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' id='btnSend' className='form-dotted-button h-12 sm:w-1/2 w-full '>Send</button>
                    </div>


                    <div className='flex justify-center h-20'>

                        <p className='messageSubmitSuccess'>{successMessageSent}</p>

                    </div>

                </form>
            </div>
        </div>

    )

}

export default ContactPage;