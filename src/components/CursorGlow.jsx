import { useEffect, useRef } from 'react'

// A soft teal glow, fixed to the viewport, that follows the cursor
// anywhere on the page — purely decorative, sits behind all content.
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty('--gx', `${e.clientX}px`)
        glowRef.current.style.setProperty('--gy', `${e.clientY}px`)
        glowRef.current.style.opacity = '1'
      }
    }
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true"></div>
}
