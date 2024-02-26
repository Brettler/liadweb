

//import CardAnimation from './CardAnimation/CardAnimation';
import './CardTemplate.css'
import CardIcons from './CardIcons/CardIcons'
//import './CardAnimation/CardAnimation.css'

function CardTemplate({projectImage, title, description, iconsArr, isAndroidCard}) {



    return(
   
        <>
            {
            isAndroidCard ? 
            (
            <div id='androidCard' class="card mb-3 h-100">
                <div id='androidRow' class="row g-0">
                  <div id='androidImgContainer' class="col-md-5">
                    <img id='cardAndroidImg' src={projectImage} class="img-fluid rounded-center" alt={title}/>
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">
                            <small class="text-body-secondary"><CardIcons iconsArr={iconsArr}/></small>
                        </p>
                    </div>
                  </div>
                </div>
            </div>
            ) : (
            <div class='card h-100'>
                {/*Regular cards view */ }
                <img id ='regulaerCardImg' src={projectImage} class="card-img-top" alt={{title}}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary"><CardIcons iconsArr={iconsArr}/></small>
                </div>
            </div>
            )}
        </>
    )
}

export default CardTemplate;