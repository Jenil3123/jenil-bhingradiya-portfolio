"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <div key={index} className="gallery-item">
          {/* Image (NOT clickable) */}
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={
              image.orientation === "horizontal" ? "16 / 9" : "3 / 4"
            }
            src={image.src}
            alt={image.alt}
          />

          {/* Content BELOW image */}
          {(image.title || image.subtitle) && (
            <div className="gallery-meta">

              {/* Title (ONLY title is clickable) */}
              {image.title && image.href ? (
                <a
                  href={image.href}
                  target={image.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="gallery-title"
                >
                  {image.title}
                </a>
              ) : (
                image.title && (
                  <div className="gallery-title">{image.title}</div>
                )
              )}

              {/* Subtitle */}
              {image.subtitle && (
                <div className="gallery-subtitle">{image.subtitle}</div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Scoped styles */}
      <style jsx>{`
  .gallery-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .gallery-meta {
    padding-left: 6px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Label */
  .gallery-label {
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--color-text-tertiary);
  }

  /* Title */
  .gallery-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .gallery-title:hover {
    opacity: 0.7;
  }

  /* Subtitle */
  .gallery-subtitle {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--color-text-secondary);
    max-width: 92%;
  }
`}</style>

    </MasonryGrid>
  );
}
