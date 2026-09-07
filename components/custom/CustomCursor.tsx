"use client";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const lerp = (start: number, end: number, t: number): number =>
  start * (1 - t) + end * t;

const TEXT_INPUT_SELECTOR =
  'input, textarea, select, [contenteditable="true"], [contenteditable=""]';

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null);
  const [isOverTextInput, setIsOverTextInput] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth <= 974) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let cursorAnimationFrame: number;

    const updateCursorPosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as Element;
      const hoveredCursorTarget = target?.closest(".custom-cursor");
      setHoveredElement(hoveredCursorTarget);

      const textInputTarget = target?.closest(TEXT_INPUT_SELECTOR);
      setIsOverTextInput(Boolean(textInputTarget));
    };

    const handleElementUnhover = () => {
      setHoveredElement(null);
      setIsOverTextInput(false);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseout", handleElementUnhover);

    const animateCursor = () => {
      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, targetPosition.x, 0.05),
        y: lerp(prevPosition.y, targetPosition.y, 0.05),
      }));

      cursorAnimationFrame = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseout", handleElementUnhover);
      cancelAnimationFrame(cursorAnimationFrame);
    };
  }, [isDesktop, targetPosition]);

  if (!isDesktop || isOverTextInput) return null;

  return (
    <div
      className={`bg-custom5/50 rounded-full fixed z-50 pointer-events-none ${
        hoveredElement
          ? "w-20 h-20 bg-transparent border border-custom5 transition-multiple duration-300 ease-in-out"
          : "w-8 h-8 transition-multiple duration-300 ease-in-out"
      }`}
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
