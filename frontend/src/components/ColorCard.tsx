import { Color } from "../types/palette";

interface ColorCardProps {
  color: Color;
}

export default function ColorCard({ color }: ColorCardProps) {
  return (
    <div className="rounded-xl shadow bg-white p-4 text-center">
      <div
        className="h-24 rounded-lg mb-4"
        style={{ backgroundColor: color.hex }}
      ></div>
      <p className="font-mono text-sm">{color.hex}</p>
      <p className="text-xs text-gray-500">{color.rgb}</p>
    </div>
  );
}