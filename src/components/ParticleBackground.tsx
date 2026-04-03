import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: -1000, y: -1000 };

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; baseOpacity: number;
      pulse: number; pulseSpeed: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const count = 80;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    for (let i = 0; i < count; i++) {
      const baseOpacity = Math.random() * 0.5 + 0.1;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: baseOpacity,
        baseOpacity,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      particles.forEach((p) => {
        // Mouse interaction - particles glow near cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += dx / dist * force * 0.02;
          p.vy += dy / dist * force * 0.02;
          p.opacity = Math.min(1, p.baseOpacity + force * 0.5);
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.05;
        }

        // Pulse effect
        p.pulse += p.pulseSpeed;
        const pulseSize = p.size + Math.sin(p.pulse) * 0.5;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 3);
        gradient.addColorStop(0, `hsla(38, 92%, 55%, ${p.opacity})`);
        gradient.addColorStop(1, `hsla(38, 92%, 55%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(38, 92%, 55%, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = 0.1 * (1 - dist / 130);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(38, 92%, 55%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1, pointerEvents: "auto" }}
    />
  );
};

export default ParticleBackground;
