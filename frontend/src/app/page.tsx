"use client";

import { useState } from "react";
import Header from "../components/Header";
import UploadZone from "../components/UploadZone";
import ImagePreview from "../components/ImagePreview";
import PaletteDisplay from "../components/PaletteDisplay";
import LoadingSpinner from "../components/LoadingSpinner";
import { Palette } from "../types/palette";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [palette, setPalette] = useState<Palette | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = async (file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    setLoading(true);

    // TEMP fake palette
    setTimeout(() => {
      setPalette({
        colors: [
          { hex: "#FF5733", rgb: "255, 87, 51" },
          { hex: "#33FF57", rgb: "51, 255, 87" },
          { hex: "#3357FF", rgb: "51, 87, 255" },
          { hex: "#F1C40F", rgb: "241, 196, 15" },
          { hex: "#8E44AD", rgb: "142, 68, 173" },
        ],
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <UploadZone onFileSelect={handleFileSelect} />

        {imageUrl && <ImagePreview imageUrl={imageUrl} />}

        {loading && <LoadingSpinner />}

        <PaletteDisplay palette={palette} />
      </main>
    </>
  );
}