"""Generate integration icon (icon.png and icon@2x.png) for Home Maintenance Pro."""

from PIL import Image, ImageDraw
import math
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(BASE, "custom_components", "ha_home_maintenance")


def draw_icon(size: int) -> Image.Image:
    """Draw a home-maintenance icon at the given pixel size."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    s = size  # shorthand

    # --- Background: rounded-rect circle ---
    pad = int(s * 0.04)
    radius = int(s * 0.22)
    bg_color = (33, 150, 243)  # Material Blue 500
    draw.rounded_rectangle(
        [pad, pad, s - pad, s - pad], radius=radius, fill=bg_color
    )

    # --- House body ---
    white = (255, 255, 255)
    lw = max(int(s * 0.03), 1)  # line width

    # House outline: a rectangle for the base
    hx1 = int(s * 0.22)
    hy1 = int(s * 0.42)
    hx2 = int(s * 0.62)
    hy2 = int(s * 0.78)
    draw.rectangle([hx1, hy1, hx2, hy2], fill=None, outline=white, width=lw)

    # Roof: triangle
    roof_peak = (int(s * 0.42), int(s * 0.20))
    roof_left = (int(s * 0.15), int(s * 0.44))
    roof_right = (int(s * 0.69), int(s * 0.44))
    draw.polygon([roof_peak, roof_left, roof_right], fill=white)
    # Cut out the interior of the roof to make it outlined
    inset = int(s * 0.05)
    inner_peak = (int(s * 0.42), int(s * 0.20) + int(s * 0.07))
    inner_left = (roof_left[0] + inset + lw, roof_left[1] - lw)
    inner_right = (roof_right[0] - inset - lw, roof_right[1] - lw)
    draw.polygon([inner_peak, inner_left, inner_right], fill=bg_color)

    # Door
    dx1 = int(s * 0.35)
    dy1 = int(s * 0.58)
    dx2 = int(s * 0.49)
    dy2 = hy2
    draw.rectangle([dx1, dy1, dx2, dy2], fill=white)

    # --- Wrench (bottom-right) ---
    cx = int(s * 0.72)
    cy = int(s * 0.68)
    wrench_len = int(s * 0.28)
    angle = -45  # degrees
    rad = math.radians(angle)
    cos_a = math.cos(rad)
    sin_a = math.sin(rad)

    # Shaft
    shaft_w = max(int(s * 0.045), 2)
    x1 = cx - int(wrench_len * 0.5 * cos_a)
    y1 = cy - int(wrench_len * 0.5 * sin_a)
    x2 = cx + int(wrench_len * 0.5 * cos_a)
    y2 = cy + int(wrench_len * 0.5 * sin_a)
    draw.line([(x1, y1), (x2, y2)], fill=white, width=shaft_w)

    # Wrench head (top-end) — open jaw as a small circle
    head_r = int(s * 0.06)
    draw.ellipse(
        [x2 - head_r, y2 - head_r, x2 + head_r, y2 + head_r],
        fill=None,
        outline=white,
        width=max(int(s * 0.025), 1),
    )

    # Wrench handle (bottom-end) — small rounded end
    handle_r = int(s * 0.035)
    draw.ellipse(
        [x1 - handle_r, y1 - handle_r, x1 + handle_r, y1 + handle_r],
        fill=white,
    )

    return img


if __name__ == "__main__":
    icon = draw_icon(256)
    icon.save(os.path.join(OUT_DIR, "icon.png"))
    print(f"Saved icon.png (256x256)")

    icon2x = draw_icon(512)
    icon2x.save(os.path.join(OUT_DIR, "icon@2x.png"))
    print(f"Saved icon@2x.png (512x512)")
