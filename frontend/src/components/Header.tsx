export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="w-full px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Palettrixa
        </h1>

        <span className="text-sm text-gray-500">
          Accessible Color Extraction
        </span>
      </div>
    </header>
  );
}