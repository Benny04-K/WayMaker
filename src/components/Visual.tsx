import { useRef, useEffect } from 'react';

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    type Star = { x: number; y: number; r: number; o: number; speed: number };
    let stars: Star[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 160; i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.3, o: Math.random() * 0.7 + 0.2, speed: Math.random() * 0.0002 + 0.00005 });
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(200,220,255,${s.o})`; ctx.fill(); s.y += s.speed; if (s.y > 1) { s.y = 0; s.x = Math.random(); } });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas id="stars-canvas" ref={canvasRef} />;
}

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) { cursorRef.current.style.left = mx + 'px'; cursorRef.current.style.top = my + 'px'; }
    };
    document.addEventListener('mousemove', move);
    let raf: number;
    const anim = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(anim);
    };
    anim();
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (<><div className="cursor" ref={cursorRef} /><div className="cursor-ring" ref={ringRef} /></>);
}

function use3DTilt(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const over = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateZ(18px)`;
    };
    const out = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', over); el.addEventListener('mouseleave', out);
    return () => { el.removeEventListener('mousemove', over); el.removeEventListener('mouseleave', out); };
  }, [ref]);
}

export function TiltCard({ className, children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  use3DTilt(ref);
  return <div className={className} ref={ref} style={style}>{children}</div>;
}

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}
