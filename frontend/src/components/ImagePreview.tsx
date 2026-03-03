interface ImagePreviewProps {
  imageUrl: string;
}

export default function ImagePreview({ imageUrl }: ImagePreviewProps) {
  return (
    <div className="mt-6">
      <img
        src={imageUrl}
        alt="Uploaded Preview"
        className="rounded-lg shadow-md max-h-64 object-contain mx-auto"
      />
    </div>
  );
}