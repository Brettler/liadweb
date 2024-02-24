

//import CardAnimation from './CardAnimation/CardAnimation';
import './CardTemplate.css'

//import './CardAnimation/CardAnimation.css'

function CardTemplate({projectImage, title, description, isAndroidCard}) {


    return(
   
        <>
            {
            isAndroidCard ? 
            (
            <div id='androidCard' class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={projectImage} class="img-fluid rounded-start" alt={title}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
            </div>
            ) : (
            <div class='card h-100'>
            {/*Regular cards view */ }
            <img src={projectImage} class="card-img-top" alt={{title}}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
            </div>

            
            
            <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
        </div>
            )}
        </>
    )
}

export default CardTemplate;