interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({ onFileSelect }: UploadZoneProps) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-white hover:border-gray-400 transition">
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
          PNG or JPG up to 5MB
        </p>
      </label>
    </div>
  );
}