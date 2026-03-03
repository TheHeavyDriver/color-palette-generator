"use client";

import { useState } from "react";
import Header from "../components/Header";
import UploadZone from "../components/UploadZone";
import ImagePreview from "../components/ImagePreview";
import PaletteDisplay from "../components/PaletteDisplay";
import LoadingSpinner from "../components/LoadingSpinner";
import { Palette } from "../types/palette";
import { extractPalette } from "../utils/api";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [palette, setPalette] = useState<Palette | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = async (file: File) => {
  const url = URL.createObjectURL(file);
  setImageUrl(url);
  setLoading(true);

  try {
    const data = await extractPalette(file);
    setPalette(data);
  } catch (error) {
    console.error(error);
    alert("Error extracting palette");
  } finally {
    setLoading(false);
  }
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