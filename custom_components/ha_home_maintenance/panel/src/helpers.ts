export const loadConfigDashboard = async (): Promise<void> => {
  // Load HA config dashboard resources if available
  if ((window as any).loadCardHelpers) {
    await (window as any).loadCardHelpers();
  }
};

// Some themes (e.g. "Frosted Glass") don't correlate --text-primary-color with
// --primary-color, so the theme's fallback text color can end up matching the
// button background instead of contrasting with it. Rather than trust that
// pairing, resolve the actual button background at runtime and pick a text
// color guaranteed to be readable against it.
const resolveColorToRgb = (color: string): [number, number, number] | null => {
  const probe = document.createElement("div");
  probe.style.color = color;
  probe.style.display = "none";
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  const match = resolved.match(/[\d.]+/g);
  if (!match || match.length < 3) return null;
  return [parseFloat(match[0]), parseFloat(match[1]), parseFloat(match[2])];
};

const getReadableTextColor = (backgroundColor: string): string => {
  const rgb = resolveColorToRgb(backgroundColor);
  if (!rgb) return "#ffffff";
  const [r, g, b] = rgb;
  const channelLuminance = (channel: number): number => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const relativeLuminance = 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
  return relativeLuminance > 0.5 ? "#000000" : "#ffffff";
};

// Sets --readable-primary-text on the host element to a color guaranteed to
// contrast with the theme's --primary-color, regardless of whether the
// active theme pairs --text-primary-color with it correctly.
export const applyPrimaryButtonContrast = (host: HTMLElement): void => {
  const primaryColor = getComputedStyle(host).getPropertyValue("--primary-color").trim();
  if (!primaryColor) return;
  host.style.setProperty("--readable-primary-text", getReadableTextColor(primaryColor));
};
