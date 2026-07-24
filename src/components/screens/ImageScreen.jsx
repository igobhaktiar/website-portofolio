/**
 * Renders a real app screenshot inside the frameless `.phone` card.
 * `makeImageScreen(src, alt)` returns a screen component so it can slot into
 * the same `screens` map as the hand-built mock UIs.
 */
export function makeImageScreen(src, alt) {
  function ImageScreen() {
    return <img className="app-shot" src={src} alt={alt} loading="lazy" />;
  }
  ImageScreen.displayName = `ImageScreen(${src})`;
  return ImageScreen;
}
