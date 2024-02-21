

import CardAnimation from './CardAnimation/CardAnimation';
import './CardTemplate.css'


function CardTemplate({projectImage}) {

    return(
        <div className="cardTemplate">
            <CardAnimation projectImage={projectImage}/>
        </div>
    )
}

export default CardTemplate;