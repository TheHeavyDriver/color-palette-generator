export async function extractPalette(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/extract-palette`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to extract palette");
  }

  return response.json();
}