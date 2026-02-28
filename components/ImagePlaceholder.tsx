import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
  gradient?: string;
  src?: string;
  alt?: string;
  sizes?: string;
}

export default function ImagePlaceholder({
  aspectRatio = "3/2",
  className,
  label,
  gradient,
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm",
        !gradient && "bg-background-secondary",
        className
      )}
      style={{ aspectRatio }}
    >
      {gradient && (
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      )}
      {src ? (
        <Image
          src={src}
          alt={alt || label || ""}
          fill
          className="object-cover"
          sizes={sizes}
          quality={90}
        />
      ) : (
        label && (
          <span
            className={cn(
              "relative z-10 flex h-full items-center justify-center p-6 text-center text-lg font-medium tracking-wide sm:text-xl",
              gradient ? "text-white/80" : "text-foreground-secondary"
            )}
          >
            {label}
          </span>
        )
      )}
    </div>
  );
}
