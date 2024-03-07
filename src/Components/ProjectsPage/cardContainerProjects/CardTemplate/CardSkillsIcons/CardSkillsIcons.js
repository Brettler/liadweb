import './CardSkillsIcons.css'


function CardSkillsIcons({iconsArr}) {

      
    return (
            <div className='cardIconsSkillContainer'>
                <span>
                    {iconsArr.map((icon, index) => {
                            // Check if the icon includees 'svg' to decide if it's class name or an private icon I added.
                            if (icon.includes('.svg') || icon.includes('.png')) {
                                return <img id='imgIconProjects' key={index} src={icon} alt={`icon ${index}`} className='ci ci-2x' />
                            } else {
                                // Icon classes
                                return <i key={index} className={`ci ${icon}`}></i>

                            }

                    })}
                </span>

            </div>
    )
}

export default CardSkillsIcons;