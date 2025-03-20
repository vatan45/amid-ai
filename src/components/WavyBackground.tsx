"use client";

import React, { useEffect, useRef } from 'react';

export default function WavyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial dimensions
    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Make canvas taller to cover scroll
    };

    updateDimensions();

    // Wave properties - subtle waves that match AMID.ai
    const waves = [
      { y: canvas.height * 0.25, amplitude: 15, frequency: 0.008, speed: 0.015, color: 'rgba(100, 0, 0, 0.02)' },
      { y: canvas.height * 0.35, amplitude: 25, frequency: 0.006, speed: 0.01, color: 'rgba(90, 0, 90, 0.015)' },
      { y: canvas.height * 0.45, amplitude: 20, frequency: 0.01, speed: 0.02, color: 'rgba(140, 0, 0, 0.013)' },
    ];

    let animationFrameId: number;
    let time = 0;

    // Animation function
    const animate = () => {
      time += 0.03;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x += 5) { // Increase performance by reducing points
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      updateDimensions();

      // Update wave positions based on new canvas height
      waves[0].y = canvas.height * 0.25;
      waves[1].y = canvas.height * 0.35;
      waves[2].y = canvas.height * 0.45;
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
