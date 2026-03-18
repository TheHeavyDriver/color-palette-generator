export async function extractPalette(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    "https://palettrixa.onrender.com/extract-palette",
    {
      method: "POST",
      body: formData,
    }
  );

  const text = await response.text();

  console.log("RAW RESPONSE:", text);

  if (!response.ok) {
    const err = await response.text();
    console.error("Backend error:", err);
    throw new Error(err);
  }

  return response.json();
}