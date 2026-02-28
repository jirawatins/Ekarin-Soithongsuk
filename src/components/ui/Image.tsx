// @ts-nocheck
import { cn } from "@/lib/utils";
import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ImageProps {
  className?: string;
  fill?: boolean;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  src?: string;
  alt?: string;
  [key: string]: any;
}

export default function Image({ className, fill, priority, placeholder, blurDataURL, sizes, src, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        fill ? "absolute inset-0 h-full w-full object-cover" : "",
        className
      )}
      loading={priority ? "eager" : "lazy"}
      onLoad={() => setLoaded(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
