import './CardTemplate.css'
import CardIcons from './CardIcons/CardIcons'
import GithubLinkProject from './GithubLinkProject/GithubLinkProject';
import RainMatrixEffect from '../../../../RainMatrixEffect/RainMatrixEffect';


function CardTemplate({projectImage, title, description, iconsArr, projectURL, isAndroidCard}) {



    return(
        <>
            {
            isAndroidCard ? 
            (
            <div id='androidCard' class="card mb-3 h-100">
                <div id='androidRow' class="row g-0">
                  <div id='androidImgContainer' class="col-md-5">
                    <img id='cardAndroidImg' src={projectImage} class="img-fluid rounded-center" alt={title}/>
                    <GithubLinkProject projectURL={projectURL}/>
                   

                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                    <CardIcons iconsArr={iconsArr}/>
                </div>
            </div>
            ) : (
            <div class='card h-100'>
                {/*Regular cards view */ }
                <span className='regularCardImgContainer'>
                    <GithubLinkProject projectURL={projectURL}/>
                    <RainMatrixEffect/>

                    <img id ='regulaerCardImg' src={projectImage} class="card-img-top" alt={{title}}/>
                </span>

                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <CardIcons iconsArr={iconsArr}/>
                </div>
            </div>
            )}
        </>
    )
}

export default CardTemplate;