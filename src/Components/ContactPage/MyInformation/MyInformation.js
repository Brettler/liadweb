
import mailBoxIcon from '../iconsImg/icons8-email.png'
import phoneIcon from '../iconsImg/icons8-phone.png'

function MyInformation() {


    return(
        <>
        
        
                                {/* Wrap the input and the icon in a div */}
                        <div id='phoneContainer' className="form-dotted-item h-10 w-full flex items-center bg-sky-500 rounded-md py-4">
                            {/* Render the icon */}
                            <img src={phoneIcon} alt="Mailbox" id='myPhoneIcon' className="mailBoxIcon h-12 w-12 ml-2 mr-2" />

                            {/* Adjust the input styles */}
                            <span
                                type='text'
                                id='myPhone'
                                className='flex-1 bg-transparent placeholder-white bg-sky-500'
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
        
        
        
        
        </>


    )
}

export default MyInformation;