'use client';
import React, { useEffect, useRef, useState } from 'react';

interface PixelArtImageProps {
  imageSrc: string;
  pixelSize?: number;
}

const PixelArtImage: React.FC<PixelArtImageProps> = ({ imageSrc, pixelSize = 16 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixels, setPixels] = useState<string[][]>([]);
  const [palette, setPalette] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const width = pixelSize;
      const height = pixelSize;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw image scaled down
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height).data;
      const tempPixels: string[][] = [];
      const colorSet = new Set<string>();

      for (let y = 0; y < height; y++) {
        const row: string[] = [];
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const hex = rgbToHex(r, g, b);
          row.push(hex);
          colorSet.add(hex);
        }
        tempPixels.push(row);
      }

      setPixels(tempPixels);
      setPalette(Array.from(colorSet).slice(0, 10)); // Show top 10 unique colors
    };
  }, [imageSrc, pixelSize]);

  const rgbToHex = (r: number, g: number, b: number) =>
    `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;

  const handlePixelClick = (x: number, y: number) => {
    const newPixels = [...pixels];
    newPixels[y][x] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Pixel Art Coloring</h2>

      {/* Color Palette */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', gap: '8px' }}>
        {palette.map((color, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedColor(color)}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: color,
              border: selectedColor === color ? '2px solid black' : '1px solid #ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Pixel Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${pixelSize}, 20px)`,
          gap: '1px',
          justifyContent: 'center',
        }}
      >
        {pixels.flatMap((row, y) =>
          row.map((color, x) => (
            <div
              key={`${x}-${y}`}
              onClick={() => handlePixelClick(x, y)}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: color,
                cursor: 'pointer',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PixelArtImage;
