import React, { useState, useRef, useEffect } from "react";
import Image from "./Image";
import { MoveHorizontal, Layers, ScanLine, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompareSliderProps {
  renderUrl: string;
  wireframeUrl: string;
  alt: string;
}

export function CompareSlider({ renderUrl, wireframeUrl, alt }: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSliderPosition((prev) => (prev > 50 ? 0 : 100));
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        handleMove(e);
      }
    };

    const handleGlobalUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchmove", handleGlobalMove);
    window.addEventListener("touchend", handleGlobalUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1e1e22] shadow-2xl select-none cursor-ew-resize touch-pan-y"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Wireframe Layer (Background - Right Side Visible) */}
      <div className="absolute inset-0">
        <Image
          src={wireframeUrl}
          alt={`${alt} Wireframe`}
          fill
          sizes="(max-width: 1200px) 100vw, 66vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJCAG0s2s8rAAAAABJRU5ErkJggg=="
          className="object-cover"
          priority
        />
        <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-500 group-hover:opacity-100 opacity-0 md:opacity-100">
          <ScanLine className="h-3.5 w-3.5 text-neutral-400" />
          <span>Wireframe</span>
        </div>
      </div>

      {/* Render Layer (Foreground - Left Side Visible - Clipped) */}
      <div 
        className={cn(
          "absolute inset-0 overflow-hidden",
          !isDragging && "transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        )}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={renderUrl}
          alt={`${alt} Render`}
          fill
          sizes="(max-width: 1200px) 100vw, 66vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJCAG0s2s8rAAAAABJRU5ErkJggg=="
          className="object-cover"
          priority
        />
        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-brand-main px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-main/20 transition-all duration-500 group-hover:opacity-100 opacity-0 md:opacity-100">
          <ImageIcon className="h-3.5 w-3.5" />
          <span>Render</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className={cn(
          "absolute top-0 bottom-0 z-20 flex flex-col items-center justify-center",
          !isDragging && "transition-[left] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        )}
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Vertical Line */}
        <div className="h-full w-0.5 bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] backdrop-blur-sm"></div>

        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-110 active:scale-95">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-lg"
      >
        <Layers className="h-3.5 w-3.5" />
        <span>Switch View</span>
      </button>
    </div>
  );
}
