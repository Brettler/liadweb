
import './ContactPage.css'

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

return (
    <div className="contactPage relative flex flex-col items-center justify-center min-h-screen">
        <div className='contactTitle absolute text-3xl sm:text-6xl top-0 pt-16 pb-4 text-white'>Contact Me!</div>

        <div className='formContainer container flex flex-col items-center justify-center py-24'>
            <form className='container grid w-5/6 h-full sm:gap-12 gap-8 sm:m-0 sm:py-12 py:6 mt-4 '  action='#'>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-12 gap-8'>
                        <input type='text' id='mYphone' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='mY Phone' autoComplete='off'></input>

                        <input type='text' id='mYemail' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='mY Email Adress' autoComplete='off'></input>

                        <input type='text' id='name' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='Name' autoComplete='off'></input>

                        <input type='text' id='email' className='form-dotted-item h-10 w-full p-4  placeholder-white' placeholder='Email Adress' autoComplete='off'></input>
                </div>
                
                <div className='flex justify-center'>
                    <input type='text' id='subject' className='form-dotted-item h-10 sm:w-1/2 w-full p-4 rounded-md  bg-slate-900 text-white placeholder-white' placeholder='Subject' autoComplete='off'></input>
                </div>

                <div className="flex justify-center h-full">
                    <textarea id='message' className='form-dotted-item text-wrap resize-none sm:w-1/2 w-full p-4 h-40 rounded-md  bg-slate-900 text-white placeholder-white' placeholder="Message"> 
                    
                    </textarea>
                </div>

                <div className='flex justify-center'>
                    <button type='button' id='btnSend' className='form-dotted-button h-12 sm:w-1/2 w-full '>Send</button>
                </div>

            </form>
        </div>
    </div>

    )

}

export default ContactPage;