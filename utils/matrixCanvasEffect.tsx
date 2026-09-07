"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/theme-provider";

export default function MatrixCanvasEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const colorRef = useRef<string>(theme === "dark" ? "#92400E" : "#6AB5B9");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateInterval = 40;
    const fontSize = 12;

    let columns = Math.floor(window.innerWidth / fontSize);
    let drops: number[] = Array(columns).fill(1);
    let animationFrameId: number;

    const setCanvasDimensions = () => {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext("2d");
      if (tempCtx) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.drawImage(tempCanvas, 0, 0);

      const oldColumns = columns;
      const oldDrops = [...drops];

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);

      for (let i = 0; i < Math.min(oldColumns, columns); i++) {
        drops[i] = oldDrops[i];
      }

      for (let i = oldColumns; i < columns; i++) {
        drops[i] = Math.random() * (canvas.height / fontSize);
      }
    };

    setCanvasDimensions();

    const matrixChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*()_+-=[]{}|;:,.<>?/~`";

    let lastUpdateTime = performance.now();

    const draw = (currentTime: number) => {
      if (currentTime - lastUpdateTime > updateInterval) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colorRef.current;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = matrixChars.charAt(
            Math.floor(Math.random() * matrixChars.length),
          );
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }

        lastUpdateTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(lastUpdateTime);

    window.addEventListener("resize", setCanvasDimensions);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    colorRef.current = theme === "dark" ? "#92400E" : "#6AB5B9";
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
