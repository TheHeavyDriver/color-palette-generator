from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from services.image_loader import load_image
from services.preprocessing import preprocess_image
from services.clustering import extract_dominant_colors
from services.formatter import format_palette
from fastapi.middleware.cors import CORSMiddleware

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

    image = load_image(contents)
    pixels = preprocess_image(image)
    colors = extract_dominant_colors(pixels)
    palette = format_palette(colors)

    return {"colors": palette}