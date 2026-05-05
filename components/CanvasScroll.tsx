"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const TOTAL_FRAMES = 300;
const START_FRAME = 1;
const FRAME_BASE = "/assets/sequence/";

const frameUrl = (index: number) => {
  const frameNumber = START_FRAME + index;
  return `${FRAME_BASE}ezgif-frame-${String(frameNumber).padStart(3, "0")}.jpg`;
};

type OverlayKey =
  | "overlay1"
  | "overlay2"
  | "overlay3"
  | "overlay4"
  | "overlay5"
  | "overlay6"
  | "overlay7"
  | "overlay8";
type Position =
  | "left"
  | "right"
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom"
  | "bottom-right";

interface Overlay {
  key: OverlayKey;
  start: number;
  end: number;
  position: Position;
}

const OVERLAYS: Overlay[] = [
  { key: "overlay1", start: 0, end: 35, position: "right" },
  { key: "overlay2", start: 45, end: 75, position: "top-right" },
  { key: "overlay3", start: 85, end: 115, position: "bottom-left" },
  { key: "overlay4", start: 125, end: 155, position: "right" },
  { key: "overlay5", start: 165, end: 195, position: "top-left" },
  { key: "overlay6", start: 205, end: 235, position: "bottom" },
  { key: "overlay7", start: 245, end: 270, position: "bottom-right" },
  { key: "overlay8", start: 280, end: 299, position: "bottom-right" },
];

export default function CanvasScroll() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const [activeOverlayKey, setActiveOverlayKey] = useState<OverlayKey | null>(
    null,
  );

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = framesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // FİZİKSEL ÇİZİM BOYUTLARI
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // COVER HESAPLAMA: Görseli bozmadan alanı dolduracak ölçek
    const scale = Math.max(
      canvasWidth / img.naturalWidth,
      canvasHeight / img.naturalHeight,
    );
    const drawWidth = img.naturalWidth * scale;
    const drawHeight = img.naturalHeight * scale;

    // MERKEZLEME NOKTASI (Screenshot'taki sol kaymayı bu satır çözer)
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = () => {
        if (i === 0) drawFrame(0);
      };
      framesRef.current[i] = img;
    }
  }, [drawFrame]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1],
  );

  useEffect(() => {
    const renderLoop = () => {
      const distance = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(distance) > 0.001) {
        currentFrameRef.current += distance * 0.15;
        drawFrame(Math.round(currentFrameRef.current));
      }
      rafRef.current = requestAnimationFrame(renderLoop);
    };
    rafRef.current = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawFrame]);

  useMotionValueEvent(frameProgress, "change", (latest) => {
    targetFrameRef.current = latest;
    const frame = Math.round(latest);
    const active = OVERLAYS.find((o) => frame >= o.start && frame <= o.end);
    if (active?.key !== activeOverlayKey)
      setActiveOverlayKey(active?.key ?? null);
  });

  // RESOLUTION & CENTER FIX
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;

      // CSS boyutlarını değil, gerçek piksel boyutlarını set ediyoruz
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // İlk kareyi yeni boyutlarla çiz
      drawFrame(Math.round(currentFrameRef.current));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Başlangıçta çalıştır

    // Bazı tarayıcılar yükleme anında yanlış genişlik verebilir, 100ms sonra tekrar kontrol et
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [drawFrame]);

  const currentOverlay = OVERLAYS.find((o) => o.key === activeOverlayKey);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "800vh" }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="block touch-none pointer-events-none"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="absolute inset-0 z-50 pointer-events-none px-6 md:px-24 flex flex-col">
          <AnimatePresence mode="wait">
            {activeOverlayKey && currentOverlay && (
              <motion.div
                key={activeOverlayKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`w-full h-full flex flex-col ${
                  currentOverlay.position.includes("top")
                    ? "justify-start pt-24 md:pt-32"
                    : currentOverlay.position.includes("bottom")
                      ? "justify-end pb-24 md:pb-32"
                      : "justify-center"
                } ${
                  currentOverlay.position.includes("left")
                    ? "items-start text-left"
                    : currentOverlay.position.includes("right")
                      ? "items-end text-right"
                      : "items-center text-center"
                }`}
              >
                <div className="max-w-[90vw] md:max-w-4xl">
                  <h2 className="text-[clamp(2.2rem,10vw,6rem)] font-bold text-white mb-4 uppercase tracking-tighter leading-[0.85]">
                    {t.sequence[activeOverlayKey].title}
                  </h2>
                  <p className="text-[clamp(0.9rem,3.5vw,1.1rem)] text-white/40 leading-relaxed font-light max-w-xl">
                    {t.sequence[activeOverlayKey].body}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
