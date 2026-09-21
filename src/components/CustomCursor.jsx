import React, { useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

const HOVER_SELECTOR = 'a, button, .btn, [data-cursor-hover], input, textarea, select';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const enabled = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    enabled.current = true;
    document.body.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current.x === 0 && ring.current.y === 0) {
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
      }
    };

    const handleOver = (e) => {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) {
        ringEl && ringEl.classList.add('is-hovering');
      }
    };

    const handleOut = (e) => {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) {
        ringEl && ringEl.classList.remove('is-hovering');
      }
    };

    const handleDown = () => ringEl && ringEl.classList.add('is-pressed');
    const handleUp = () => ringEl && ringEl.classList.remove('is-pressed');

    const handleLeaveWindow = () => {
      if (dot) dot.style.opacity = '0';
      if (ringEl) ringEl.style.opacity = '0';
    };
    const handleEnterWindow = () => {
      if (dot) dot.style.opacity = '1';
      if (ringEl) ringEl.style.opacity = '1';
    };

    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringEl) {
        ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleOver, true);
    document.addEventListener('mouseout', handleOut, true);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleLeaveWindow);
    document.addEventListener('mouseenter', handleEnterWindow);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver, true);
      document.removeEventListener('mouseout', handleOut, true);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleLeaveWindow);
      document.removeEventListener('mouseenter', handleEnterWindow);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
