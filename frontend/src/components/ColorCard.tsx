"use client";

import { useState } from "react";
import { Color } from "../types/palette";

interface ColorCardProps {
  color: Color;
}

export default function ColorCard({ color }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color.hex);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="rounded-xl shadow bg-white p-4 text-center">
      <div
        className="h-24 rounded-lg mb-4"
        style={{ backgroundColor: color.hex }}
      ></div>

      <p className="font-mono text-sm">{color.hex}</p>
      <p className="text-xs text-gray-500">{color.rgb}</p>

      <button
        onClick={copyColor}
        className="mt-3 px-3 py-1 text-sm bg-gray-900 text-white rounded hover:bg-gray-700 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}