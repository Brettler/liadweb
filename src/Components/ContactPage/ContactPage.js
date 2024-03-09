
import './ContactPage.css'
//import mailBoxIcon from './iconsImg/mailbox2-flag.svg'
import mailBoxIcon from './iconsImg/icons8-email.png'
import phoneIcon from './iconsImg/icons8-phone.png'

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


const onSubmit = (e) => {

    e.preventDefault();
    console.log('Form submitted');


    console.log(e)

}

return (
    <div className="contactPage relative flex flex-col items-center justify-center min-h-screen">
        <div className='contactTitle absolute text-3xl sm:text-6xl top-0 pt-16 pb-4 text-white'>Contact Me!</div>

        <div className='formContainer container flex flex-col items-center justify-center sm:py-24 pt-32 pb-16'>
            <form className='container grid w-5/6 h-full sm:gap-12 gap-8 sm:m-0 sm:py-12 pr:32 py:6 mt-4' 
                onSubmit={onSubmit}
                action='#'>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-12 gap-8'>

                    {/* Wrap the input and the icon in a div */}
                    <div id='phoneContainer' className="form-dotted-item h-10 w-full flex items-center bg-sky-500 rounded-md py-4">
                        {/* Render the icon */}
                        <img src={phoneIcon} alt="Mailbox" id='myPhoneIcon' className="mailBoxIcon h-12 w-12 ml-2 mr-2" />

                        {/* Adjust the input styles */}
                        <span
                            type='text'
                            id='myPhone'
                            className='flex-1 bg-transparent placeholder-white bg-sky-500'
                            placeholder='Phone'
                            autoComplete='off'

                        >
                        My Phone: (+972) 0547451234
                        </span>
                    </div>


                    {/* Wrap the input and the icon in a div */}
                    <div id='mailContainer' className="form-dotted-item h-10 w-full flex items-center bg-sky-500 rounded-md py-4">
                        {/* Render the icon */}
                        <img src={mailBoxIcon} alt="Mailbox" id='myMailBoxIcon' className="mailBoxIcon h-12 w-12 ml-2 mr-2" />

                        {/* Adjust the input styles */}
                        <span
                            type='text'
                            id='myEmail'
                            className='flex-1 bg-transparent placeholder-white bg-sky-500'
                            autoComplete='off'

                        >
                        E-Mail: liad.brettler@gmail.com
                        </span>
                    </div>





                    <input type='text' id='name' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='Your Name' autoComplete='off' name="name" ></input>

                    <input type='email' id='email' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='Your Email Adress' autoComplete='off'  name="email" ></input>
                </div>
                
                <div className='flex justify-center'>
                    <input type='text' id='subject' className='form-dotted-item h-10 sm:w-1/2 w-full p-4 rounded-md  bg-slate-900 text-white placeholder-white' placeholder='Subject' autoComplete='off'  ></input>
                </div>

                <div className="flex justify-center h-full">
                    <textarea id='message' className='form-dotted-item text-wrap resize-none sm:w-1/2 w-full p-4 h-40 rounded-md  bg-slate-900 text-white placeholder-white' placeholder="Message" > 
                    
                    </textarea>
                </div>

                <div className='flex justify-center'>
                    <button type='submit' id='btnSend' className='form-dotted-button h-12 sm:w-1/2 w-full '>Send</button>
                </div>

            </form>

        </div>
    </div>

    )

}

export default ContactPage;