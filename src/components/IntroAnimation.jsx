import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './IntroAnimation.module.css';

/**
 * IntroAnimation Component
 * 
 * A cinematic, agency-level intro animation for ROBUSTRIX brand.
 * Features:
 * - Fullscreen overlay with dark, science-inspired background
 * - Staggered letter-by-letter animation for "ROBUSTRIX"
 * - Elegant tagline reveal "Science in the Machine"
 * - Smooth transition into homepage
 * - Runs once per session using sessionStorage
 * 
 * Animation Timeline:
 * 1. Initial state: Letters invisible, slightly scaled down, blurred
 * 2. Letters animate in with staggered scale, opacity, blur, and Y-axis motion
 * 3. Tagline fades in with tracking expansion
 * 4. Optional light sweep/mask reveal
 * 5. Fade out and unmount
 */

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);
  const lettersRef = useRef([]);
  const timelineRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const brandText = 'ROBUSTRIX';
  const taglineText = 'Science in the Machine';

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const initTimer = requestAnimationFrame(() => {
      const container = containerRef.current;
      const brand = brandRef.current;
      const tagline = taglineRef.current;
      const letters = lettersRef.current.filter(Boolean); // Filter out null refs

      if (!container || !brand || !tagline || letters.length === 0) {
        console.warn('IntroAnimation: Refs not ready, animation skipped');
        return;
      }
      
      // Prevent double execution (React StrictMode in dev causes double renders)
      if (hasAnimatedRef.current) {
        return;
      }
      hasAnimatedRef.current = true;

      // Create master timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Call completion callback after brief delay to ensure fade completes
          setTimeout(() => {
            onComplete?.();
          }, 300);
        }
      });

      // Set initial states - letters come from both sides
      gsap.set(container, { opacity: 1 });
      const centerIndex = Math.floor(letters.length / 2);
      
      // Set each letter - left side from left, right side from right
      letters.forEach((letter, index) => {
        let startX = 0;
        if (index < centerIndex) {
          // Left side letters - come from left (more space)
          startX = -500;
        } else if (index > centerIndex) {
          // Right side letters - come from right (more space)
          startX = 500;
        } else {
          // Center letter(s) - can come from center or slight offset
          startX = 0;
        }
        
        gsap.set(letter, {
          opacity: 0,
          scale: 0.3,
          x: startX,
          y: 0,
          transformOrigin: 'center center'
        });
      });
      gsap.set(tagline, {
        opacity: 0,
        letterSpacing: '1em',
        y: 30,
        scale: 0.8
      });

      // Phase 1: Letters assemble from both sides with slower, smoother movement
      // Create stagger that goes from edges toward center
      letters.forEach((letter, index) => {
        let staggerTime = 0.3;
        if (index < centerIndex) {
          // Left side: stagger from left edge
          staggerTime = 0.3 + (index * 0.12);
        } else if (index > centerIndex) {
          // Right side: stagger from right edge
          const rightIndex = letters.length - 1 - index;
          staggerTime = 0.3 + (rightIndex * 0.12);
        } else {
          // Center letter: comes in last
          staggerTime = 0.3 + ((centerIndex - 1) * 0.12) + 0.06;
        }
        
        tl.to(letter, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.8, // Slower duration
          ease: 'power2.out' // Smoother easing
        }, staggerTime);
      });

      // Phase 2: Scale up at the end - slower, smoother
      const lastLetterTime = 0.3 + ((centerIndex - 1) * 0.12) + 0.8;
      tl.to(brand, {
        scale: 1.08,
        duration: 0.4,
        ease: 'power2.out'
      }, lastLetterTime + 0.2);

      // Phase 3: Tagline reveal
      tl.to(tagline, {
        opacity: 1,
        letterSpacing: '0.15em',
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3');

      // Phase 4: Hold
      tl.to({}, { duration: 0.8 });

      // Phase 5: Scale up at the end before exit
      tl.to([brand, tagline], {
        scale: 1.15,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.4')
      .to([brand, tagline], {
        opacity: 0,
        scale: 0.95,
        y: -20,
        duration: 0.5,
        ease: 'power2.in'
      }, '-=0.2');

      // Phase 6: Container fade out
      tl.to(container, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.3');

      timelineRef.current = tl;
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(initTimer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.introContainer}>
      {/* Technical grid overlay for robotic feel */}
      <div className={styles.gridOverlay} aria-hidden="true" />
      
      {/* Scan line effect */}
      <div className={styles.scanLine} aria-hidden="true" />
      
      {/* Noise/grain overlay for texture */}
      <div className={styles.noiseOverlay} aria-hidden="true" />
      
      {/* Animated gradient background */}
      <div className={styles.gradientBackground} aria-hidden="true" />
      
      {/* Sharp light sweep effect */}
      <div className={styles.lightSweep} aria-hidden="true" />

      {/* Content container */}
      <div className={styles.contentWrapper}>
        {/* Brand name with individual letters */}
        <div ref={brandRef} className={styles.brandContainer}>
          {brandText.split('').map((letter, index) => (
            <span
              key={`letter-${index}-${letter}`}
              ref={(el) => {
                if (el) lettersRef.current[index] = el;
              }}
              className={styles.letter}
              style={{ display: letter === ' ' ? 'inline-block' : 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className={styles.tagline}>
          {taglineText}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
