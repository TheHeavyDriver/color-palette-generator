def relative_luminance(r, g, b):
    r = r / 255
    g = g / 255
    b = b / 255

    r = r / 12.92 if r <= 0.03928 else ((r + 0.055) / 1.055) ** 2.4
    g = g / 12.92 if g <= 0.03928 else ((g + 0.055) / 1.055) ** 2.4
    b = b / 12.92 if b <= 0.03928 else ((b + 0.055) / 1.055) ** 2.4

    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(rgb1, rgb2):
    L1 = relative_luminance(*rgb1)
    L2 = relative_luminance(*rgb2)

    lighter = max(L1, L2)
    darker = min(L1, L2)

    return (lighter + 0.05) / (darker + 0.05)


def wcag_rating(rgb):
    white = (255, 255, 255)

    ratio = contrast_ratio(rgb, white)

    if ratio >= 7:
        return "AAA"
    elif ratio >= 4.5:
        return "AA"
    else:
        return "Fail"