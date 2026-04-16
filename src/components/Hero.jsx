import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

const LARGE_FRAME_COUNT = 220;
const SMALL_FRAME_COUNT = 40;
const MOBILE_BREAKPOINT = 768;

const IMAGE_SETS = {
  large: 'ezgif-3092f86c1e3bc288-jpg',
  small: 'ezgif-760ec97de81ae793-jpg',
};

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentSet, setCurrentSet] = useState('large');
  const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);
  const [mobileHeight, setMobileHeight] = useState(null);

  const imagesRef = useRef([]);
  const playhead = useRef({ frame: 0 });
  const lastFrameRef = useRef(-1);
  const rafRef = useRef(null);
  const scrollCtx = useRef(null);

  // ✅ Image path
  const getImagePath = useCallback((setType, index) => {
    const padded = index.toString().padStart(3, '0');
    return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
  }, []);

  // ✅ FIXED RENDER (NO CROP ON MOBILE)
  const renderFrame = useCallback((frame) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const index = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(frame)));

    if (index === lastFrameRef.current) return;
    lastFrameRef.current = index;

    const img = imagesRef.current[index];
    if (!img) return;

    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    ctx.clearRect(0, 0, width, height);

    const canvasRatio = width / height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    if (isMobile) {
      // ✅ MOBILE: canvas is sized to image ratio → draw full canvas, zero black bars, zero crop
      drawWidth = width;
      drawHeight = height;
    } else {
      // ✅ COVER → DESKTOP (object-position: top — anchors image to top, no sky cropping)
      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetY = 0; // top-aligned, not centered
      } else {
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
      }
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // ✅ RAF loop
  const updateFrame = useCallback(() => {
    renderFrame(playhead.current.frame);
    rafRef.current = requestAnimationFrame(updateFrame);
  }, [renderFrame]);

  // ✅ Preload
  const preloadImages = useCallback(async (setType, total) => {
    setIsLoaded(false);
    setLoadingProgress(0);

    let loaded = 0;

    const imgs = await Promise.all(
      Array.from({ length: total }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = getImagePath(setType, i + 1);

          img.onload = () => {
            loaded++;
            setLoadingProgress(Math.floor((loaded / total) * 100));
            resolve(img);
          };

          img.onerror = () => resolve(null);
        });
      })
    );

    imagesRef.current = imgs.filter(Boolean);
    setIsLoaded(true);
  }, [getImagePath]);

  // ✅ Responsive switch
  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setCurrentSet(isMobile ? 'small' : 'large');
      setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // ✅ Compute mobile container height from image's natural aspect ratio
  useEffect(() => {
    if (!isLoaded || imagesRef.current.length === 0) return;

    const computeHeight = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (isMobile) {
        const img = imagesRef.current[0];
        const imgRatio = img.naturalWidth / img.naturalHeight;
        // height = full viewport width ÷ image ratio → no black bars, no crop
        setMobileHeight(window.innerWidth / imgRatio);
      } else {
        setMobileHeight(null);
      }
    };

    computeHeight();
    window.addEventListener('resize', computeHeight);
    return () => window.removeEventListener('resize', computeHeight);
  }, [isLoaded]);

  // ✅ Hide loader from DOM after fade-out
  useEffect(() => {
    if (!isLoaded) return;
    const t = setTimeout(() => setShowLoader(false), 1400);
    return () => clearTimeout(t);
  }, [isLoaded]);

  // ✅ Load images
  useEffect(() => {
    scrollCtx.current?.revert();
    preloadImages(currentSet, frameCount);
  }, [currentSet, frameCount, preloadImages]);

  // ✅ GSAP Scroll
  useLayoutEffect(() => {
    if (!isLoaded) return;

    rafRef.current = requestAnimationFrame(updateFrame);

    // Responsive scroll distance:
    // ~15px of scroll per frame, converted to % of viewport height
    // Mobile  < 768px  → 40 frames  → ~200%
    // Tablet  < 1024px → 220 frames → ~300%
    // Desktop ≥ 1024px → 220 frames → ~400%
    const w = window.innerWidth;
    const totalFrames = imagesRef.current.length;
    const pxPerFrame = 15;
    const scrollPx = totalFrames * pxPerFrame;
    const vh = window.innerHeight;
    let scrollPct = Math.round((scrollPx / vh) * 100);
    if (w < MOBILE_BREAKPOINT) scrollPct = Math.max(scrollPct, 200);
    else if (w < 1024)         scrollPct = Math.max(scrollPct, 300);
    else                       scrollPct = Math.max(scrollPct, 400);

    const ctx = gsap.context(() => {
      gsap.to(playhead.current, {
        frame: imagesRef.current.length - 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollPct}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });
    }, containerRef);

    scrollCtx.current = ctx;

    return () => {
      cancelAnimationFrame(rafRef.current);
      ctx.revert();
    };
  }, [isLoaded, updateFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: mobileHeight ? `${mobileHeight}px` : '100vh' }}
    >

      {/* ── Premium Loading Screen ── */}
      {showLoader && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 50,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(ellipse at 50% 40%, #0d0d0d 0%, #000 100%)',
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: isLoaded ? 'none' : 'all',
            overflow: 'hidden',
          }}
        >
          {/* Google Fonts */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@200;300;400&display=swap');
            @keyframes loaderPulse {
              0%,100% { opacity:0.35; letter-spacing:0.35em; }
              50%      { opacity:1;    letter-spacing:0.45em; }
            }
            @keyframes loaderSpin {
              from { transform: rotate(-90deg); }
              to   { transform: rotate(270deg); }
            }
            @keyframes bracketFadeIn {
              from { opacity:0; transform: scale(1.1); }
              to   { opacity:1; transform: scale(1); }
            }
            .loader-bracket { animation: bracketFadeIn 1s ease forwards; }
            .loader-pulse   { animation: loaderPulse 2s ease-in-out infinite; }
          `}</style>

          {/* Corner brackets */}
          <div className="loader-bracket" style={{ position:'absolute', top:28, left:28, width:44, height:44, borderTop:'1.5px solid rgba(201,168,76,0.6)', borderLeft:'1.5px solid rgba(201,168,76,0.6)', animationDelay:'0s' }} />
          <div className="loader-bracket" style={{ position:'absolute', top:28, right:28, width:44, height:44, borderTop:'1.5px solid rgba(201,168,76,0.6)', borderRight:'1.5px solid rgba(201,168,76,0.6)', animationDelay:'0.1s' }} />
          <div className="loader-bracket" style={{ position:'absolute', bottom:28, left:28, width:44, height:44, borderBottom:'1.5px solid rgba(201,168,76,0.6)', borderLeft:'1.5px solid rgba(201,168,76,0.6)', animationDelay:'0.2s' }} />
          <div className="loader-bracket" style={{ position:'absolute', bottom:28, right:28, width:44, height:44, borderBottom:'1.5px solid rgba(201,168,76,0.6)', borderRight:'1.5px solid rgba(201,168,76,0.6)', animationDelay:'0.3s' }} />

          {/* Top + bottom edge glow lines */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />

          {/* ── SVG Circular Progress Ring ── */}
          {(() => {
            const R = 82;
            const C = 2 * Math.PI * R;
            const offset = C * (1 - loadingProgress / 100);
            return (
              <div style={{ position:'relative', width:200, height:200, marginBottom:36 }}>
                <svg width="200" height="200" style={{ display:'block' }}>
                  {/* Outer subtle track */}
                  <circle cx="100" cy="100" r={R} fill="none"
                    stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"
                    transform="rotate(-90 100 100)" />
                  {/* Glow duplicate */}
                  <circle cx="100" cy="100" r={R} fill="none"
                    stroke="rgba(201,168,76,0.15)" strokeWidth="6"
                    strokeDasharray={C} strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                    style={{ transition:'stroke-dashoffset 0.4s ease', filter:'blur(4px)' }} />
                  {/* Gold progress arc */}
                  <circle cx="100" cy="100" r={R} fill="none"
                    stroke="#C9A84C" strokeWidth="1.5"
                    strokeDasharray={C} strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                    style={{ transition:'stroke-dashoffset 0.4s ease' }} />
                  {/* Inner ring */}
                  <circle cx="100" cy="100" r="70" fill="none"
                    stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
                </svg>

                {/* Centre: monogram + counter */}
                <div style={{
                  position:'absolute', inset:0,
                  display:'flex', flexDirection:'column',
                  alignItems:'center', justifyContent:'center', gap:4,
                }}>
                  <span style={{
                    fontFamily:'"Playfair Display", Georgia, serif',
                    fontSize:11, color:'#C9A84C',
                    letterSpacing:'0.4em', textTransform:'uppercase',
                  }}>SLCMS</span>
                  <span style={{
                    fontFamily:'"Inter", sans-serif',
                    fontSize:34, fontWeight:200, color:'#fff',
                    lineHeight:1, letterSpacing:'-0.01em',
                  }}>{loadingProgress}</span>
                  <span style={{
                    fontFamily:'"Inter", sans-serif',
                    fontSize:10, fontWeight:300,
                    color:'rgba(255,255,255,0.4)', letterSpacing:'0.2em',
                  }}>%</span>
                </div>
              </div>
            );
          })()}

          {/* College name block */}
          <div style={{ textAlign:'center', marginBottom:6 }}>
            <div style={{
              fontFamily:'"Playfair Display", Georgia, serif',
              fontSize: 'clamp(16px, 4vw, 22px)',
              fontWeight:400, color:'#fff',
              letterSpacing:'0.06em', lineHeight:1.4,
              marginBottom:4,
            }}>Sri Lakshmi College of</div>
            <div style={{
              fontFamily:'"Playfair Display", Georgia, serif',
              fontSize: 'clamp(16px, 4vw, 22px)',
              fontWeight:400, color:'#fff',
              letterSpacing:'0.06em', lineHeight:1.4,
            }}>Management &amp; Science</div>
          </div>

          {/* Gold rule */}
          <div style={{
            width:56, height:1, margin:'18px 0',
            background:'linear-gradient(90deg,transparent,#C9A84C,transparent)',
          }} />

          {/* Pulsing status label */}
          <div className="loader-pulse" style={{
            fontFamily:'"Inter", sans-serif',
            fontSize:9, color:'rgba(255,255,255,0.45)',
            letterSpacing:'0.35em', textTransform:'uppercase',
          }}>Loading Experience</div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}