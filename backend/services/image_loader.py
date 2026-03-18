from PIL import Image
import io
import pillow_heif

pillow_heif.register_heif_opener()

def load_image(contents: bytes):
    try:
        image = Image.open(io.BytesIO(contents))

        # Convert ALL formats to RGB (CRITICAL)
        image = image.convert("RGB")

        return image

    except Exception as e:
        print("IMAGE LOAD ERROR:", str(e))
        raise Exception("Unsupported image format")