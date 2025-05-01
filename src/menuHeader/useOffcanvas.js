import { Offcanvas } from 'bootstrap';
import {
    useEffect,
    useState,
    useRef
} from 'react';

// Custom hook for phone and desktop design.
function useOffcanvas() {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const canvasRef = useRef(null);
    const canvasObjectRef = useRef(null); // Ref to store the Offcanvas instance.

    useEffect(() => {

        const canvasElement = canvasRef.current;
        if (canvasElement) {
    
            canvasObjectRef.current = new Offcanvas(canvasElement); // Using API from bootstrap.

            const handleHide = () => setIsCanvasOpen(false);
            const handleShow = () => setIsCanvasOpen(true);
            

            //Sync state of the canvas
            canvasElement.addEventListener('hidden.bs.offcanvas', handleHide);
            canvasElement.addEventListener('shown.bs.offcanvas', handleShow);

            return () => {
                canvasElement.removeEventListener('hidden.bs.offcanvas', handleHide);
                canvasElement.removeEventListener('shown.bs.offcanvas', handleShow);
            };
        }
    }, []);

    // This function is passed to the Humburger Componenet and is called when the burger is clicked.
    const toggleCanvas = () => {
        setIsCanvasOpen(prev => !prev); // Triger the animation of the burgerMenu.
        canvasObjectRef.current.toggle() // Show the offcanvas.
    }


    return {canvasRef, isCanvasOpen, toggleCanvas}
}

export default useOffcanvas;