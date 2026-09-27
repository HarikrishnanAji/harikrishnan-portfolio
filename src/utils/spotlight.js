// Tracks the cursor position inside a card and exposes it as CSS variables
// (--mx, --my) so a radial-gradient glow can follow the mouse on hover.
export function handleSpotlight(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mx', `${x}%`)
  el.style.setProperty('--my', `${y}%`)
}
