from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import pillow_heif
import io

from services.preprocessing import preprocess_image
from services.clustering import extract_dominant_colors
from services.formatter import format_palette

# Enable HEIC support (mobile photos)
pillow_heif.register_heif_opener()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://palettrixa.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend running"}

@app.post("/extract-palette")
async def extract_palette(file: UploadFile = File(...)):

    contents = await file.read()

    # Load image safely
    image = Image.open(io.BytesIO(contents))

    # Convert to RGB (handles PNG/HEIC/etc)
    image = image.convert("RGB")

    # Resize very large mobile photos
    image.thumbnail((800, 800))

    pixels = preprocess_image(image)
    colors = extract_dominant_colors(pixels)
    palette = format_palette(colors)

    return {"colors": palette}