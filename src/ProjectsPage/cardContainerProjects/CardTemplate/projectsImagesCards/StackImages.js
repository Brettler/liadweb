import leafletChatIMG from './LeafletChat.png';
import leafletRegisterIMG from './LeafletRegister.png'


function StackedImages() {
    return (
        <div style={{ position: 'relative', width: 'fit-content', height: 'fit-content' }}>
            <img src={leafletChatIMG} alt="First" style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: 'auto' }} />
            <img src={leafletRegisterIMG} alt="Second" style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: 'auto', opacity: '0.5' }} />
        </div>
    );
}

export default StackedImages;