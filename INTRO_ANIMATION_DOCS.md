# ROBUSTRIX Intro Animation Documentation

## Overview

A cinematic, agency-level intro animation for the ROBUSTRIX brand featuring sophisticated GSAP animations, staggered letter reveals, and smooth transitions.

## Installation

1. Install GSAP (if not already installed):
```bash
npm install gsap
```

## Integration

The intro animation is already integrated into `App.jsx`. It will automatically show on first visit per browser session.

### How It Works

- **Session-based**: Uses `sessionStorage` to track if the intro has been shown
- **Automatic**: Shows automatically when the app loads (if not seen this session)
- **Non-blocking**: The main app content loads behind the intro overlay
- **Smooth transition**: Fades out gracefully before unmounting

## Component Structure

### Files

- `src/components/IntroAnimation.jsx` - Main React component with GSAP timeline logic
- `src/components/IntroAnimation.module.css` - Styles for the intro animation

### Key Features

1. **Staggered Letter Animation**: Each letter of "ROBUSTRIX" animates individually with:
   - Scale from 0.6 to 1.0
   - Opacity fade-in
   - Blur removal (10px → 0px)
   - Y-axis motion (40px → 0px)
   - Stagger from center outward

2. **Tagline Reveal**: "Science in the Machine" appears with:
   - Opacity fade-in
   - Letter spacing animation (0.5em → 0.15em)
   - Subtle upward motion

3. **Visual Effects**:
   - Dark gradient background with subtle animation
   - Noise/grain texture overlay
   - Optional light sweep effect
   - Text shadows for depth

4. **Performance Optimizations**:
   - GPU-accelerated transforms (`translateZ(0)`)
   - `will-change` hints for optimal rendering
   - Efficient GSAP timeline cleanup

## Customization Guide

### Adjusting Animation Timing

Edit the timeline durations in `IntroAnimation.jsx`:

```javascript
// Phase 1: Letter animation duration
duration: 1.2,  // Increase for slower, decrease for faster

// Phase 2: Brand bounce
duration: 0.3,  // Bounce up
duration: 0.4,  // Bounce back

// Phase 3: Tagline reveal
duration: 1.0,  // Tagline fade-in speed

// Phase 4: Hold time
duration: 0.8,  // How long to display before fade out

// Phase 5: Fade out
duration: 0.8,  // Content fade out
duration: 0.6,  // Container fade out
```

### Adjusting Stagger Timing

```javascript
stagger: {
  amount: 1.0,  // Total time for all letters (increase for slower, decrease for faster)
  from: 'center', // Change to 'start' or 'end' for different stagger direction
  ease: 'power4.out' // Easing function
}
```

### Changing Easing Curves

Available GSAP easing options:
- `power1.out`, `power2.out`, `power3.out`, `power4.out` (increasing acceleration)
- `expo.out`, `expo.in`, `expo.inOut` (exponential curves)
- `circ.out`, `back.out` (circular/overshoot effects)
- `elastic.out` (bouncy effect)

### Adjusting Initial States

```javascript
// Letter initial state
gsap.set(letters, {
  opacity: 0,
  scale: 0.6,      // Change starting scale (0.4 = smaller start, 0.8 = larger start)
  filter: 'blur(10px)', // Change blur amount
  y: 40,           // Starting Y position (increase for more dramatic entrance)
});

// Tagline initial state
gsap.set(tagline, {
  opacity: 0,
  letterSpacing: '0.5em', // Starting letter spacing
  y: 20,                  // Starting Y position
});
```

### Customizing Colors

Edit `IntroAnimation.module.css`:

```css
/* Brand text color */
.brandContainer {
  color: #FFFFFF; /* Change to any color */
}

/* Tagline color */
.tagline {
  color: #15E3FF; /* Change to match your brand */
}

/* Background */
.introContainer {
  background: #000000; /* Main background color */
}

/* Gradient colors */
.gradientBackground {
  background: radial-gradient(
    ellipse at center,
    rgba(2, 44, 54, 0.6) 0%,    /* Inner gradient color */
    rgba(3, 31, 39, 0.8) 40%,   /* Mid gradient color */
    #000000 100%                 /* Outer gradient color */
  );
}
```

### Adjusting Text Effects

```css
/* Text shadow intensity */
.letter {
  text-shadow: 
    0 0 20px rgba(2, 196, 249, 0.3),  /* Glow color and intensity */
    0 0 40px rgba(2, 196, 249, 0.15), /* Outer glow */
    0 4px 8px rgba(0, 0, 0, 0.5);     /* Drop shadow */
}
```

### Font Sizes (Responsive)

```css
/* Brand name size */
.brandContainer {
  font-size: clamp(48px, 12vw, 120px); /* [min, preferred, max] */
}

/* Tagline size */
.tagline {
  font-size: clamp(14px, 2.5vw, 24px);
}
```

### Disabling Visual Effects

To disable specific effects, comment out or remove the elements:

```jsx
{/* Disable noise overlay */}
{/* <div className={styles.noiseOverlay} aria-hidden="true" /> */}

{/* Disable gradient background */}
{/* <div className={styles.gradientBackground} aria-hidden="true" /> */}

{/* Disable light sweep */}
{/* <div className={styles.lightSweep} aria-hidden="true" /> */}
```

## Testing

### Testing the Animation

1. **First visit**: Clear `sessionStorage` and reload:
```javascript
// In browser console
sessionStorage.removeItem('robustrix-intro-shown');
location.reload();
```

2. **Skip the animation** (for development):
```javascript
// In browser console
sessionStorage.setItem('robustrix-intro-shown', 'true');
```

3. **View on different devices**: The animation is responsive and adapts to screen sizes

### Performance Testing

- Open Chrome DevTools → Performance tab
- Record while the intro plays
- Check for:
  - 60fps performance
  - No layout shifts
  - Smooth animations

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may need vendor prefixes for some CSS)
- Mobile browsers: Full support with responsive adjustments

## Accessibility

- Respects `prefers-reduced-motion` media query
- All decorative elements have `aria-hidden="true"`
- Animation doesn't block page content from loading
- Screen readers can access content behind the overlay

## Troubleshooting

### Animation doesn't play

1. Check that GSAP is installed: `npm list gsap`
2. Check browser console for errors
3. Verify `sessionStorage` is enabled in browser
4. Ensure component refs are properly mounted

### Animation is choppy

1. Check browser DevTools Performance tab
2. Ensure GPU acceleration is working (check `transform: translateZ(0)` styles)
3. Reduce complexity if needed (disable noise overlay, reduce blur effects)

### Letters don't stagger correctly

1. Ensure all letter refs are being set (check `lettersRef.current.length`)
2. Verify GSAP timeline is created correctly
3. Check that stagger amount is appropriate for number of letters

## Timeline Breakdown

Total animation duration: ~5.5 seconds

1. **0.0s - 0.3s**: Initial delay
2. **0.3s - 1.5s**: Letters assemble (1.2s duration + 1.0s stagger)
3. **1.0s - 1.8s**: Brand bounce (overlaps with letters)
4. **1.6s - 2.6s**: Tagline reveal
5. **2.6s - 3.4s**: Hold/pause
6. **3.1s - 3.9s**: Content fade out
7. **3.5s - 4.1s**: Container fade out
8. **4.4s**: Animation complete, unmount

## Advanced Customization

### Custom Brand Text

To change the brand name, update the `brandText` constant:

```javascript
const brandText = 'YOUR BRAND';
```

### Custom Tagline

To change the tagline, update the `taglineText` constant:

```javascript
const taglineText = 'Your Custom Tagline';
```

### Adding More Animation Phases

Add additional timeline phases:

```javascript
// After existing phases
tl.to(element, {
  // Your animation properties
  duration: 1.0,
  ease: 'power2.out'
}, '-=0.5'); // Position relative to previous animation
```

## Credits

- Built with GSAP (GreenSock Animation Platform)
- Inspired by premium agency portfolios
- Designed for ROBUSTRIX brand identity


