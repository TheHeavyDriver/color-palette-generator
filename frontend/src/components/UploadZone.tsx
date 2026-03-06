"use client";

import { useState } from "react";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({ onFileSelect }: UploadZoneProps) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-xl p-8 text-center bg-white transition
      ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        id="fileUpload"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            onFileSelect(e.target.files[0]);
          }
        }}
      />

      <label htmlFor="fileUpload" className="cursor-pointer">
        <p className="text-lg font-medium">Upload Image</p>
        <p className="text-sm text-gray-500 mt-2">
          Drag & drop or click to upload (PNG / JPG)
        </p>
      </label>
    </div>
  );
}