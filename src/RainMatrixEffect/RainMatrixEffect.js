import './RainMatrixEffect.css'
import {
  useEffect,
  useRef
} from "react"

const MatrixRainingCode = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to update canvas size based on its parent's size
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      const width = canvas.width = parent.offsetWidth;
      const height = canvas.height = parent.offsetHeight;
      return { width, height };
    };

    let { width, height } = updateCanvasSize();
    let columns = Math.floor(width / 20); // Number of columns for the matrix
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charArray = characters.split("");
    let drops = new Array(columns).fill(1); // Initialize drops

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0f0"; // Green text
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let frameRate = 25;
    let lastFrameTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;
      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      ({ width, height } = updateCanvasSize());
      columns = Math.floor(width / 20);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="matrixCanvas" ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;
