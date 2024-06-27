import React, { useRef, useEffect } from 'react';

const ShirtCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        // Example drawing on the canvas
        context.fillStyle = 'blue';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    return (
        <canvas id="canvas-id" ref={canvasRef} width="500" height="500"></canvas>
    );
};

export default ShirtCanvas;