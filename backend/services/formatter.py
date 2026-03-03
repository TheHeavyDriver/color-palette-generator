def rgb_to_hex(rgb):
    return "#{:02X}{:02X}{:02X}".format(rgb[0], rgb[1], rgb[2])

def format_palette(colors):
    formatted = []
    for color in colors:
        hex_value = rgb_to_hex(color)
        rgb_string = f"{color[0]}, {color[1]}, {color[2]}"
        formatted.append({
            "hex": hex_value,
            "rgb": rgb_string
        })
    return formatted