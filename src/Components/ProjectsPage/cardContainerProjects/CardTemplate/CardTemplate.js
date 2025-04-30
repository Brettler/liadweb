import './CardTemplate.css'
import CardSkillsIcons from './CardSkillsIcons/CardSkillsIcons'
import GithubLinkProject from './GithubLinkProject/GithubLinkProject';
import RainMatrixEffect from '../../../../RainMatrixEffect/RainMatrixEffect';

function CardTemplate({projectImage, title, description, iconsArr, projectURL, isAndroidCard}) {

    return(
        <>
            {
            isAndroidCard ? 
            (
            <div id='androidCard' className="card mb-3 h-100">
                <div id='androidRow' className="row g-0">
                  <div id='androidImgContainer' className="col-md-5">
                    <GithubLinkProject projectURL={projectURL} isAndroidCard={isAndroidCard}/>
                    <RainMatrixEffect/>

                    <img id='cardAndroidImg' src={projectImage} className="img-fluid rounded-center" alt={title}/>                    
                   

                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                    <CardSkillsIcons iconsArr={iconsArr}/>
                </div>
            </div>
            ) : (
            <div id='regularCard' className='card h-100'>
                {/*Regular cards view */ }
                <span className='regularCardImgContainer'>
                    <GithubLinkProject projectURL={projectURL} isAndroidCard={isAndroidCard}/>
                    <RainMatrixEffect/>

                    <img id ='regulaerCardImg' src={projectImage} className="card-img-top" alt={{title}}/>
                </span>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <CardSkillsIcons iconsArr={iconsArr}/>
                </div>
            </div>
            )}
        </>
    )
}

export default CardTemplate;