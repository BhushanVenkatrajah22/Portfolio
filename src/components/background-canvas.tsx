'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const colors = ['#0066ff', '#00f2fe', '#9d4edd', '#ffffff'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 30000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        // add subtle glow to particles
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
    };

    const render = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-bg-primary select-none pointer-events-none">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid cyber-grid-radial opacity-40" />

      {/* Futuristic Aurora Gradient Mesh (moving blobs) */}
      <div className="absolute inset-0 filter blur-[120px] opacity-25">
        {/* Deep electric blue blob */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-electric-blue/40 animate-[pulse_8s_ease-in-out_infinite]" />
        {/* Cyan spotlight blob */}
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-neon-cyan/20 animate-[pulse_12s_ease-in-out_infinite]" />
        {/* Purple neon blob */}
        <div className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-neon-purple/30 animate-[pulse_10s_ease-in-out_infinite_alternate]" />
      </div>

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Mouse responsive spotlight effect */}
      {isHovered && (
        <div
          className="absolute inset-0 mix-blend-screen transition-opacity duration-1000"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 102, 255, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Soft noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}
