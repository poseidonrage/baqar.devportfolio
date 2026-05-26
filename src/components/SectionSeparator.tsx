import React from 'react';

interface SeparatorProps {
  leftText: string;
  rightText: string;
}

export const SectionSeparator: React.FC<SeparatorProps> = ({ leftText, rightText }) => {
  return (
    <div className="section-separator-wrapper">
      <div className="separator-line"></div>
      <div className="separator-content font-mono">
        <span className="separator-tag">{leftText}</span>
        <div className="separator-glyph">
          <span className="glyph-dot"></span>
          <span className="glyph-pulse"></span>
        </div>
        <span className="separator-tag">{rightText}</span>
      </div>

      <style>{`
        .section-separator-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 1px;
          margin: 4rem 0;
          pointer-events: none;
        }

        .separator-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            var(--border-color) 15%,
            rgba(var(--accent-rgb), 0.3) 40%,
            var(--accent-color) 50%,
            rgba(var(--accent-rgb), 0.3) 60%,
            var(--border-color) 85%,
            transparent 100%
          );
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .separator-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: #080d11; /* Blends with body radial background gradient */
          padding: 0 2rem;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: lowercase;
        }

        .separator-tag {
          opacity: 0.45;
          transition: var(--transition-smooth);
        }

        .section-separator-wrapper:hover .separator-tag {
          opacity: 0.85;
          color: var(--accent-color);
        }

        .separator-glyph {
          position: relative;
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glyph-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }

        .glyph-pulse {
          position: absolute;
          width: 16px;
          height: 16px;
          border: 1px solid var(--accent-color);
          border-radius: 50%;
          animation: separator-pulse 2s infinite ease-out;
          opacity: 0;
        }

        @keyframes separator-pulse {
          0% {
            transform: scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .section-separator-wrapper {
            margin: 2.5rem 0;
          }
          .separator-content {
            gap: 1rem;
            padding: 0 1.25rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};
