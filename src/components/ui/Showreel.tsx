import { Play } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

export function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-neutral-900 dark:bg-black shadow-2xl group">
      {!isPlaying ? (
        <div className="relative h-full w-full cursor-pointer transition-transform duration-700 group-hover:scale-105" onClick={() => setIsPlaying(true)}>
          {/* Placeholder Thumbnail with Gradient Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl transition-all duration-300"
            >
              <Play className="h-10 w-10 text-white fill-white ml-1 drop-shadow-lg" />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
      )}
    </div>
  );
}
