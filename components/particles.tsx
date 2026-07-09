'use client';

import * as React from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  pulse: number;
  pulseSpeed: number;
  depth: number;
  indigo: boolean;
}

/**
 * Live wallpaper: slow-drifting dust-mote particles behind all content.
 * Perf: DPR capped at 2, debounced resize, rAF paused when the tab is
 * hidden, particle count halved on mobile, pointer parallax only on
 * hover-capable devices. Skipped entirely under prefers-reduced-motion.
 */
export function ParticleField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let running = true;
    let rafId = 0;

    const targetCount = () => (window.innerWidth < 768 ? 28 : 64);

    const makeParticle = (initial: boolean): Particle => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + Math.random() * 50,
      r: Math.random() * 1.4 + 0.4,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.15,
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      depth: Math.random() * 0.6 + 0.4,
      indigo: Math.random() < 0.18,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const want = targetCount();
      if (particles.length !== want) {
        particles = Array.from({ length: want }, () => makeParticle(true));
      }
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.pulse += p.pulseSpeed;

        const dx = (mouseX - width / 2) * 0.002 * p.depth;
        const dy = (mouseY - height / 2) * 0.002 * p.depth;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const flicker = (Math.sin(p.pulse) + 1) * 0.5;
        const alpha = p.baseAlpha * (0.55 + flicker * 0.45);
        ctx.beginPath();
        ctx.arc(p.x + dx, p.y + dy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.indigo
          ? `rgba(165, 180, 252, ${alpha})`
          : `rgba(241, 245, 249, ${alpha * 0.85})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (hoverCapable) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
    }

    const onVisibility = () => {
      const wasRunning = running;
      running = !document.hidden;
      if (running && !wasRunning) step();
    };
    document.addEventListener('visibilitychange', onVisibility);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener('resize', onResize);

    resize();
    step();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (hoverCapable) window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-[0.85] motion-reduce:hidden"
    />
  );
}
