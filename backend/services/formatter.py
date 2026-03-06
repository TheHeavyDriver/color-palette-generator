from services.accessibility import wcag_rating


def rgb_to_hex(rgb):
    return "#{:02X}{:02X}{:02X}".format(rgb[0], rgb[1], rgb[2])


def format_palette(colors):
    formatted = []

    for color in colors:
        rgb_tuple = (int(color[0]), int(color[1]), int(color[2]))

        hex_value = rgb_to_hex(rgb_tuple)
        rgb_string = f"{rgb_tuple[0]}, {rgb_tuple[1]}, {rgb_tuple[2]}"

        rating = wcag_rating(rgb_tuple)

        formatted.append({
            "hex": hex_value,
            "rgb": rgb_string,
            "contrast": rating
        })

    return formatted