import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => {
      setIsVisible(false);
      mousePos.current = { x: -100, y: -100 };
      ringPos.current = { x: -100, y: -100 };
    };

    // Hover detection for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Text hover detection (inside terminal body, but not on buttons)
      const inTerminalBody = target.closest('.terminal-body') || target.closest('.terminal-input');
      const inInteractive = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      if (inTerminalBody && !inInteractive) {
        setIsTextHovering(true);
      } else {
        setIsTextHovering(false);
      }

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.terminal-shortcuts') ||
        target.closest('.nav-link')
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement;
      if (!target) {
        setIsHovering(false);
        setIsTextHovering(false);
        return;
      }

      const inTerminalBody = target.closest('.terminal-body') || target.closest('.terminal-input');
      const inInteractive = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      if (inTerminalBody && !inInteractive) {
        setIsTextHovering(true);
      } else {
        setIsTextHovering(false);
      }

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.terminal-shortcuts') ||
        target.closest('.nav-link')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    // Ring follows with smooth lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(animateRing);
    };
    animFrameId.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''} ${isTextHovering ? 'text-hover' : ''}`}
      />
      {/* Outer ring — trails with lerp */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''} ${isTextHovering ? 'text-hover' : ''}`}
      />

      <style>{`
        /* Hide default cursor globally */
        *, *::before, *::after {
          cursor: none !important;
        }

        /* Show native I-beam cursor on terminal elements */
        .terminal-body,
        .terminal-body *,
        .terminal-input,
        .terminal-input * {
          cursor: text !important;
        }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-color);
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          transition: width 0.25s ease, height 0.25s ease, opacity 0.2s ease, background 0.25s ease;
          will-change: transform;
        }
        .cursor-dot.visible { opacity: 1; }
        .cursor-dot.hovering {
          width: 8px; height: 8px;
          background: #fff;
        }
        .cursor-dot.clicking {
          width: 4px; height: 4px;
        }
        .cursor-dot.text-hover {
          opacity: 0 !important;
        }

        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--accent-rgb), 0.5);
          pointer-events: none;
          z-index: 99998;
          opacity: 0;
          transition: width 0.3s ease, height 0.3s ease, opacity 0.2s ease,
                      border-color 0.3s ease, background 0.3s ease;
          will-change: transform;
          background: transparent;
        }
        .cursor-ring.visible { opacity: 1; }
        .cursor-ring.hovering {
          width: 56px; height: 56px;
          border-color: rgba(var(--accent-rgb), 0.3);
          background: rgba(var(--accent-rgb), 0.06);
        }
        .cursor-ring.clicking {
          width: 28px; height: 28px;
          border-color: rgba(var(--accent-rgb), 0.8);
        }
        .cursor-ring.text-hover {
          opacity: 0 !important;
        }

        /* Keep default cursor on mobile / touch */
        @media (hover: none) and (pointer: coarse) {
          *, *::before, *::after {
            cursor: auto !important;
          }
          .cursor-dot, .cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
