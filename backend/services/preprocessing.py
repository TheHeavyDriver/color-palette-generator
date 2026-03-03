import numpy as np
from PIL import Image
from config import MAX_IMAGE_SIZE

def preprocess_image(image: Image.Image) -> np.ndarray:
    image.thumbnail(MAX_IMAGE_SIZE)
    image_array = np.array(image)
    pixels = image_array.reshape(-1, 3)
    return pixels