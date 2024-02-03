import './MenuButtons.css'


function WelcomePage() {

    return(

    <div className="menu">


            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
                </li>
            </ul>

    </div>

        // <div className='container-fluid'>

            
        //     <div id='home' className='homePage'>

        //     100% wide until small breakpoint




        //     </div>

        // </div>

        // <>
        // <div class="container-sm">100% wide until small breakpoint</div>
        // <div class="container-md">100% wide until medium breakpoint</div>
        // <div class="container-lg">100% wide until large breakpoint</div>
        // <div class="container-xl">100% wide until extra large breakpoint</div>
        // <div class="container-xxl">100% wide until extra extra large breakpoint</div>
        // </>
    );


}

export default WelcomePage;