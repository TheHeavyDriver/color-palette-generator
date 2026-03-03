import { Palette } from "../types/palette";
import ColorCard from "./ColorCard";

interface PaletteDisplayProps {
  palette: Palette | null;
}

export default function PaletteDisplay({ palette }: PaletteDisplayProps) {
  if (!palette) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
      {palette.colors.map((color, index) => (
        <ColorCard key={index} color={color} />
      ))}
    </div>
  );
}