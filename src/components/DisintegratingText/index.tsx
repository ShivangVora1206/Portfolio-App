import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  char: string;
  warpX: number;
  warpY: number;
  distance: number;
}

interface DisintegratingTextProps {
  text: string;
  className?: string;
  mousePosition: { x: number; y: number };
  disintegrationRadius?: number;
}

const DisintegratingText: React.FC<DisintegratingTextProps> = ({ 
  text, 
  className = '', 
  mousePosition,
  disintegrationRadius = 150 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [particles, setParticles] = useState<Particle[]>(
    text.split('').map(char => ({
      char,
      warpX: 0,
      warpY: 0,
      distance: 9999
    }))
  );

  // Update particle positions based on mouse with throttling for mobile
  useEffect(() => {
    if (!containerRef.current) return;

    const updateParticles = () => {
      const updatedParticles = charRefs.current.map((charRef, index) => {
        if (!charRef) return particles[index];

        const charBounds = charRef.getBoundingClientRect();
        const charCenterX = charBounds.left + charBounds.width / 2;
        const charCenterY = charBounds.top + charBounds.height / 2;

        // Calculate distance from mouse to character
        const dx = mousePosition.x - charCenterX;
        const dy = mousePosition.y - charCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < disintegrationRadius && distance > 0) {
          // Calculate warp strength (stronger when closer)
          const strength = 1 - (distance / disintegrationRadius);
          const warpForce = strength * strength * 25; // Reduced force for subtle warping

          // Calculate angle from mouse to character
          const angle = Math.atan2(dy, dx);

          // Create elastic warp effect - push away from cursor
          const warpX = Math.cos(angle) * warpForce;
          const warpY = Math.sin(angle) * warpForce;

          return {
            ...particles[index],
            warpX,
            warpY,
            distance
          };
        }

        // Smoothly return to original position
        return {
          ...particles[index],
          warpX: particles[index].warpX * 0.85,
          warpY: particles[index].warpY * 0.85,
          distance
        };
      });

      setParticles(updatedParticles);
    };

    // Use requestAnimationFrame for smoother animations on mobile
    const rafId = requestAnimationFrame(updateParticles);

    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition, disintegrationRadius]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {text.split('').map((char, index) => {
        const particle = particles[index];
        const isWarped = particle && particle.distance < disintegrationRadius;
        const warpStrength = isWarped ? (1 - particle.distance / disintegrationRadius) : 0;
        const chromaticOffset = warpStrength * 5; // Chromatic aberration based on warp

        return (
          <span
            key={index}
            ref={el => charRefs.current[index] = el}
            className="relative inline-block"
            style={{
              transform: `translate(${particle?.warpX || 0}px, ${particle?.warpY || 0}px)`,
              willChange: 'transform',
              transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' // Elastic easing
            }}
          >
            {/* Red channel - offset left and up */}
            {isWarped && chromaticOffset > 0.5 && (
              <span 
                className="absolute inset-0 pointer-events-none"
                style={{
                  color: '#ff0000',
                  transform: `translate(${-chromaticOffset}px, ${-chromaticOffset * 0.5}px)`,
                  mixBlendMode: 'screen',
                  opacity: Math.min(warpStrength * 0.8, 0.6),
                }}
              >
                {char}
              </span>
            )}
            
            {/* Blue/Cyan channel - offset right and down */}
            {isWarped && chromaticOffset > 0.5 && (
              <span 
                className="absolute inset-0 pointer-events-none"
                style={{
                  color: '#00ffff',
                  transform: `translate(${chromaticOffset}px, ${chromaticOffset * 0.5}px)`,
                  mixBlendMode: 'screen',
                  opacity: Math.min(warpStrength * 0.8, 0.6),
                }}
              >
                {char}
              </span>
            )}
            
            {/* Main character */}
            <span 
              style={{
                opacity: 1,
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default DisintegratingText;
